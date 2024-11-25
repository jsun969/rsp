class BSTNode {
	/**
	 * @type {number}
	 */
	data;
	/**
	 * @type {BSTNode | null}
	 */
	parent = null;
	/**
	 * @type {BSTNode | null}
	 */
	left = null;
	/**
	 * @type {BSTNode | null}
	 */
	right = null;
	/**
	 * @param {number} data
	 */
	constructor(data) {
		this.data = data;
	}
}

class BinarySearchTree {
	/**
	 * @type {BSTNode | null}
	 */
	#root = null;
	/**
	 * @param {BSTNode | null} tree
	 * @param {number} data
	 * @param {BSTNode | null} parent
	 */
	#insert(tree, data, parent) {
		if (tree === null) {
			const newNode = new BSTNode(data);
			newNode.parent = parent;
			return newNode;
		}
		if (data < tree.data) {
			tree.left = this.#insert(tree.left, data, tree);
		} else {
			tree.right = this.#insert(tree.right, data, tree);
		}
		return tree;
	}
	/**
	 * @param {number} data
	 */
	insert(data) {
		this.#root = this.#insert(this.#root, data, null);
	}
	/**
	 * In-order traversal
	 * @param {BSTNode | null} tree
	 * @param {Array<number>} array
	 */
	#traverse(tree, array = []) {
		if (tree === null) return [];
		this.#traverse(tree.left, array);
		array.push(tree.data);
		this.#traverse(tree.right, array);
		return array;
	}
	traverse() {
		const res = this.#traverse(this.#root);
		return res;
	}
	/**
	 * @param {number} target
	 * @param {null | BSTNode} tree
	 */
	search(target, tree = this.#root) {
		if (tree === null) return false;
		if (target < tree.data) {
			return this.search(target, tree.left);
		}
		if (target > tree.data) {
			return this.search(target, tree.right);
		}
		return true;
	}
	get min() {
		let node = this.#root;
		while (node.left) {
			node = node.left;
		}
		return node.data;
	}
	get max() {
		let node = this.#root;
		while (node.right) {
			node = node.right;
		}
		return node.data;
	}
	#update(node, newNode) {
		if (node.data < node.parent.data) {
			node.parent.left = newNode;
		} else {
			node.parent.right = newNode;
		}
	}
	/**
	 * @param {number} value
	 */
	delete(value) {
		// Find node
		let node = this.#root;
		while (node) {
			if (value < node.data) {
				node = node.left;
			} else if (value > node.data) {
				node = node.right;
			} else break;
		}
		if (!node) throw new Error('Node Not Found');
		let newNode;
		// Leaf
		if (!node.left && !node.right) {
			newNode = null;
		}
		// 2 Children
		else if (node.left && node.right) {
			// Find in-order successor (left-most child in the right subtree)
			newNode = node.right;
			while (newNode.left) {
				newNode = newNode.left;
			}
			// Unlink new node from its parent
			this.#update(newNode, null);
			// Relink new node to new parent
			newNode.parent = node.parent;
			newNode.left = node.left;
			if (newNode !== node.right) {
				newNode.right = node.right;
			}
		}
		// 1 Child
		else {
			newNode = node.left || node.right;
			newNode.parent = node.parent;
		}
		// Update node
		this.#update(node, newNode);
	}
}

const main = () => {
	const tree = new BinarySearchTree();
	tree.insert(6);
	tree.insert(3);
	tree.insert(8);
	tree.insert(1);
	tree.insert(5);
	tree.insert(7);
	console.log('Search 10:', tree.search(10));
	console.log('Search 6:', tree.search(6));
	console.log('Min:', tree.min);
	console.log('Max:', tree.max);
	console.log(tree.traverse());
	tree.delete(7); // Leaf
	console.log(tree.traverse());
	tree.insert(7);
	tree.delete(8); // 1 Child
	console.log(tree.traverse());
	tree.insert(4);
	console.log(tree.traverse());
	tree.delete(3); // 2 Children
	console.log(tree.traverse());
	tree.delete(4); // 2 Children (Right subtree is leaf)
	console.log(tree.traverse());
};

main();
