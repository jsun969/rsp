## JS

### `event.target` VS `event.currentTarget`

- `target` - actual element
- `currentTarget` - element of the event handler

```html
<div id="outer">
	Click me
	<div id="inner">Or me</div>
</div>

<script>
	document.getElementById('outer').addEventListener('click', function (event) {
		console.log('currentTarget: ', event.currentTarget.id);
		console.log('this: ', this.id);
		console.log('target: ', event.target.id);
	});
</script>
```

In this case, if you click on the outer div, all three logs will print "outer", because both the clicked element (target) and the element the handler is attached to (currentTarget) are the same.

But if you click on the "Or me" text inside the inner div, `event.target` will be "inner" (because that's the element you clicked on), while `event.currentTarget` and this will still be "outer" (because that's the element the event handler is attached to).

### Special Class Functions

| Method                      | Purpose                                                           |
| --------------------------- | ----------------------------------------------------------------- |
| `toString()`                | Converts object to a string                                       |
| `valueOf()`                 | Converts object to a primitive (usually a number)                 |
| `Symbol.toPrimitive`        | Customizes object conversion for `string`, `number`, or `default` |
| `Symbol.iterator`           | Makes an object iterable (`for...of` loop)                        |
| `Symbol.toStringTag`        | Changes how `Object.prototype.toString.call(obj)` behaves         |
| `Symbol.hasInstance`        | Customizes `instanceof` behavior                                  |
| `Symbol.isConcatSpreadable` | Controls if arrays/objects spread in `concat()`                   |

### `yield`

generator function

```js
function* twoWayGenerator() {
	const x = yield 'Give me a number';
	console.log('Received:', x);
	yield x * 2;
}

const g = twoWayGenerator();
console.log(g.next()); // { value: 'Give me a number', done: false }
console.log(g.next(10)); // Received: 10, { value: 20, done: false }
```

### Method Chaining

return `this`

### Event loop

- call stack
- task queue
- microtask queue

### `Object.is` vs `==` vs `===`

```js
NaN === NaN; // false
Object.is(NaN, NaN); // true
```

```js
+0 === -0; // true
Object.is(+0, -0); // false
```

### `Map` vs `WeakMap`

```js
const m = new Map();
let key = { obj: 'key' };
m.set(key, 'value');
key = undefined; // deleted by garbage collector
console.log(m); // { { key: 'value' } }
```

```js
const wm = new WeakMap();
let key = { obj: 'key' };
wm.set(key, 'value');
key = undefined; // deleted by garbage collector
console.log(wm); // { } empty
```

## `defer` vs `async` for script tag

| Use Case                               | `defer`                         | `async`                               |
| -------------------------------------- | ------------------------------- | ------------------------------------- |
| Scripts that modify the DOM            | ✅ Yes                          | ❌ No (might run before DOM is ready) |
| Scripts that depend on execution order | ✅ Yes (executes in order)      | ❌ No (order is not guaranteed)       |
| Independent scripts (e.g., analytics)  | ❌ No (not immediate)           | ✅ Yes (executes ASAP)                |
| Performance optimization               | ✅ Yes (does not block parsing) | ✅ Yes (downloads in parallel)        |

- Use `defer` for scripts that interact with the DOM or require execution order.
- Use `async` for independent scripts like analytics or ads.
- Avoid using both `defer` and `async` together on the same script.

## React

### React Lifecycle

- mount
- update
- unmount

### React `node` vs `element` vs `component`

- `node` - basic unit: element, a string, a number, a boolean, or null
- `element` - an immutable, plain object representing what you want to see on the screen. It includes the type (such as a string for HTML tags or a React component), props, and children. `jsx` or `React.createElement`
- `component` - reusable piece of the UI that can accept inputs (props) and returns React elements describing the UI

## Git

### `blob` `tree` `commit`

<https://www.youtube.com/watch?v=MyvyqdQ3OjI>

sha-1 hash

- `blob` - content of a file (no metadata)
- `tree` - a dir listing (of blob and trees)
- `commit` - a snapshot of working tree (parent prop to the prev commit)

### branch

named reference to a commit
a pointer to a commit

`HEAD` current working branch
