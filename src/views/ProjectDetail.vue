<template>
  <NavMenu/>
  <div class="container">
    <div>
      <div><i class="fas fa-arrow-circle-left"></i></div>
      <div class="stack-img">
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
      </div>
      <div><i class="fas fa-arrow-circle-right"></i></div>
    </div>
    <div>
      <h2>Nom du projet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus quos ratione. Iusto, neque, praesentium.</p>
      <router-link class="btn-see-plus" :to="{ name: 'Projet'}">
        Voir le projet
      </router-link>
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

<style lang="scss" scoped>

</style>