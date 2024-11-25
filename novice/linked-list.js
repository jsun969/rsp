class LinkedListNode {
	data;
	/**
	 * @type {LinkedListNode | null}
	 */
	next = null;
}

class LinkedList {
	/**
	 * @type {LinkedListNode | null}
	 */
	#head = null;
	#isEmpty() {
		return this.#head === null;
	}
	/**
	 * @param {number} position
	 */
	#find(position) {
		let node = this.#head;
		for (let i = 0; i < position; i++) {
			if (node === null) throw new Error('Position Not Found');
			node = node.next;
		}
		return node;
	}
	insertAtTail(data) {
		let newNode = new LinkedListNode();
		newNode.data = data;
		if (this.#isEmpty()) {
			this.#head = newNode;
			return;
		}
		let tailNode = this.#head;
		while (tailNode.next !== null) {
			tailNode = tailNode.next;
		}
		tailNode.next = newNode;
	}
	insertAtHead(data) {
		let newNode = new LinkedListNode();
		newNode.data = data;
		if (this.#isEmpty()) {
			this.#head = newNode;
			return;
		}
		newNode.next = this.#head;
		this.#head = newNode;
	}
	/**
	 * @param {number} position
	 */
	insertAt(position, data) {
		let newNode = new LinkedListNode();
		newNode.data = data;
		if (this.#isEmpty()) {
			if (position !== 0) throw new Error('Position Not Found');
			this.#head = newNode;
			return;
		}
		let prevNode = this.#find(position - 1);
		newNode.next = prevNode.next;
		prevNode.next = newNode;
	}
	deleteAtHead() {
		if (this.#head === null) throw new Error('Empty List');
		this.#head = this.#head.next;
	}
	deleteAtTail() {
		if (this.#isEmpty()) throw new Error('Empty List');
		if (this.#head.next === null) {
			this.#head = null;
			return;
		}
		let beforeTailNode = this.#head;
		while (beforeTailNode?.next?.next) {
			beforeTailNode = beforeTailNode.next;
		}
		beforeTailNode.next = null;
	}
	/**
	 * @param {number} position
	 */
	deleteAt(position) {
		if (position === 0) {
			this.#head = this.#head.next;
			return;
		}
		let prevNode = this.#find(position - 1);
		prevNode.next = prevNode.next.next;
	}
	deleteByValue(value) {
		if (this.#isEmpty()) throw new Error('Empty List');
		if (this.#head.data === value) {
			this.#head = this.#head.next;
			return;
		}
		let prevNode = this.#head;
		while (prevNode.next?.data !== value && prevNode.next !== null) {
			prevNode = prevNode.next;
		}
		if (prevNode.next === null) throw new Error('Node Not Found');
		prevNode.next = prevNode.next.next;
	}
	search(value) {
		let node = this.#head;
		while (node?.data !== value && node !== null) {
			node = node.next;
		}
		if (node === null) return false;
		return true;
	}
	traverse() {
		let array = [];
		let currentNode = this.#head;
		while (currentNode !== null) {
			array.push(currentNode.data);
			currentNode = currentNode.next;
		}
		return array;
	}
}

const main = () => {
	const list = new LinkedList();
	// list.deleteAtHead();
	list.insertAt(0, 10);
	list.insertAtTail(1);
	list.insertAtTail(2);
	list.insertAtTail(3);
	list.insertAtHead(4);
	list.insertAtHead(666);
	list.insertAt(2, 888);
	// list.deleteAtHead();
	// list.deleteAtHead();
	// list.deleteAtTail();
	// list.deleteAtTail();
	// list.deleteAtTail();
	// list.deleteAtTail();
	// list.deleteAtTail();
	// list.deleteAtTail();
	// list.deleteAt(6);
	list.deleteByValue(666);
	list.deleteByValue(4);
	console.log(list.traverse().join(' -> '));
	console.log(list.search(666));
};

main();
