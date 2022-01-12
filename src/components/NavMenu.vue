<template>
<div class="container-menu">
  <div class="sibebar-left">
    <p class="logo">ed</p>
    <ul class="container-reseaux">
      <li><a href="#"><i class="fab fa-github"></i></a></li>
      <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
    </ul>
  </div>
  <div class="sibebar-right">
    <nav>
      <ul>
        <li><a href="#">Présentation</a></li>
        <li><a href="#">Compétence</a></li>
        <li><a href="#">Projet</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="container-scroll">
      <span></span>
      <div>
        <p>scroll</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>

<style lang="scss">
  .container-menu{
    position: fixed;
    padding: 2rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    >div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    i{
      color: $gray-600;
      font-size: 1.5rem;
    }
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
    gap: 1rem;
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