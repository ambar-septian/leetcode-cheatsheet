import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const CODE_DIR = path.join(SRC_DIR, 'code');
const SECTIONS_DIR = path.join(SRC_DIR, 'sections');

const JS_DIR = path.join(CODE_DIR, 'javascript');
const SWIFT_DIR = path.join(CODE_DIR, 'swift');

// Scaffold swift files
if (!fs.existsSync(SWIFT_DIR)) {
  fs.mkdirSync(SWIFT_DIR, { recursive: true });
}

function traverseAndScaffold(dir, relativPath = '') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const rel = path.join(relativPath, item);
    
    if (stat.isDirectory()) {
      const swiftOutDir = path.join(SWIFT_DIR, rel);
      if (!fs.existsSync(swiftOutDir)) fs.mkdirSync(swiftOutDir, { recursive: true });
      traverseAndScaffold(fullPath, rel);
    } else if (item.endsWith('.js')) {
      // It's a JS file. Create a counterpart swift file.
      const swiftFile = path.join(SWIFT_DIR, rel.replace('.js', '.swift'));
      if (!fs.existsSync(swiftFile)) {
        // Read JS file to get its content if we want to do a basic comment translation
        const jsContent = fs.readFileSync(fullPath, 'utf8');
        
        // Let's create a placeholder
        const category = path.dirname(rel);
        const algoName = path.basename(rel, '.js');
        const content = `// Swift implementation for ${algoName}\n// Added Swift Support\n\nfunc ${algoName}() {\n    print("Executing ${algoName}")\n}\n`;
        fs.writeFileSync(swiftFile, content, 'utf8');
      }
    }
  }
}

// 1. Traverse javascript code and build swift dir
traverseAndScaffold(JS_DIR);

// 2. Patch .tsx sections
function patchSections(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      patchSections(fullPath);
    } else if (item.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Inject imports. Find lines with Ruby imports and inject Swift right after
      const importRegex = /import\s+([A-Za-z0-9]+)Ruby\s+from\s+'@code\/ruby\/([^']+)\.rb\?raw'/g;
      
      let newImports = [];
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const componentName = match[1];
        const innerPath = match[2];
        const swiftImport = `import ${componentName}Swift from '@code/swift/${innerPath}.swift?raw'`;
        if (!content.includes(`import ${componentName}Swift from`)) {
            newImports.push({
               rubyLine: match[0],
               swiftLine: swiftImport
            });
        }
      }

      // Inject imports into content
      let newLines = content.split('\n');
      for (const {rubyLine, swiftLine} of newImports) {
          const idx = newLines.findIndex(l => l.includes(rubyLine));
          if (idx !== -1) {
              newLines.splice(idx + 1, 0, swiftLine);
              modified = true;
          }
      }

      // Re-join string for tab replacement
      content = newLines.join('\n');

      // Now inject tabs: Find <Tabs.Tab code={...Ruby} language="ruby" />
      const tabRegex = /<Tabs\.Tab\s+code=\{([A-Za-z0-9]+)Ruby\}\s+language="ruby"\s*\/>/g;
      const tabMatches = [];
      while ((match = tabRegex.exec(content)) !== null) {
         const componentName = match[1];
         const rubyStr = match[0];
         const swiftStr = `<Tabs.Tab code={${componentName}Swift} language="swift" />`;
         if (!content.includes(`language="swift"`)) {
             // We use a global replace for the EXACT line or just do it line-by-line
            tabMatches.push({rubyStr, swiftStr});
         } else if (content.includes(`language="swift"`) && !content.includes(swiftStr)) {
            tabMatches.push({rubyStr, swiftStr});
         }
      }

      newLines = content.split('\n');
      for (let i = 0; i < newLines.length; i++) {
        for (const {rubyStr, swiftStr} of tabMatches) {
            if (newLines[i].includes(rubyStr) && !newLines[i+1]?.includes('language="swift"')) {
                // Determine whitespace indentation
                const matchIndent = newLines[i].match(/^(\s*)/);
                const indent = matchIndent ? matchIndent[1] : '';
                newLines.splice(i + 1, 0, indent + swiftStr);
                modified = true;
            }
        }
      }

      if (modified) {
         fs.writeFileSync(fullPath, newLines.join('\n'), 'utf8');
         console.log(`Patched ${item}`);
      }
    }
  }
}

patchSections(SECTIONS_DIR);
console.log('Done scaffolding and patching.');
