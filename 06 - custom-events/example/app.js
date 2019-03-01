var addItemComponent = {
    props: {
        placeholder: {
            type: String,
            required: false,
            default: '...',
        },
    },
    data: function() {
        return {
            itemText: '',
        };
    },
    methods: {
        submit: function() {
            this.$emit('add', this.itemText);
            this.itemText = '';
        },
    },
    template: `
        <div>
            <input type="text" :placeholder="placeholder" v-model="itemText" @keydown.enter="submit()" />
            <button @click="submit()">Add item</button>
        </div>
    `,
};

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
        };
    },
    components: {
        'add-item': addItemComponent,
    },
    template: `
        <div class="my-todo">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="item in todo">{{ item }}</li>
            </ul>
            <add-item @add="todo.push($event)"></add-item>
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