# Registering and data-binding

A Vue component is basically a normal javascript object. Different aspects of the component are defined on different properties of the object. In this assignment we're only going to add 'state' to our application (using the `data` property) and using this state in our template.

* The `el` property should be used to determine what our component should be bound to
* The `data` property should be a function that returns an object.
* The template should be a string (we'll use template strings here)
* In this assignment, you will need to use interpolation and property binding
  * Interpolation is adding text from our state, and is done like so: `{{ myData }}`
  * Property-binding is adding a property value from our state. Like so: `v-bind:href="myData"`
  * You can use a short-hand notation for property binding, like so: `:href="myData"`

## Your job
1. Bind our Vue Component in `app.js` to the `#app` element
2. Add a data property to your component
3. Add the URL of your favorite website to the data
4. Add the name of your favorite website to the data
5. Use these attributes in the component's template