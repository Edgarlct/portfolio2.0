<template>
  <div class="container-burger-menu" id="container-burger-menu">
    <div class="bg-icon" id="bg-icon"></div>
    <div class="icon" id="icon" @click="openBurger()">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <nav id="nav">
      <ul>
        <li><a @click="scrollMeTo('presentation'), openBurger()">Présentation</a></li>
        <li><a @click="scrollMeTo('projet'), openBurger()">Projet</a></li>
        <li><a @click="scrollMeTo('competence'), openBurger()">Compétences</a></li>
        <li><a @click="scrollMeTo('contact'), openBurger()">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "BurgerMenu",
  methods: {
    scrollMeTo(refName) {
      if (this.$router.currentRoute.value.fullPath !== "/"){
        router.back();
      }
      let element = document.getElementById(refName)
      let top = element.offsetTop;
      document.getElementById('app').scrollTo(0, top);
    },

    openBurger(){
      let icon = document.getElementById('icon');
      let bg = document.getElementById('bg-icon');
      let nav = document.getElementById('nav');
      icon.classList.toggle('active-container');
      const child = icon.childNodes;
      for(let i=0; i<child.length; i++) {
        if (child[i].nodeName.toLowerCase() == 'div') {
          child[i].classList.toggle('active-line')
        }
      }
      bg.classList.toggle('bg-active');
      if (nav.classList[0] === "active-nav"){
        nav.classList.toggle('active-nav')
      }
      else{
        setTimeout(function (){nav.classList.toggle('active-nav')}, 800)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    display: none;

    >ul{
      position: absolute;
      left: 50%;
      transform: translate(-50%, -10%);
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5rem;

      a{
        color: $orange;
      }
    }
  }

  .active-nav{
    display: block;
  }
  .icon{
    position: relative;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    transition: 0.3s ease transform;
    cursor: pointer;

    >div{
      width: 6px;
      height: 6px;
      background-color: $white;
      margin-left: 0;
      margin-bottom: 6px;
      border-radius: 4px;
      transition: 0.3s ease width, 0.3s ease margin-left, 0.3s ease margin-bottom,
      0.3s ease background-color;

      &:first-child{
        width: 22px;
      }
      &:nth-child(2){
        width: 15px;
      }
      &:last-child{
        width: 30px;
        margin-bottom: 0;
      }
    }
  }
  .active-container{
    transform: translateY(-50%) rotate(-90deg);
    align-items: center;
  }
  .active-line{
    width: 6px !important;
    margin-left: 0 !important;
    margin-bottom: 3px !important;
    background-color: $orange !important;
  }

  .bg-icon{
    width: 10vh;
    height: 10vh;
    position: absolute;
    background-color: transparent;
    border-radius: 100%;
    transition: all 0.5s ease-in;
    transform: translate(-30%, -30%);
  }

  .bg-active{
    background-color: $black;
    width: 270vh;
    height: 270vh;
  }
</style>