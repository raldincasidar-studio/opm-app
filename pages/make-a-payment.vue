<script>
import { mapState } from 'vuex';

export default {
  data(){ return {
    reference_number: '',
  }},
  computed: {
    ...mapState('auth', ['auth']),
  },
  methods: {
    async submitPayment() {
      if (this.reference_number == "") return this.$swal.fire({
        title: 'Empty reference number',
        toast: true,
        timer: 3000,
        position: 'top',
        icon: 'error',
        timerProgressBar: true,
        showCloseButton: false,
        showConfirmButton: false
      });

      const file = document.querySelector('#file').files[0];

      if (!file) return this.$swal.fire({
        title: 'File is empty',
        toast: true,
        timer: 3000,
        position: 'top',
        icon: 'error',
        timerProgressBar: true,
        showCloseButton: false,
        showConfirmButton: false
      })

      const formData = new FormData();

      formData.append('gcash_proof', file);
      formData.append('gcash_reference', this.reference_number);
      formData.append('id', this.auth.id);

      try {
        await this.$axios.post('/make-payment', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (error) {
        console.error(error);
        this.$swal.fire({
          title: 'Server Error!',
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

      this.$swal.fire({
        title: 'Payment successfuly uploaded!',
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
  },
}
</script>
<template lang="pug">

div.page
  Navbar(title="Make A Payement" back="true")
  .image 
  .contents

    h5.stall Make a Payment
    
    h6.steps Step 1: Send your payment #[b (PHP {{auth.monthlypay}})] to:

    .gcash-card
      img(src="@/assets/img/gcash.png")

      .context
        h5.number 0951-795-5767
        h6.name Juan Luna Andres

    h6.steps STEP 2: Upload your Payment Receipt

    .input-field
      i.material-icons upload_file
      input(type="file" accept="image/*" id="file")
    .input-field
      i.material-icons 123
      input(v-model="reference_number" type="text" placeholder="Reference Number")

    button(@click="submitPayment" v-wave) Submit Payment
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
  padding: 15px;
  margin-top: -100px;

  h5.stall {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px dashed;
    padding: 10px;
    margin: 5px 0;
    margin-bottom: 50px;
  }

  h6.steps {
    font-size: 19px;
    margin: 20px 0;
  }

  .gcash-card {
    background: linear-gradient(to bottom right, #0071BA, #1379BB) no-repeat center center;
    border-radius: 25px;
    padding: 20px;
    margin: 15px 0;

    img {
      width: 100%;
      max-width: 190px;
    }

    .context {
      margin-top: 30px;

      .number {
        font-size: 23px;
        color: white;
      }

      .name {
        font-size: 16px;
        color: white;
        font-weight: normal;
        opacity: 0.8;
      }
    }
  }

  .input-field {
    margin: 30px 10px;
    position: relative;

    input {
      width: 100%;
      padding: 15px 25px;
      padding-left: 70px;
      background-color: rgba(0, 0, 0, 0.058);
      border: 0;
      font-size: 16px;
      border-radius: 14px;

      &::-webkit-file-upload-button {
        display: none;
      }
    }

    i.material-icons {
      position: absolute;
      // outline: 1px solid red;
      font-size: 30px;
      color: #0B63E6;
      padding: 12px;
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