new Vue({
  el: '#app',
  data: {
    email: '',
    password: '',
    inputemail: '',
    inputpassword: '',
    show: false
  },

  methods: {
    onSubmit() {
      if (this.inputemail.length < 8 && this.inputpassword.length < 3) {
        alert('please enter your login details');
        return;
      }
      this.email = this.inputemail;
      this.password = this.inputpassword;
      this.show = true;
    }
  }
});
