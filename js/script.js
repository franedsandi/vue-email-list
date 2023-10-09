const { createApp } = Vue;

createApp({
  data() {
    return {
      titolo:'Elenco email',
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
      limit: 10,
    }
  },
  methods: {
    getApi() {
      axios.get(this.apiUrl)
        .then((result) => {
        this.emails.push(result.data.response);
        console.log(this.emails)
      })      
    },
    startGetEmails(){
      for(let i = 1; i <= this.limit; i++){
      this.getApi()
      }
    }
  }, 
  mounted(){
    this.startGetEmails();
  } 
}).mount("#app");
