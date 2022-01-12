<template>
<NavMenu></NavMenu>
</template>

<script>
import NavMenu from "./components/NavMenu";

export default {
  name: "App",
  components: {
    NavMenu,
  },
};
</script>

<style lang="scss">
@import "styles/reset";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  background:radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
  background:-moz-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
  background:-webkit-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
  background:-o-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
  background:-ms-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
}
</style>
