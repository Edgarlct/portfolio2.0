<template>
  <NavMenu/>
  <div class="container">
    <div class="img-side">
      <i class="fas fa-arrow-circle-left"></i>
      <div class="stack-img">
        <div><img :src="require('@/assets/presentation.jpg')" alt=""></div>
        <div><img :src="require('@/assets/presentation.jpg')" alt=""></div>
        <div><img :src="require('@/assets/presentation.jpg')" alt=""></div>
      </div>
      <i class="fas fa-arrow-circle-right"></i>
    </div>
    <div class="text-side">
      <h2>Nom du projet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus quos ratione. Iusto, neque, praesentium.</p>
      <div>Retour</div>
    </div>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu";
export default {
  name: "ProjectDetail",
  components: {NavMenu}
}
</script>

<style lang="scss">
  .img-side{
    width: 40%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;

    >i{
      font-size: 1.5rem;
      position: absolute;
      bottom: 50%;
      z-index: 10;
      transform: translate(0, 50%);

      &:first-of-type{
        left: 0;
      }

      &:last-of-type{
        right: 0;
      }
    }

    .stack-img{
      width: 90%;
      @include flex-center;
      flex-direction: column;
      position: relative;

      >div{
        overflow: hidden;
        height: 60%;
        width: 100%;
        display: flex;

        &:first-of-type{
          position: absolute;
          transform: translate(5%, 5%);
        }

        &:last-of-type{
          position: absolute;
          transform: translate(10%, 10%);
          z-index: -1;
        }
      }

    }
    img{
      height: 100%;
      min-width: 300px;
      max-width: 560px;
      overflow: hidden;
      object-fit: cover;
      @include black-and-white;
    }
  }
</style>