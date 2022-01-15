<template>
  <div>
    <ve-progress
        :progress="progress"
        size="100"
        thickness="3%"
        emptyThickness="3%"
        :emptyColor="ellipseEmpty"
        :color="ellipseGradient"
    >

      <img :src=url class="logo-skill">
    </ve-progress>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props:{
    name: String,
    progress: Number,
    url: String,
  },
  data() {
    return {
      ellipseGradient: {
        radial: false,
        colors: [
          {
            color: "#F0810AFF",
            offset: "0",
            opacity: "1",
          },
          {
            color: "#F0810AFF",
            offset: "100",
            opacity: "1",
          },
        ],
      },
      ellipseEmpty: {
        colors: [{ color: "#7e7e7e", opacity: "0.35" }],
      },
    };
  },
}
</script>

<style lang="scss" scoped>
  .name{
    width: fit-content;
    max-width: 100%;
    padding: 1rem 1.5rem;
    background-color: $gray-800;
    text-decoration: none;
    color: $white;
  }

  .logo-skill{
    width: 50%;
  }
</style>