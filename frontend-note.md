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
