const app = Vue.createApp({
    data() {
        return {
            userName: 'Gan Zhe Jing',
            userAge: 22,
            randomNum: Math.random(),
            seraphineImgLink: 'https://instagram.fkul8-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/120144807_960917267728686_5126910586425496073_n.jpg?_nc_ht=instagram.fkul8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=EkTENQKd9TkAX85Gdbz&oh=a7758c159c092ed5b2754e3629b4f8e2&oe=5F9871E5'
        }
    }, 
    methods: {
        calculateAge() {
            return this.userAge + 5;
        }
    }
});

app.mount('#assignment');