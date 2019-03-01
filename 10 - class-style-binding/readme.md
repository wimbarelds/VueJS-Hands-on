# Class and style binding

Earlier we showed that you can do simple attribute binding using `v-bind:attribute="value"`. Two attributes you might find yourself binding frequently are `class` and `style`.  These two *can* be bound like any other, but on top of normal attribute binding Vue provides some helpers that makes this even easier.

## Class

Lets say you had an active class. If you were using normal attribute binding that might look something like this:

```html
<a :class="'link' + (active ? : ' link--active' : '')">Link Text</a>
```

That will work, but it's kind of ugly. To help with this, Vue will understand if you add an array or object as a value. If you provide an array, the values in the array are added as a class. If you provide an object, the keys of that object will be classnames, and the classnames will be added only if their value is true.

In addition, Vue will let you add multiple class properties to an element, so you could...

```html
<a class="link" :class="{'link-active': active }">Link Text</a>
```

You can also mix arrays and objects, which would look like this:

```html
<a :class="['link', {'link-active': active }]">Link Text</a>
```

The results of each of these would be the same, however the latter two options are definitely a lot more readable!

## Style

You can do the same with style. You can add an object as your value where each key is a CSS property and each value would be the CSS value. That's quite useful!

You can also use an array, except here the array can only contain objects. Why would you use two objects? You can have the latter value in an array overwrite values in the earlier values. So you could have a baseline style object, and overwrite parts of it with a second object. Granted, that isn't useful quite so often.

```html
<a :style="{ color: (active: 'red' : 'blue') }">Link Text</a>
```

In many cases, you will actually want to provide these objects in your data-model. Usually using a computed property. Keeping the logic outside of your HTML.

It would look something like:

```html
<a :style="myComputedProperty">Link Text</a>
```

## Your job

Update our list to fade out the reasons that are invalid. You may either use class or style binding for this.