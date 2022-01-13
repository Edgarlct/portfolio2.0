<template>
  <NavMenu></NavMenu>
  <div class="container">
    <Header></Header>
    <Presentation></Presentation>
    <Project></Project>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import Header from "./views/Header";
import Presentation from "./views/Presentation";
import Project from "./views/Project";

export default {
  name: "App",
  components: {
    NavMenu,
    Header,
    Presentation,
    Project,
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
  max-width: 1320px;
  margin: auto;
  position: relative;
}
</style>
