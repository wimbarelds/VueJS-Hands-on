# Loops, if, else and show

## Conditional rendering

Websites often have this that depending on circumstances, does or does not need to be shown. Think of error messages for example. An element can be shown or hidden using v-if

```html
<div class="error" v-if="hasError">Something went wrong!</div>
```

You could also use `v-show` here. The difference between `v-if` and `v-show` is that with `v-if` the html is entirely removed from the page. With `v-show` would only be hidden (`display: none`).

Aside from `v-if` there is also `v-else` and `v-else-if`

## Loops

Any application has repeating elements, think of navigation links or products on an e-commerce website. If yolu have this data in your state, you can loop through it using v-for.

```html
<ul>
    <li v-for="item in array">{{ item.text }}</li>
</ul>
```

You can also loop through objects (which you should usually avoid), or get additional variables included in loops. Some examples:

```html
<div v-for="(item, index) in array"></div>
<div v-for="value in object"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, key, index) in object"></div>
```

It is usually a good idea (and sometimes essential) to include a key that is unique to the item when looping through items. This is because VueJS will heavily re-use HTML elements for better performance. When not using a key, this can have unintended consequences.

## Your Job

A list of reasons why pineapple doesn't belong on pizza has been added to our component's data.
Your job is to add this data to the template. A second property has been added which to assert whether the list of reasons is valid or invalid, use this property to show the correct message above the list.