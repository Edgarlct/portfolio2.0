<template>
  <NavMenu></NavMenu>
  <div class="container">
    <Header></Header>
    <Presentation></Presentation>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import Header from "./views/Header";
import Presentation from "./views/Presentation";

export default {
  name: "App",
  components: {
    NavMenu,
    Header,
    Presentation,
  },
  data(){
    return{
      publicPath: process.env.BASE_URL,
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
}

.container{
  width: 85%;
  margin: auto;
  position: relative;
}
</style>
