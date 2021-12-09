const app = new Vue({
    el: '#root',
    data: {
        email : [],
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.email.push(`${result.data.response},
                `);
            })
        }
    },


})