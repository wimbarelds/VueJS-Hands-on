var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            reasons: [
                'Pineapple is disgusting',
                'Pizza is traditional italian dish, these was no pineapple there',
                'Pizza is unhealthy, but pineapple has lots of vitamin C',
                'Gordon Ramsey said so',
            ],
            reason: '',
        };
    },
    template: `
        <div>
            <ul>
                <li v-for="reason in reasons">{{ reason }}</li>
            </ul>
            <input type="text" v-model="reason" @keydown.enter="reasons.push(reason)" >
        </div>
    `,
});