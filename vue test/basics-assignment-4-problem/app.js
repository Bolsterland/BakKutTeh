const app = Vue.createApp({
    data() {
        return {
            selectedClass: '',
            isVisible: true,
            bgColor: ''
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }, 
    computed: {
        visibility() {
            if (this.isVisible) {
                return 'visible';
            }
            else {
                return 'hidden';
            }
        },
        color() {
            return 'background-color:' + this.bgColor;
        }, 
        question1Class() {
            return {
                user1: this.selectedClass === 'user1',
                user2: this.selectedClass === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            };
        }
    },
    watch: {

    }
});

app.mount('#assignment');