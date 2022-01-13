<template>
  <div class="container-list-projet">
    <div>
      <div class="image-project"><img :src="projet[0].img" alt=""></div>
      <div class="firstProject"><img :src="projet[1].img" alt=""></div>
      <div class="image-project"><img :src="projet[2].img" alt=""></div>
      <div class="detail">
        <h2>{{projet[1].name}}</h2>
        <p>{{projet[1].description}}</p>
        <div class="btn-see-plus">Voir le projet</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProjects",
  data(){
    return{
      projet: {
        0:{
          img:require('../assets/spidermanHome.jpg'),
          name: 'Spider-man',
          description: 'Projet réalisé pour la marque Monade, fabricant et distributeur de limonades Bio. Le site a été entièrement designé et développé en étroite collaboration avec le responsable de la marque.'
        },
        1:{
          img:require('../assets/monadeHome.jpg'),
          name: 'Monade Bio',
          description: 'Projet réalisé pour valider ma première année. Il s\'agissait de réaliser un site web sur un personnage de fiction, avec une gestion de blog et d’utilisateur.'
        },
        2:{
          img:require('../assets/app.jpg'),
          name: 'Association du pôle LDV',
          description: 'Dans le cadre de ma formation en deuxième année, en groupe nous avons pour objectif de réaliser une application cross-plateforme, pour les associations présentes sur le campus.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-list-projet{
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;

    >div{
      height: 60%;
      display: flex;
      align-items: end;
      position: relative;
      justify-content: center;
      transform: translate(0%, -10%);

      >div{
        @include flex-center;
      }

      .firstProject{
        height: 100%;
        width: 40%;
        overflow: hidden;
        margin: 0 1rem;
      }
      .image-project{
        height: 85%;
        width: 30%;
        overflow: hidden;
        filter: blur(5px);
      }

      img{
        height: 100%;
        @include black-and-white;
      }
    }
  }



  .detail{
    position: absolute;
    width: 60%;
    transform: translate(0, 100%);
    bottom: 15%;

    flex-direction: column;

    background-color: $gray-800;
    padding: 1rem 1.5rem;

    h2{
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p{
      line-height: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .btn-see-plus{
      padding: 1rem 1.5rem;
      background-color: $black;
      cursor: pointer;
    }

  }

</style>