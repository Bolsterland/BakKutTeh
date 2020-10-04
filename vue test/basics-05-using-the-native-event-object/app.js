const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: ''
    };
  },
  methods: {
    outputFullName(){
      console.log('Running again...')
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Gan';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }, 
    resetInput() {
        this.name='';
    }
  },
  computed: {
    fullName() {
      console.log('Running again...')
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  }
});

app.mount('#events');
