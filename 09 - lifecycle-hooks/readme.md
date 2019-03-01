# Lifecycle hooks

Sometimes a component has to do some setup work before or after it's being used. For example, if you have a component that's supposed to animate when it appears on the screen- then you'll need to bind a scroll-event listener to your window- and you'd probably want to remove the event listener either when the animation has triggered or when the component is removed.

Another example might be that you're using some charts library. You would probably have to mount that library to an HTMLElement, but it wouldn't work correctly unless you wait until that HTMLElement actually exists.

For this you would use life cycle hooks. Vue offers the following:

`beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, destroyed, errorCaptured`

To hook into any of these, simply add them as a property to your component object and give them a function as value.

There is an excellent diagram showing the Vue lifecycle here:
https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks