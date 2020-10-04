const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            userTask: '',
            showList: true
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.userTask);
            this.userTask = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleShowList() {
            this.showList = !this.showList;
        }
    },
    computed: {
        buttonText() {
            if (this.showList) {
                return 'Hide List';
            }
            else {
                return 'Show List';
            }
        }
    },
    watch: {

    }
});

app.mount('#assignment');