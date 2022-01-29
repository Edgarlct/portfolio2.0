<template>
  <div  class="container-skill">
    <h2>Compétences</h2>
    <div>
      <Progress class="skill" v-for="(skill) in api" :key="skill.id" :name="skill.name" :progress="skill.progress" :url="skill.logo"></Progress>
    </div>

  </div>
</template>

<script>
import Progress from "./Progress";
import dataApi from "../api/dataApi";

export default {
  name: "CompetencesList",
  components: {Progress},
  data(){
    return{
      api: dataApi.data().skill,
      react: require("/src/assets/react.svg"),
    }
  },
}
</script>

<style lang="scss" scoped>
  .container-skill{
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    @include s(){
      height: 100%;
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
    h2{
      font-size: 2rem;
    }

    >div{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
    }
  }
  .skill{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
</style>