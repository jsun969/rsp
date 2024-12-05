class Graph {
	/**
	 * @type {Map<number, Array<number>>}
	 */
	#adjList = new Map();
	/**
	 * @param {number} num
	 */
	constructor(num) {
		for (let i = 0; i < num; i++) {
			this.#adjList.set(i, []);
		}
	}
	/**
	 * @param {number} src
	 * @param {number} dest
	 */
	addEdge(src, dest) {
		if (!this.#adjList.has(src) || !this.#adjList.has(dest))
			throw new Error('Vertex Not Found');
		this.#adjList.get(src).push(dest);
		this.#adjList.get(dest).push(src);
	}
	print() {
		this.#adjList.forEach((v, k) => {
			console.log(`${k}: ${v.join(' ')}`);
		});
	}
	/**
	 * @param {number} vertex
	 */
	bfs(vertex) {
		const queue = [vertex];
		const visited = [];
		while (queue.length !== 0) {
			const curVertex = queue.pop();
			visited.push(curVertex);
			const newVertices = this.#adjList
				.get(curVertex)
				.filter((v) => !visited.includes(v));
			queue.unshift(...newVertices.reverse());
		}
		return visited;
	}
	dfs(vertex, visited = []) {
		visited.push(vertex);
		this.#adjList
			.get(vertex)
			.filter((v) => !visited.includes(v))
			.forEach((v) => this.dfs(v, visited));
		return visited;
	}
}

const main = () => {
	console.log('------ Graph 1 ------');
	const g1 = new Graph(4);
	g1.addEdge(0, 1);
	g1.addEdge(0, 2);
	g1.addEdge(1, 2);
	g1.addEdge(2, 3);
	g1.print();
	console.log('------ Graph 2 ------');
	const g2 = new Graph(9);
	g2.addEdge(0, 1);
	g2.addEdge(0, 2);
	g2.addEdge(1, 3);
	g2.addEdge(1, 4);
	g2.addEdge(1, 5);
	g2.addEdge(2, 6);
	g2.addEdge(5, 7);
	g2.addEdge(6, 8);
	g2.print();
	console.log(g2.bfs(0));
	console.log(g2.dfs(0));
};

main();
