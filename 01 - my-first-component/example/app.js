var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            message: 'Welcome to the Fresh Friday!',
            secret: 'Thank God it\'s friday!',
        };
    },
    template: `
        <main
            v-bind:title="secret">
            {{ message }}
        </main>
    `,
});