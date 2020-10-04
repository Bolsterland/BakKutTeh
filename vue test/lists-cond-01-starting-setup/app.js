const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      userGoal: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userGoal);
      this.userGoal = '';
    }, 
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
  computed: {

  }
});

app.mount('#user-goals');
