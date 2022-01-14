<script>
export default {
  name: "dataApi",

  data(){
    return{
      project:[
        {
          img:require('../assets/spidermanHome.jpg'),
          name: 'Spider-man',
          description: 'Projet réalisé pour la marque Monade, fabricant et distributeur de limonades Bio. Le site a été entièrement designé et développé en étroite collaboration avec le responsable de la marque.',
          detail:[
            {
              name: 'Spider-man Détail',
              description: 'Projet réalisé pour la marque Monade, fabricant et distributeur de limonades Bio. Le site a été entièrement designé et développé en étroite collaboration avec le responsable de la marque.'
            },
          ],
        },
        {
          img:require('../assets/monadeHome.jpg'),
          name: 'Monade Bio',
          description: 'Projet réalisé pour valider ma première année. Il s\'agissait de réaliser un site web sur un personnage de fiction, avec une gestion de blog et d’utilisateur.',
          detail:[
            {
              name: 'Monade Détail',
              description: 'Projet réalisé pour la marque Monade, fabricant et distributeur de limonades Bio. Le site a été entièrement designé et développé en étroite collaboration avec le responsable de la marque.'
            },
          ],
        },
        {
          img:require('../assets/app.jpg'),
          name: 'Association du pôle LDV',
          description: 'Dans le cadre de ma formation en deuxième année, en groupe nous avons pour objectif de réaliser une application cross-plateforme, pour les associations présentes sur le campus.',
          detail:[
            {
              name: 'asso Détail',
              description: 'Projet réalisé pour la marque Monade, fabricant et distributeur de limonades Bio. Le site a été entièrement designé et développé en étroite collaboration avec le responsable de la marque.'
            },
          ],
        }
      ],

      // dataSource(i, currentVal = false){
      //   let d;
      //   if(i==0){
      //     d = dataApi.data().project
      //     console.log(d)
      //     return d;
      //   }
      //   if(i==1){
      //     d = dataApi.data().project[currentVal].detail
      //     console.log(d)
      //     return d;
      //   }
      //
      // },
    }
  }
}
</script>