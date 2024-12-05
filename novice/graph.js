class Vertex {
	value;
	constructor(value) {
		this.value = value;
	}
}

class Graph {
	/**
	 * @type {Set<Vertex>}
	 */
	#vertices = new Set();
	/**
	 * @type {Map<Vertex, Array<Vertex>>}
	 */
	#adjList = new Map();
	addVertex(value) {
		const newVertex = new Vertex(value);
		this.#vertices.add(newVertex);
		this.#adjList.set(newVertex, []);
	}
	addEdge(src, dest) {
		let srcVertex, destVertex;
		for (const v of this.#vertices) {
			if (v.value === src) srcVertex = v;
			if (v.value === dest) destVertex = v;
		}
		if (!srcVertex) throw new Error('Source Vertex Not Found');
		if (!destVertex) throw new Error('Destination Vertex Not Found');
		this.#adjList.get(srcVertex).push(destVertex);
		this.#adjList.get(destVertex).push(srcVertex);
	}
	print() {
		console.log(Array.from(this.#vertices).map((v) => v.value));
		for (const [k, v] of this.#adjList) {
			console.log(`${k.value}: -> ${v.map((e) => e.value).join(' -> ')}`);
		}
	}
}

const main = () => {
	const graph = new Graph();
	graph.addVertex('A');
	graph.addVertex('B');
	graph.addVertex('C');
	graph.addVertex('D');
	graph.addEdge('A', 'B');
	graph.addEdge('A', 'C');
	graph.addEdge('B', 'C');
	graph.addEdge('C', 'D');
	graph.print();
};

main();
