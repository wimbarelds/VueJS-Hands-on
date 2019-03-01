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
            isTyping: false,
            typingTimeout: 0,
        };
    },
    watch: {
        itemText() {
            clearTimeout(this.typingTimeout);
            this.isTyping = true;
            this.typingTimeout = setTimeout(() => {
                this.isTyping = false;
            }, 1000);
        }
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
            <em v-if="isTyping">User is typing</em>
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
                { done: false, text: 'Learn about VueJS' },
                { done: true, text: 'Drink beer' },
                { done: false, text: 'Enjoy our weekend' },
                { done: false, text: 'Build awesome stuff' },
            ],
        };
    },
    computed: {
        sortedTodo() {
            return this.todo.slice().sort(function(a, b) {
                if (a.done === b.done) return 0;
                if (a.done) return 1;
                return -1;
            });
        },
    },
    // Sorry, these examples suck. This is useful for adding event listeners to window or body
    // or to initialize google maps or some chart library that need an html element in the DOM to mount to
    created: function() {
        console.log('created');
    },
    mounted: function() {
        console.log('Mounted');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy');
    },
    components: {
        'add-item': addItemComponent,
    },
    template: `
        <div class="my-todo">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="item in sortedTodo" :key="item.text"><input type="checkbox" v-model="item.done"> {{ item.text }}</li>
            </ul>
            <add-item @add="todo.push({ done: false, text: $event})"></add-item>
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