const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      firstName: '',
      lastName: '',
      fullName: ''
    };
  },
  methods: {
    add(num) {
      this.counter+=num;
    },
    reduce(num) {
      this.counter-=num;
    },
    setFirstName(event) {
      this.firstName = event.target.value; 
    },
    setLastName(event) {
      this.lastName = event.target.value;
    },
    setFullName(){
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    submitForm(event) {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
