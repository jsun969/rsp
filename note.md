# Note

## P vs NP

```text
                 +-------------------------+
                 |                         |
                 |                         |
 +---------------|--------------+          |
 |               |              |          |
 |   +----+      |              |          |
 |   | P  |  NP  | NP-Complete  |  NP-Hard |
 |   +----+      |              |          |
 |               |              |          |
 +---------------|--------------+          |
                 |                         |
                 |                         |
                 +-------------------------+
```

| Type                     | Discovery          | Verification       | Note                                            |
| ------------------------ | ------------------ | ------------------ | ----------------------------------------------- |
| P                        | Polynomial         | Polynomial         |                                                 |
| NP                       | Exponential        | Polynomial         |                                                 |
| NP-Complete              | Exponential        | Polynomial         | Can be reduced to 3SAT                          |
| NP but not P/NP-Complete | Exponential        | Polynomial         | e.g. Topological Sorting, Integer Factorization |
| NP-Hard                  | Exponential or N/A | Exponential or N/A |                                                 |

## Weighted Graph

### Minimal Spanning Tree

- Prim's:
  - Adjacency list and priority queue: $O((V+E)log(V))$
  - Adjacency matrix: $O(V^2)$
- Kruskal's: $O(Elog(E))$
  - Union find
  - Not-connected graph

### Shortest Path

- Dijkstra's:
  - Adjacency list and priority queue: $O((V+E)log(V))$
  - Adjacency matrix: $O(V^2)$
- Bellman-Ford: $O(VE)$
  - Relaxation V-1 times
  - Negative edges
  - Detect negative weight cycles (after V-1 times, if any edge can be relaxed)

### All-pairs shortest path

- Floyd-Warshall: $O(V^3)$

## Quick Select

<https://youtu.be/XEmy13g1Qxc?si=gd3Q5S-cBqi-863D>

Find kth element

- Partition like quick sort
- Do partition until the pivot final position is the kth element
