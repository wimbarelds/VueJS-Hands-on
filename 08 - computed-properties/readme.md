# Computed properties

Another use case you might come up with for a watcher would be to filter a list. Lets say you have a list with todo items, but you want to filter out the items that are already complete. You could create a second property 'incompleteTodoItems' and update this list whenever the main list updates.

You could do that, but it would become kind of messy in terms of code. It would get even worse if you had an additional checkbox governing whether the complete items should be shown or hidden; you would now have to watch two properties. That's disgusting.

A better pattern that Vue has created for this is computed properties. A computed property reads one or multiple items from your data (or props) and returns a value based on those properties.

Vue will store the result of a computed property so that this function won't be executed two if it's read from two different locations.

Vue will know what data you used to generate the computed value, and when any of that data is changed; vue will automatically update the computed value also.

## Syntax:

```javascript
var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            numbers: [ 1, 2, 3],
        };
    },
    computed: {
        reversedNumbers() {
            return this.numbers.slice().reverse();
        },
    },
});
```

## Your job

Update the application to show a second list with only even numbers