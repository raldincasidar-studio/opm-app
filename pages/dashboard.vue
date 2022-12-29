<script>
import { mapState } from 'vuex';

export default {
  data() {return {
    record_summary: [],
  }},
  async mounted() {
    this.$axios.get('/get_record_summary?id='+this.auth.id).then(res => {
      if (res.data.status == "error") {
        this.$swal.fire({
          title: res.data.message,
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

      this.record_summary = res.data.record_summary;

      console.log(res.data);
    }).catch(err => {
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
    })
  },
  computed: {
    ...mapState('auth', ['auth']),
  }
}
</script>
<template lang="pug">

div.page
  Navbar(title="Dashboard")
  .image 
  .contents
    p.center
        img(src="@/assets/img/logo.png" label="Logo")

    h5.stall {{auth.stall_no ? 'Stall # '+auth.stall_no : 'No Stall Number'}}
    h6.name {{auth.firstname}} {{auth.lastname}}

    .grid-buttons
      nuxt-link(v-wave to="/make-a-payment")
        div
          i.material-icons payments
          br
          span Payment
      nuxt-link(to="/record-history" v-wave)
        div
          i.material-icons receipt_long
          br
          span History
      nuxt-link(to="/balance" v-wave)
        div
          i.material-icons account_balance
          br
          span Balance

    .status
      h5 Status
      .tag 
        i.material-icons check
        span PAID
    

    h3.heading Record Summary

    table
      thead
        th Date
        th Payment
        th Status
      tbody
        tr(v-for="(record, i) in record_summary" :key="i")
          td {{record.date}}
          td PHP {{record.amount}}
          td(:class="{'green': record.status == 'Verified', 'orange': record.status != 'Verified'}") {{record.status}}
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

  .center {
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    margin-top: -200px;
  }

  img {
    width: 100%;
    max-width: 150px;
    margin: auto;
  }

  h5.stall {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: #1746A2;
    margin: 5px 0;
  }

  h6.name {
    text-align: center;
    font-size: 19px;
    font-weight: normal;
    color: #0B63E6;
    margin-bottom: 20px;
  }

  .grid-buttons {
    display: flex;

    a {
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      border: 2px solid #0b63e672;
      background-color: #DAEAF1;
      text-align: center;
      width: calc(33.33% - 10px);
      aspect-ratio: 1/1;
      margin: 5px;
      align-items: center;
      justify-content: center;

      i.material-icons {
        font-size: 40px;
        color: #3CAEFF;
      }

      span {
        font-size: 13px;
        color: #1e1e1eb3;
        font-weight: bold;
      }
    }
  }

  .status {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    align-items: center;

    h5 {
      font-size: 20px;
    }

    .tag {
      padding: 5px 15px;
      border: 1px solid #32BF45;
      border-radius: 10px;
      color: #32BF45;

      i.material-icons {
        margin-right: 10px;
        color: #32BF45;
      }

      span {
        color: #32BF45;
        font-size: 15px;
      }
    }
  }

  h3.heading {
    margin: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
  }

  table {
    width: 100%;
    font-size: 17px;
    border-collapse: collapse;
    
    thead {
      padding: 15px 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.159);
    }

    th {
      text-align: left;
      padding: 10px;

      &:nth-child(2) {
        text-align: center;
      }

      &:nth-child(3) {
        text-align: right;
      }
    }
    
    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.159);
    }

    td {
      text-align: left;
      padding: 15px 10px;

      &:nth-child(2) {
        text-align: center;
      }

      &:nth-child(3) {
        text-align: right;
      }

      &.green {
        color: #32BF45;
      }

      &.orange {
        color: #c1652b;
      }
    }
  }
}
</style>