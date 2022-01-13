<template>
  <div class="container-presentation" v-on:mouseenter="startAnimation">
    <div class="container-img">
      <div class="border-outside"></div>
      <div id="img-pres" class="img-presentation">
        <img :src="imgPresentation"/>
      </div>
    </div>
    <div class="presentation">
      <h2>{{citation}}</h2>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  methods:{
    startAnimation(){
      document.getElementById("img-pres").classList.add('translate');
    }
  },
  data(){
    return{
      imgPresentation: require('@/assets/presentation.jpg'),
      citation: 'Je cherche toujours à donner le meilleur de moi-même',
      description : 'Je m’appelle Edgar, j’ai 19 ans et je suis étudiant à l’IIM (La Défense) en deuxième année de Développement Web.\n' +
                    '\n' +
                    'Je suis toujours à la recherche de nouvelles connaissances. J’aime travailler en équipe pour le partage de connaissances, tout en sachant travailler en autonomie.'
    }
  }
}
</script>

<style lang="scss" scoped>

  .container-presentation{
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .container-img{
    width: 45%;
    height: 80%;
    position: relative;
  }
  .border-outside{
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 300px;
    max-width: 560px;
    border: solid 5px white;
    transform: translate(5%, 5%);
  }
  .img-presentation{
    width: 100%;
    min-width: 300px;
    max-width: 560px;
    height: 100%;
    overflow: hidden;
    object-position: center;
    @include flex-center;
    @include black-and-white;
    transition: transform ease-in 0.5s;
    transform: translate(5%, 5%);


    >img{
      height: 100%;
    }
  }

  .translate{
    transform: translate(0%, 0%);
  }

  .presentation{
    width: 45%;
    text-align: left;
    max-width: 580px;

    h2{
      font-size: 1.75rem;
      line-height: 1.2em;
      word-wrap: break-word;
      margin-bottom: 1.5rem;
    }

    p{
      line-height: 1.2rem;
    }
  }
</style>