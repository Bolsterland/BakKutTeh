const app = Vue.createApp({
    data() {
        return {
            result: 0,
        };
    },
    methods: {
        addToResult(number) {
            this.result += number;
        }
    },
    computed: {
        message() {
            if (this.result < 37) {
                return 'Not there yet!';
            }
            else if (this.result > 37){
                return 'Too much!';
            }
            else {
                return 'Perfecto!';
            }
        }
    },
    watch: {
        message() {
            const that = this;
            setTimeout(function() {
                that.result = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment');