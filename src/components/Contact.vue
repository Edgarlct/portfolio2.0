<template>
  <div class="container-contact">
    <h2>Contact</h2>
    <div>
      <p>Contact possible par mail a l'adresse-mail suivante : </p>
      <a href="mailto:edgar.lecomte@outlook.com">edgar.lecomte@outlook.com</a>
    </div>
    <div>
      <p>Par téléphone au :</p>
      <a href="tel:+33664974585">06 64 97 45 85</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>
  .container-contact{
    padding: 2rem;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $gray-800;
    margin: 0 auto 5rem;

    h2{
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    div{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1rem;

      a{
        color: currentColor;
      }

      &:first-of-type{
        margin-bottom: 2rem;
      }
    }
  }
</style>