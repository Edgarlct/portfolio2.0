<template>
  <div class="container-header">
    <div>
      <p class="text-up">Je suis</p>
      <h1>{{ name }}</h1>
      <div class="text-bottom">
        <p>{{ job }}</p>
        <p>{{ seniority }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      name: "Edgar",
      job: "Développeur Web",
      seniority: "Junior"
    }
  }
}
</script>

<style lang="scss" scoped>
.container-header {
  height: 100vh;
  @include flex-center;
  flex-direction: column;


  h1 {
    font-size: 8rem;
    text-transform: uppercase;
    width: 100%;
    text-shadow: $black -10px 10px 20px;
    animation: typing 1s steps(5), blink .5s 2 alternate;
    white-space: nowrap;
    overflow: hidden;

    @include xs{
      font-size: 6rem;
    }
  }

  @keyframes typing {
    from {
      width: 0
    }
  }

  @keyframes blink {
    0%{
      border-right: 3px solid;
    }

    50% {
      border-color: transparent
    }
    100%{
      border-right: 3px solid;
    }

  }

  div{
    >p{
      text-align: left;
      color: $gray-400;
      width: fit-content;
    }
  }

  .text-up{
    position: relative;
    left: 20%;
    opacity: 0;
    animation: ease-in 1s opacity forwards;
    animation-delay: 1s;
  }

  .text-bottom{
    position: relative;
    left: 60%;
    opacity: 0;
    animation: ease-in 1s opacity forwards;
    animation-delay: 1s;
    width: fit-content;
  }

  @keyframes opacity {
    from{
      opacity: 0;
    }
    to{
      opacity: 100;
    }
  }
}
</style>