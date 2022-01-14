<template>
  <div class="container-list-projet">
    <div>
      <div class="image-project"><img :src="displayImg(-1)" alt=""></div>
      <div class="firstProject"><img :src="displayImg(0)" alt=""></div>
      <div class="image-project"><img :src="displayImg(1)" alt=""></div>
      <div class="detail">
        <h2>{{ displayName() }}</h2>
        <p>{{ displayDesc() }}</p>
        <div class="btn-nav">
          <div class="btn-arrow" @click="before()"><i class="fas fa-arrow-left"></i>Précédent</div>
          <div class="btn-see-plus">Voir le projet</div>
          <div class="btn-arrow" @click="next()">Suivant<i class="fas fa-arrow-right"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import changeProject from "../use/use-ListProject"

export default {
  name: "ListProjects",
  setup() {
    const {displayImg, displayName, displayDesc, next, before} = changeProject();
    return {displayImg, displayName, displayDesc, next, before}
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.container-list-projet {
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  > div {
    height: 60%;
    display: flex;
    align-items: end;
    position: relative;
    justify-content: center;
    transform: translate(0%, -10%);

    > div {
      @include flex-center;
    }

    .firstProject {
      height: 100%;
      width: 40%;
      overflow: hidden;
      margin: 0 1rem;
    }

    .image-project {
      height: 85%;
      width: 30%;
      overflow: hidden;
      filter: blur(5px);
    }

    img {
      height: 100%;
      @include black-and-white;
    }
  }
}


.detail {
  position: absolute;
  width: 60%;
  transform: translate(0, 100%);
  bottom: 15%;

  flex-direction: column;

  background-color: $gray-800;
  padding: 1rem 1.5rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.75rem;
    margin-bottom: 1.5rem;
  }

  .btn-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn-arrow {
      color: $gray-300;
      display: flex;
      align-items: center;
      gap: .5rem;
      cursor: pointer;
    }
  }

  .btn-see-plus {
    padding: 1rem 1.5rem;
    background-color: $black;
    cursor: pointer;
  }

}

</style>