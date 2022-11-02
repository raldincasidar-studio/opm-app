<script>
import { mapMutations, mapState } from 'vuex';
  export default {
    data() {return {
      username: '',
      password: '',
    }},
    mounted() {
      console.log(this.auth);
    },
    computed: {
      ...mapState("auth", ['auth']),
    },
    methods: {
      ...mapMutations("auth", ['setAuth']),
      forgotPassword() {
        this.$swal("Forgotten Password", "Please notify the admin about your account", "info");
      },
      async login() {

        let login_request;
        try {
          login_request = await this.$axios.post('/login', {
            username: this.username,
            password: this.password
          })
        } catch (error) {
          console.log(err);

          this.$swal.fire({
            title: 'Connection Error',
            toast: true,
            timer: 3000,
            position: 'top',
            icon: 'error',
            timerProgressBar: true,
            showCloseButton: false,
            showConfirmButton: false
          });
          return;
        }

        if (login_request.data.status == "error") {

          this.$swal.fire({
            title: login_request.data.message,
            toast: true,
            timer: 3000,
            position: 'top',
            icon: 'error',
            timerProgressBar: true,
            showCloseButton: false,
            showConfirmButton: false
          });

          this.password = '';

          return;

        }

        // console.log(data);

        this.setAuth(login_request.data.user_data);

        this.$swal.fire({
            title: login_request.data.message,
            toast: true,
            timer: 3000,
            position: 'top',
            icon: 'success',
            timerProgressBar: true,
            showCloseButton: false,
            showConfirmButton: false
          });

          if (!this.auth.password_changed) {
            this.$router.replace('/change-password');
          } else {
            this.$router.replace('/dashboard');
          }

      }
    }
  }
</script>
<template lang="pug">
div.page
  div.image
  .contents
    p.center
      img(src="@/assets/img/logo.png" label="Logo")
    h2 Login
    .input-container
      label Username
      input(v-model="username" placeholder="johndoe" type="text")
    .input-container
      label Password
      input(v-model="password" placeholder="**********" type="password")

    button(@click="login()") Login
    p.center-only
      a(@click="forgotPassword()") Forgot Password ?
</template>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background-color: #DDF4FF;
}

.image {
  padding: 150px;
  background: url(@/assets/img/Background.png) no-repeat center bottom;
  background-size: cover;
}

.contents {
  padding: 20px;
  
  .center {
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    margin-top: -200px;
  }

  .center-only {
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 150px;
    margin: auto;
  }

  h2 {
    text-align: center;
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 30px;
  }

  .input-container {
    text-align: center;
    margin-bottom: 20px;;

    input {
      width: 100%;
      border: 2px solid #03263F;
      border-radius: 10px;
      padding: 13px 20px;
      background-color: transparent;
      color: #03263F;
      font-size: 16px;
      text-align: center;
      margin: 10px 0;
    }
  }

  button {
    display: block;
    width: 100%;
    padding: 13px;
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #0B63E6;
    border: 0;
    border-radius: 10px;
    margin-bottom: 20px;
  }


}
</style>