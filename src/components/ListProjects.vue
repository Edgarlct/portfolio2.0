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
          <router-link class="btn-see-plus" :to="{ name: 'project-detail', params: { id: currentValue } }">
            Voir le projet
          </router-link>
          <div class="btn-arrow" @click="next()">Suivant<i class="fas fa-arrow-right"></i></div>
        </div>
        <router-link class="btn-see-plus mobile" :to="{ name: 'project-detail', params: { id: currentValue } }">
          Voir le projet
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import changeProject from "../use/use-ListProject"

export default {
  name: "ListProjects",
  setup() {
    const {currentValue, displayImg, displayName, displayDesc, next, before} = changeProject();
    return {currentValue, displayImg, displayName, displayDesc, next, before}
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

    @include xs{
      height: 40%;
    }

    > div {
      @include flex-center;
    }

    .firstProject {
      height: 100%;
      width: 40%;
      overflow: hidden;
      margin: 0 1rem;

      @include m{
        width: 60%;
      }
      @include s{
        margin: 0;
        width: 70%;
      }
    }

    .image-project {
      height: 85%;
      width: 30%;
      overflow: hidden;
      filter: blur(5px);
      @include m{
        width: 20%;
      }
      @include s{
        width: 7%;
      }
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

  @include l{
    width: 75%;
  }

  @include s{
    width: 85%;
  }

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
      @include color-hover;

    }
  }

  .btn-see-plus {
    padding: 1rem 1.5rem;
    background-color: $black;
    cursor: pointer;
    text-decoration: none;
    color: $white;

    @include color-hover;

    @include s{
      display: none;
    }
  }

  .mobile{
    display: none;
    @include s{
      margin-top: 1.5rem;
      display: block;
    }
  }

}

</style>