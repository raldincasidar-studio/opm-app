<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.replace('/login');
    }, 5000);
  }
}
</script>
<template lang="pug">
div 
  img(src="@/assets/img/logo.png", alt="Logo")
  p Loading ...
</template>

<style lang="scss" scoped>
div {
  position: relative;
  min-height: 100vh;
  width: 100%; 
  background-color: #DDF4FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 150px;
    margin-bottom: 50px;
  }
}
</style>