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

```
true && true
true && false
```
