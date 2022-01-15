<template>
<div class="bg"></div>
  <div class="sidebar-top">
    <p class="logo">ed</p>
    <nav>
      <ul>
        <li><a @click="scrollMeTo('presentation')">Présentation</a></li>
        <li><a @click="scrollMeTo('projet')">Projet</a></li>
        <li><a @click="scrollMeTo('competence')">Compétences</a></li>
        <li><a @click="scrollMeTo('contact')">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-bottom">
    <ul class="container-reseaux">
      <li><a href="#"><i class="fab fa-github"></i></a></li>
      <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
    </ul>
    <div class="container-scroll">
      <span></span>
      <div>
        <p>scroll</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  methods: {
    scrollMeTo(refName) {
      let element = document.getElementById(refName)
      let top = element.offsetTop;
      document.getElementById('app').scrollTo(0, top);
    }
  }
}
</script>

<style lang="scss">
  .bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background:radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
    background:-moz-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
    background:-webkit-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
    background:-o-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
    background:-ms-radial-gradient(circle at 30% 5%, rgb(84, 84, 84) 0%, rgb(49, 49, 49) 30%, rgb(8, 8, 8) 100%);
    z-index: -1;
  }
    .sidebar-top, .sidebar-bottom{
      position: fixed;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2rem;
    }

    .sidebar-bottom{
      bottom: 0;
      padding-bottom: 2rem;

      i{
        color: $gray-600;
        font-size: 1.5rem;
      }
    }

    .sidebar-top{
      padding-top: 2rem;
      z-index: 1;
    }


  .sibebar-left{
    align-items: center;
  }

  .sibebar-right{
    align-items: flex-end;
  }

  .container-reseaux{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .logo{
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    color: $gray-200;
  }

  nav{
    ul{
      display: flex;
      gap: 2rem;

      a{
        text-decoration: none;
        color: $gray-200;
        cursor: pointer;
      }
    }
  }

  .container-scroll{
    height: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    width: 20px;

    span{
      position: absolute;
      transform: translate(-50%,0%);
      left: 50%;
      display: block;
      height: 100%;
      width: 2px;
      background-color: $gray-400;
    }

    div{
      position: relative;
      top: 0px;
      background-color: rgb(8, 8, 8);
      z-index: 1;
      height: fit-content;
      width: fit-content;
      width: -moz-fit-content;
      display: flex;
      align-items: center;
      width: 100%;
    }

    p{
      text-transform: uppercase;
      font-size: 1rem;
      writing-mode: vertical-lr;
      text-orientation: mixed;
      padding: .5rem 0;
      color: $gray-400;
    }
  }

</style>