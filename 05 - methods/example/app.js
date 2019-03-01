var todoComponent = {
    props: {
        title: {
            type: String,
            required: false,
            default: 'My Todo List',
        },
    },
    data: function() {
        return {
            todo: [
                'Learn about VueJS',
                'Drink beer',
                'Enjoy our weekend',
                'Build awesome stuff',
            ],
            newItem: '',
        };
    },
    methods: {
        addItem: function() {
            this.todo.push(this.newItem);
            this.newItem = '';
        },
    },
    template: `
        <div class="my-todo">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="item in todo">{{ item }}</li>
            </ul>
            <input type="text" v-model="newItem" v-on:keydown.enter="addItem()">
        </div>
    `,
};

var myAppComponent = {
    data: function() {
        return {
            message: 'Welcome to the Fresh Friday!',
            secret: 'Thank God it\'s friday!',
            showSecret: false,
        };
    },
    components: {
        'todo-list': todoComponent,
    },
    template: `
        <div>
            <todo-list title="My Fresh Todo List"></todo-list>
            <hr>
            <p>{{ message }}</p>
            <p v-if="showSecret">
                <strong>
                    {{ secret }}
                </strong>
            </p>
            <button v-on:click="showSecret=true">Spill the beans</button>
        </div>
    `,
};

Vue.component('my-app', myAppComponent);

var vm = new Vue({
    el: '#app',
    template: `<my-app></my-app>`,
});