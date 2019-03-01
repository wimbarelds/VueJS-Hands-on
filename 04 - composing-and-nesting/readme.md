# Composing and nesting components

Though you technically could make any application in just one component, it is almost always a really bad idea. To keep things organized, you'll usually want to split your application into separate components. For example, a website might have a header component, a footer component, a carousel component and a content component. There might also be common components like buttons.

So the template for your Application might look something like:

```html
<div id="app">
    <app-navigation></app-navigation>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
</div>
```

Now of course, Vue will need to know what to do when it sees `<app-navigation>`. To let Vue know what to do, we will need to register our component.

There are two ways to register a component. Locally and globally. When you register a component globally, it can be used anywhere in your application. You'll usually want to register common components globally (like button components or icon components).

Global regisration is done like so:

```javascript
Vue.component('app-button', MyAppButtonComponent);
```

Other components, like the `<app-navigation>` you'll probably only use once, so for performance reasons and to keep things clean, we'll only want to register to one (or a few) components. This is done by adding a `components` property to your component. The value of this property is an object with the HTML tagname as key and the component object as value. For example:

```javascript
var vm = new Vue({
    el: '#app',
    template: `...`,
    components: {
        'app-navigation': AppNavigationComponent,
    },
});
```

## Communication

Once you use multiple components however, you will need a way to communicate between components. If you have a website, then the content component will need to know when something was clicked in the navigation component; so that the content component can update to show the appropriate content.

The communication goes two ways, you use 'props' to send information down to child components. And child components can emit events with relevant data back to their parent. In this assignment, we're only going to cover props. The next assignments will cover events.

To be able to use props, a component needs to specify what `props` it can accept. This is done by adding a `props` property to the component-object.

Props *can* be an array with the string names of all supported props. Like so:
`props: [ 'title' ]`. But usually you'll not only want to specify what the name of a prop is, but also what it should look like. This can be done by instead making the value an object, like so: `props: { title: String }`. You can get even more elaborate, specifying whether a property is required or giving it a default value. Like so:
```javascript
{
    props: {
        title: {
            type: String,
            required: false,
            default: 'Hello!',
        }
    }
}
```

Props can be used the same way as values in your data object, with the difference that you can freely change your data, but you're not allowed to change the value of your props.

## Your job

Separate the list into a separate `reason-list` component and pass that component the list of reasons using a prop. Then register the reason-list component in your app component, and add it to your template.