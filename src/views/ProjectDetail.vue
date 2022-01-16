<template>
  <NavMenu/>
  <div class="container container-project">
    <div class="img-side">
      <i class="fas fa-arrow-circle-left" @click="before()"></i>
      <div class="stack-img">
        <div><img :src="displayImg(0)" alt=""></div>
        <div><img :src="displayImg(1)" alt=""></div>
        <div><img :src="displayImg(2)" alt=""></div>
      </div>
      <i class="fas fa-arrow-circle-right" @click="next()"></i>
    </div>
    <div class="text-side">
      <h2>{{ api.name }}</h2>
      <p>{{ api.description }}</p>
      <h3>Technologie utilisées :</h3>
      <div class="skill-use">
        <Progress class="skill" v-for="(skill) in api.techno" :key="skill.id" :name="skill.name" :progress="100" :url="skill.logo"></Progress>
      </div>
      <router-link :to="{name: 'Home'}" class="btn-back">Retour</router-link>
    </div>
  </div>
</template>

<script>
import Progress from "../components/Progress";
import NavMenu from "../components/NavMenu";
import dataApi from "../api/dataApi";

export default {
  name: "ProjectDetail",
  components: {NavMenu, Progress},
  props: ['id'],
  data() {
    return {
      api: dataApi.data().project[this.id].detail,
      currentValue: 1,
    }
  },
  methods:{

    next(){
      if (this.currentValue == this.api.img.length-1){
        this.currentValue = 0
      }
      else {
        console.log("current " + this.currentValue)
        this.currentValue++;
      }
      return this.currentValue;
    },
    before(){
      if (this.currentValue == 0){
        this.currentValue = this.api.img.length-1;
      }
      else {
        this.currentValue--;
      }
      return this.currentValue;
    },

    displayImg(i){
      if (this.currentValue + i == -1){
        return this.api.img[this.api.img.length-1]
      }

      else if (this.currentValue + i >= this.api.img.length){
        return this.api.img[0]
      }
      else {
        console.log(this.currentValue )
        return this.api.img[this.currentValue + i]
      }
    },
  }
}
</script>

<style lang="scss">
.container-project {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @include l{
    flex-direction: column;
  }
  .name{
    background-color: $black;
  }
}

.img-side {
  width: 40%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

  @include l{
    width: 80%;
  }
  @include xs{
    width: 90%;
  }

  > i {
    font-size: 1.5rem;
    position: absolute;
    bottom: 50%;
    z-index: 10;
    transform: translate(0, 50%);
    color: $orange;
    &:first-of-type {
      left: 0;
    }

    &:last-of-type {
      right: 0;
    }
  }

  .stack-img {
    width: 90%;
    @include flex-center;
    flex-direction: column;
    position: relative;

    > div {
      overflow: hidden;
      height: 60%;
      width: 100%;
      display: flex;

      &:first-of-type {
        position: absolute;
        transform: translate(5%, 5%);
      }

      &:last-of-type {
        position: absolute;
        transform: translate(10%, 10%);
        z-index: -1;
      }
    }

  }

  img {
    height: 100%;
    min-width: 300px;
    max-width: 560px;
    overflow: hidden;
    object-fit: cover;
    @include black-and-white;
  }
}

.text-side {
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;

  padding: 2rem;
  background-color: $gray-800;
  @include l{
    width: 70%;
    margin-bottom: 4rem;
  }

  @include xs{
    padding: 1rem;
    width: 80%;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p{
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
}

.btn-back {
  padding: 1rem 1.5rem;
  background-color: $black;
  cursor: pointer;
  text-decoration: none;
  color: $white;
  display: block;
  width: fit-content;
  margin: 2rem auto 0;
  @include color-hover;
}
.skill-use{
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  >.skill{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>