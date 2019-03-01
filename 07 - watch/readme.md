# Watching for changes

Sometimes your application will want to start some activity when data in your application changes. For example, lets say you have an auto-complete input field and you want to query the server for auto-complete options as the user types.

You can do this by watching for changes in your data. How do you watch for changes in your data?

Example:

```javascript
var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            searchText: '',
        };
    },
    watch: {
        searchText: debounce(function(newValue, oldValue) {
            fetch(`myBackendUrl?term=${newValue}`).then(/* My code */);
        }, 250),
    },
    template: `
        <input v-model="searchText">
    `,
});
```

As you can see, the watch function has the same name as the data property it is watching and the function is given the new and old values of the property that changed.

## Your Job

Understand and/or ask questions