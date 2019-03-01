var vm = new Vue({
    data: function() {
        return {
            reasons: [
                'Pineapple is disgusting',
                'Pizza is traditional italian dish, these was no pineapple there',
                'Pizza is unhealthy, but pineapple has lots of vitamin C',
                'Gordon Ramsey said so',
            ],
            listIsValid: true,
        };
    },
    template: `
        <div>
            <p>The below list is correct</p>
            <p>The below list is incorrect</p>
            <ul>
                <li>
                    Your list goes here
                </li>
            </ul>
        </div>
    `,
});