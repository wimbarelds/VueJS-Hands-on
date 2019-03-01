# Events

Websites these days need to be interactive. When we click on a button, our application should be able to do something about it. In this assignment we're going to make it possible to add items to our list.

## How to capture events

You can add `v-on:eventname="thingy"` to an element. When that event is then triggered on the given item, whatever is between the quotes will be executed.

VueJS helpfully provides some cool modifiers for this also. For keypresses for example, you'll often only want to do something when a particular key has been hit (ie: enter, escape, up, down, left, right, etc). A modifier can be added like so: `v-on:keydown.up="goUp"`, which will only trigger goUp when the up arrow on the keyboard is pushed.

The property value here can be a javascript expression. So it could be `alert('hi')`, but you can also use it to access your Vue-Component (and say, change a property from your data).

## Adding a model to your input

HTML has input fields for text, checkboxes, selects , radio-controls. The works. For convenience Vue offers a `v-model="modelProperty"` property to automatically update our application data-model when these inputs are changed. You'll need to bind the `v-model` to a property in your data.

## Your job

Add an input to your application with a model property bound to it. Also make it so that when the user hits the enter key, it adds an item to the list of reasons why pineapple should not be on pizza.