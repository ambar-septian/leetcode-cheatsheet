import styles from './BigO.module.sass'

export default function SortingAlgorithmsTable() {
    return (
        <section id="bigo-sorting-algorithms-table">
            <div className={styles.container}>
                <h3>Array Sorting Algorithms</h3>
                <div className={styles.tableWrapper}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Algorithm</th>
                                <th colSpan={3}>Time Complexity</th>
                                <th>Space Complexity</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>Best</th>
                                <th>Average</th>
                                <th>Worst</th>
                                <th>Worst</th>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Quicksort" target="_blank">Quicksort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.oliveGreen}>O(log(n))</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Merge_sort" target="_blank">Mergesort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Timsort" target="_blank">Timsort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Heapsort" target="_blank">Heapsort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Bubble_sort" target="_blank">Bubble Sort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.red}>Θ(n^2)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Insertion_sort" target="_blank">Insertion Sort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.red}>Θ(n^2)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Selection_sort" target="_blank">Selection Sort</a></td>
                                <td className={styles.red}>Ω(n^2)</td>
                                <td className={styles.red}>Θ(n^2)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="https://en.wikipedia.org/wiki/Tree_sort" target="_blank">Tree Sort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Shellsort" target="_blank">Shell Sort</a></td>
                                <td className={styles.orange}>Ω(n log(n))</td>
                                <td className={styles.red}>Θ(n(log(n))^2)</td>
                                <td className={styles.red}>O(n(log(n))^2)</td>
                                <td className={styles.green}>O(1)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Bucket_sort" target="_blank">Bucket Sort</a></td>
                                <td className={styles.green}>Ω(n+k)</td>
                                <td className={styles.green}>Θ(n+k)</td>
                                <td className={styles.red}>O(n^2)</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="http://en.wikipedia.org/wiki/Radix_sort" target="_blank">Radix Sort</a></td>
                                <td className={styles.green}>Ω(nk)</td>
                                <td className={styles.green}>Θ(nk)</td>
                                <td className={styles.green}>O(nk)</td>
                                <td className={styles.yellow}>O(n+k)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="https://en.wikipedia.org/wiki/Counting_sort">Counting Sort</a></td>
                                <td className={styles.green}>Ω(n+k)</td>
                                <td className={styles.green}>Θ(n+k)</td>
                                <td className={styles.green}>O(n+k)</td>
                                <td className={styles.yellow}>O(k)</td>
                            </tr>
                            <tr className={styles.dataRow}>
                                <td><a href="https://en.wikipedia.org/wiki/Cubesort" target="_blank">Cubesort</a></td>
                                <td className={styles.yellow}>Ω(n)</td>
                                <td className={styles.orange}>Θ(n log(n))</td>
                                <td className={styles.orange}>O(n log(n))</td>
                                <td className={styles.yellow}>O(n)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
