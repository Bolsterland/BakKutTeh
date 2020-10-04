const app = Vue.createApp({
    data() {
        return {
            messageA: 'Finish the course and learn Vue!',
            messageB: 'Master Vue and build amazing apps!',
            link: 'https://vuejs.org'
        };
    }, 
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.messageA;
            } else {
                return this.messageB;
            }
        }
    }
});

app.mount('#user-goal');

