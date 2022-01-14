<template>
  <router-view/>
</template>

<script>

export default {
  name: "App",

  data(){
    return{
      publicPath: process.env.BASE_URL,
    }
  }
};
</script>

<style lang="scss">

</style>
