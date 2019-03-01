var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            message: 'Welcome to the Fresh Friday!',
            secret: 'Thank God it\'s friday!',
            showSecret: false,
            todo: [
                'Learn about VueJS',
                'Drink beer',
                'Enjoy our weekend',
                'Build awesome stuff',
            ],
        };
    },
    template: `
        <div>
            <p>{{ message }}</p>
            <ul>
                <li v-for="item in todo">{{ item }}</li>
            </ul>
            <p v-if="showSecret">
                <strong>
                    {{ secret }}
                </strong>
            </p>
        </div>
    `,
});