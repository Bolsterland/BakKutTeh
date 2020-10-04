Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');

// const buttonAdd = document.querySelector('button');
// const inputAdd = document.querySelector('input');
// const listAdd = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputAdd.value;
//     const listItemAdd = document.createElement('li');
//     listItemAdd.textContent = enteredValue;
//     listAdd.appendChild(listItemAdd);
//     inputAdd.value = '';
// }

// buttonAdd.addEventListener('click', addGoal);