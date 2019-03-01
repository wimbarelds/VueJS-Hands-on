var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            myNumbers: [
                1, 2, 3, 4, 5, 6
            ],
        };
    },
    methods: {
        addNumber() {
            var randomNumber = Math.round(Math.random() * 100);
            this.myNumbers.push(randomNumber);
        },
    },
    template: `
       <div>
           <h2>All</h2>
           <ul>
               <li v-for="number in myNumbers">{{ number }}</li>
           </ul>
           <button @click="addNumber()">Add random number</button>
       </div>
    `,
});