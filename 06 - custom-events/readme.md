# Emitting custom events

Communication should go two ways. In this assignment we'll also split our input element into a separate component and adding a button to it. This component will need emit an event containing what the reason is that should be added. This event should be emitted either when the user hits enter in the input field, or clicks the button.

When you emit an event, you give it a name (so you can listen for events by that name) and you can (optionally) give it data.

How to emit an event:

```javascript
this.$emit('event-name', eventData);
```

You can listen to custom events the same way you listen to normal events. To do something with the data sent along with the event, you can use `$event`, like so:

```html
<div @myevent="doSomething($event)"></div>
```

## Your job

Create a new component for your input. Move your input element and model property to the component. Add a button, and when the user hits enter in the input or clicks the button, emit an event (via the previously created method) with the reason text.

Listen for this event in your app component. Add add it to your reasons list.