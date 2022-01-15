<template>
  <NavMenu></NavMenu>
  <div class="container">
    <Header></Header>
    <Presentation></Presentation>
    <Project></Project>
    <CompetencesList></CompetencesList>
    <Contact></Contact>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Project from "../components/Project";
import CompetencesList from "../components/CompetencesList";
import Contact from "../components/Contact";

export default {
  name: "Home",
  components: {
    Contact,
    CompetencesList,
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
