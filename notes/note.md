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
  - Dense graph
- Kruskal's: $O(Elog(E))$
  - Union-find
  - Not-connected graph
  - Sparse graph

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

### Union-Find

```text
       4
      / \     3
1    6   2    |
         |    5
         7
```

| 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 4   | 3   | 4   | 3   | 4   | 2   |

Complexity: $O(log(n))$

Complexity with optimism (path compression & union by rank): $O(\alpha(N))$ (inverse Ackermann function (very small, nearly constant))

```js
class UnionFind {
	#par = []; // Parents
	#rank = []; // Depth of each tree
	constructor(n) {
		this.#par = new Array(n).fill(0).map((_, i) => i);
		this.#rank = new Array(n).fill(1);
	}
	find(x) {
		while (x !== this.#par[x]) {
			// Path compression
			this.#par[x] = this.#par[this.#par[x]];
			x = this.#par[x];
		}
		return x;
	}
	union(x, y) {
		const px = this.find(x),
			py = this.find(y);
		if (px === py) {
			return false;
		}
		// Union by rank
		if (this.#rank[px] > this.#rank[py]) {
			this.#par[py] = px;
		} else if (this.#rank[px] < this.#rank[py]) {
			this.#par[px] = py;
		} else {
			this.#par[py] = px;
			this.#rank[px]++;
		}
		return true;
	}
}
```

## Quick Select

<https://youtu.be/XEmy13g1Qxc?si=gd3Q5S-cBqi-863D>

Find kth element

- Partition like quick sort
- Do partition until the pivot final position is the kth element

### Choosing Pivot

> ADM(3rd) P508  
> Works for quick sort as well

- **Use randomization** - By randomly permuting the keys before sorting, you can eliminate the potential embarrassment of quadratic-time behavior on nearly sorted data.

- **Median of three** - For your pivot element, use the median of the first, last, and middle elements of the array to increase the likelihood of partitioning the array into roughly equal pieces. Experiments suggest using a larger sample on big subarrays and a smaller sample on small ones.

- **Leave small subarrays for insertion sort** - Terminating the quicksort recursion and switching to insertion sort makes sense when the subarrays get small, say fewer than 20 elements. You should experiment to identify the best switch point for your implementation.

- **Do the smaller partition first** - You can minimize runtime memory by processing the smaller partition before the larger one. Since each successive stored call is at most half as large as the previous one, only $O(log(n))$ stack space is needed.

### Median of Medians

1. Original Array `[12,3,5,7,19,26,14,21,2,8,6,10]`
2. Divide array into groups of 5 elements
   - Group 1: `[12,3,5,7,19]`
   - Group 2: `[26,14,21,2,8]`
   - Group 3: `[6,10]`
3. Find medians of each group `[7,14,10]`
4. Find the median of the medians `10`
5. Use `10` as the pivot

### Time Complexities

- Best/Average Case: $O(N)$
- Worst Case: $O(N^2)$

## Design Pattern

### Singleton Class

```js
class Restaurant {
	static #instance = null;
	constructor() {}
	static getInstance() {
		if (this.#instance === null) {
			this.#instance = new Restaurant();
		}
		return this.#instance;
	}
}
```

### Factory Method

```js
class CardGame {
	static createCardGame(type) {
		if (type === 'poker') {
			return new PokerGame();
		}
		if (type === 'black-jack') {
			return new BlackJackGame();
		}
		return null;
	}
}
```

## AVL Tree

### Rotation

```text
      A
     / \           B
    B  Ar        /   \
   / \    -->   C     A
  C  Br        / \   / \
 / \          Cl Cr Br Ar
Cl Cr
```

```text
  A
 / \               B
Al  B            /   \
   / \    -->   A     C
  Bl  C        / \   / \
     / \      Al Bl Cl Cr
    Cl Cr
```

```text
    A             A
   / \           / \           C
  B  Ar         C  Ar        /   \
 / \    -->    / \    -->   B     A
Bl  C         B  Cr        / \   / \
   / \       / \          Bl Cl Cr Ar
  Cl Cr     Bl Cl
```

```text
  A           A
 / \         / \               C
Al  B       Al  C            /   \
   / \  -->    / \    -->   A     B
  C  Br       Cl  B        / \   / \
 / \             / \      Al Cl Cr Br
Cl Cr           Cr Br
```

## Bit Manipulation

XOR: Different = true

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators>
