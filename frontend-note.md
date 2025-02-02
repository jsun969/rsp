## `event.target` VS `event.currentTarget`

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

## Special Class Functions

| Method                      | Purpose                                                           |
| --------------------------- | ----------------------------------------------------------------- |
| `toString()`                | Converts object to a string                                       |
| `valueOf()`                 | Converts object to a primitive (usually a number)                 |
| `Symbol.toPrimitive`        | Customizes object conversion for `string`, `number`, or `default` |
| `Symbol.iterator`           | Makes an object iterable (`for...of` loop)                        |
| `Symbol.toStringTag`        | Changes how `Object.prototype.toString.call(obj)` behaves         |
| `Symbol.hasInstance`        | Customizes `instanceof` behavior                                  |
| `Symbol.isConcatSpreadable` | Controls if arrays/objects spread in `concat()`                   |

## `yield`

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

## Method Chaining

return `this`
