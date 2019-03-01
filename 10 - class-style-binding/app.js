var ReasonListComponent = {
    props: {
        reasons: {
            type: Array,
            required: true,
        },
    },
    template: `
        <ul>
            <li v-for="reason in reasons">{{ reason.text }}</li>
        </ul>
    `,
};

var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            reasons: [
                { valid: true, text: 'Pineapple is disgusting' },
                { valid: true, text: 'Pizza is traditional italian dish, these was no pineapple there' },
                { valid: false, text: 'Pizza is unhealthy, but pineapple has lots of vitamin C' },
                { valid: true, text: 'Gordon Ramsey said so' },
            ],
        };
    },
    components: {
        'reason-list': ReasonListComponent
    },
    template: `
        <div>
            <reason-list :reasons="reasons"></reason-list>
        </div>
    `,
});