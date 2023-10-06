const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
    };
  },
  mounted() {
    this.getRandomEmails();
  },
  methods: {
    getRandomEmails() {
      const emails = [];
      const getEmail = () => {
        axios.get(this.apiUrl)
          .then((response) => {
            emails.push(response.data.response);
            if (emails.length < 10) {
              getEmail();
            } else {
              this.emails = emails;
            }
          });
      };
      getEmail();
    } 
  },
}).mount("#app");
