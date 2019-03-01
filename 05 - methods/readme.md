# Methods

Now before we move on to props, we'll quickly throw in methods. One thing we don't like about our current application is that when you hit enter to add a new reason to the list, the text remains in the input.

We could add the code to our template to also empty our input, but it would start getting kind of messy to have all that logic in our template. Plus lets say we wanted to add a button to also add the reason to the list- would we now have to write the logic in our template twice? No thanks!

For this, a `methods` property can be added to our component object. The `methods` property has an object as value. Each property within that object should be a function. For example:

```javascript
var vm = new Vue({
    el: '#app',
    methods: {
        doSomething: function() {
            alert('hi!');
        },
    },I 
    template: `
        <button @click="doSomething()">Do something!</button>
    `
});
```

## Your job

Add a method to your application that will add the entered reason to the list and clears the input.

## Hint

Within a method, you can access items from your data via `this.reason`. Also since `v-model` is bound two ways, you can clear the input using `this.reason = '';`.