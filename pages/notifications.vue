<script>
import { mapState } from 'vuex';

export default {
  data() {return {
    record_summary: [],
  }},
  async mounted() {
    this.$axios.get('/get_notifications?id='+this.auth.id).then(res => {
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
  Navbar(title="Notifications" back="true")
  h6.title Notifications
  .notification(v-wave v-for="(notif, i) in record_summary" :key="i")
    i.material-icons notifications
    .content
      h6 {{notif.notif_content}}
      p {{date}}
  .notification(v-wave)
</template>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background-color: #DDF4FF;
}

.notification {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  i.material-icons {
    font-size: 30px;
    padding: 15px;
  }

  h6 {
    font-size: 16px;
  }

  p {
    font-size: 15px;
    margin: 5px 0;
  }
}

h6.title {
  margin: 20px;
}
</style>