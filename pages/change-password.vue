<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {return {
    new_pass: '',
    repeat_pass: '',
  }},
  computed: {
    ...mapState('auth', ['auth']),
  },
  methods: {
    ...mapMutations('auth', ['setAuth']),
    async changePass() {
      if (this.new_pass == "") return this.$swal.fire({
        title: 'Password field is empty',
        toast: true,
        timer: 3000,
        position: 'top',
        icon: 'error',
        timerProgressBar: true,
        showCloseButton: false,
        showConfirmButton: false
      });

      if (this.new_pass !== this.repeat_pass) return this.$swal.fire({
        title: 'Password is not the same',
        toast: true,
        timer: 3000,
        position: 'top',
        icon: 'error',
        timerProgressBar: true,
        showCloseButton: false,
        showConfirmButton: false
      });

      let change_pass;
      try {
        change_pass = await this.$axios.post('/change-password', {
          password: this.new_pass,
          id: this.auth.id,
        })
      } catch (err) {
        console.error(err);
        this.$swal.fire({
          title: 'Network error',
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

      if (change_pass.data.status == "error") {
        this.$swal.fire({
          title: change_pass.data.message,
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

      this.setAuth(change_pass.data.new_user_data);

      this.$swal.fire({
        title: change_pass.data.message,
        toast: true,
        timer: 3000,
        position: 'top',
        icon: 'success',
        timerProgressBar: true,
        showCloseButton: false,
        showConfirmButton: false
      });

      this.$router.replace('/dashboard');

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
    h2 Welcome! Please change your password to continue
    .input-container
      label Password
      input(v-model="new_pass" placeholder="**********" type="password")
    .input-container
      label Repeat Password
      input(v-model="repeat_pass" placeholder="**********" type="password")

    button(@click="changePass()") Change Password
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