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
            newItem: '',
        };
    },
    template: `
        <div>
            <p>{{ message }}</p>
            <ul>
                <li v-for="item in todo">{{ item }}</li>
            </ul>
            <input type="text" v-model="newItem" v-on:keydown.enter="todo.push(newItem); newItem = ''">
            <hr>
            <p v-if="showSecret">
                <strong>
                    {{ secret }}
                </strong>
            </p>
            <button v-on:click="showSecret=true">Spill the beans</button>
        </div>
    `,
});