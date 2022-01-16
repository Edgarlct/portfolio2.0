<script>
export default {
  name: "dataApi",

  data(){
    return{
      project:[
        {
          img:require('../assets/spidermanHome.jpg'),
          name: 'Spider-man',
          description: 'Projet réalisé pour valider ma première année. Il s\'agissait de réaliser un site web sur un personnage de fiction, avec une gestion de blog et d’utilisateur. ',
          detail:
            {
              name: 'Spider-man',
              description: "Ce projet à été réalisé pour valider la 1ère année. Le sujet était de concevoir un site web sur un personnage de fiction.\n" +"\n" +"Il fallait y intéger une galerie d’images, un blog ainsi qu’une gestion des utilisateurs pour que certains puissent écrire des articles de blog.",
              img:[
                require('../assets/spiderman_photo.jpg'),
                require('../assets/modif_blogSpider.png'),
                require('../assets/spidermanHome.jpg'),
                require('../assets/blogSpider.jpg'),
              ],
              techno:[
                {name: "Html", logo: require("/src/assets/html.svg")},
                {name: "Css", logo: require("/src/assets/css.svg")},
                {name: "JavaScript", logo: require("/src/assets/js.svg")},
                {name: "Php", logo: require("/src/assets/php.svg")},
                {name: "MySql", logo: require("/src/assets/MySQL.svg")},
              ]
            },
        },
        {
          img:require('../assets/monadeHome.jpg'),
          name: 'Monade Bio',
          description: 'Projet réalisé pour la marque Monade, fabricant et distributeur de limonades Bio. Le site a été entièrement designé et développé en étroite collaboration avec le responsable de la marque.',
          detail:
            {
              name: 'Monade Bio',
              description: 'Ce projet a été réalisé pour un professionnel de la vente de limonade Bio. Le projet était de réaliser un site vitrine pour expliquer ce que fait la marque et où la retrouver.\n' + '\n' + 'Le client n\'avait aucune idée de ce qu\'il voulait au départ. Après plusieurs maquettes, nous avons décidé de partir sur un style blanc en mettant des touches de couleur pour rappeler celle des fruits utilisés dans les limonades.',
              img:[
                require('../assets/monadeHistoire.jpg'),
                require('../assets/monadePage.jpg'),
                require('../assets/monadeHome.jpg')
              ],
              techno:[
                {name: "Html", logo: require("/src/assets/html.svg")},
                {name: "Css", logo: require("/src/assets/css.svg")},
                {name: "JavaScript", logo: require("/src/assets/js.svg")},
                {name: "Adobe XD", logo: require("/src/assets/xd.svg")},
              ]
            },
        },
        {
          img:require('../assets/app.jpg'),
          name: 'Association du pôle LDV',
          description: 'Dans le cadre de ma formation en deuxième année, en groupe nous avons pour objectif de réaliser une application cross-plateforme, pour les associations présentes sur le campus.',
          detail:
            {
              name: 'Association du pôle LDV',
              description: 'Ce projet est un projet réalisé tout au long de cette deuxième année de Développement Web. Ce projet est à réaliser en groupe.\n' + '\n' + 'Il s\'agit de concevoir une application pour les associations du Pôle Leonard de Vinci, afin qu\'elles puissent communiquer les informations sur leurs évènements, et que les étudiants puissent s\'inscrire aux évènements directement depuis l\'application.',
              img:[
                require('../assets/appAddEvent.jpg'),
                require('../assets/appEvent.jpg'),
                require('../assets/app.jpg'),
              ],
              techno:[
                {name: "React", logo: require("/src/assets/react.svg")},
                {name: "Strapi", logo: require("/src/assets/strapi.svg")},
                {name: "Figma", logo: require("/src/assets/figma.svg")},
              ]
            },
        },
        {
          img:require('../assets/trading.jpg'),
          name: 'Robot de trading',
          description: 'Ce projet personnel, consiste à créer un algorithme d’achat et de vente de crypto monnaie, en Python et grâce à l’API de la plateforme Binance.',
          detail:
            {
              name: 'Robot de trading',
              description: 'Ce projet est un projet personnel. Il s’agit d’un robot de trading de crypto monnaie. Le robot se base sur différentes données récupérées via l’API du site Binance. Avec ces indicateurs le robot essaie de savoir quand acheter et vendre.\n' + '\n' + 'Ce robot est déjà fonctionnel mais il nécessite des ajustements de configuration pour intégrer dans sa stratégie les frais appliqués par la plateforme.',
              img:[
                require('../assets/trading.jpg'),
                require('../assets/trading-return.jpg'),
              ],
              techno:[
                {name: "Python", logo: require("/src/assets/python.svg")},
              ]
            },
        },
        {
          img:require('../assets/binko.jpg'),
          name: 'Binko',
          description: 'Ce projet est réaliser dans le cadre de ma formation, pour un vrai client qui à contacter l\'école afin de faire réaliser sont site de financement participatif.',
          detail:
            {
              name: 'Binko',
              description: "Ce projet est réalisé dans le cadre de ma formation, pour un vrai client qui a contacté l'école afin de faire réaliser sont site de financement participatif. L'objectif était de réaliser un site spécialement pour cette campagne avec la possibilité d'investir directement sur le site sans passer par une plateforme comme Ulule. Pour réaliser de site, un thème Wordpress créer à partir du thème Understrap à était créer.",
              img:[
                require('../assets/binkoPresnetation1.jpg'),
                require('../assets/binkoPresnetation2.jpg'),
                require('../assets/binko.jpg'),
                require('../assets/binkoPresnetation3.jpg'),
                require('../assets/binkoPresnetation4.jpg'),
                require('../assets/binkoPresnetation5.jpg'),
              ],
              techno:[
                {name: "Wordpress", logo: require("/src/assets/wordpress.png")},
              ]
            },
        },
      ],
      skill:[
        {name: "Php", logo: require("/src/assets/php.svg"), progress: "65"},
        {name: "MySql", logo: require("/src/assets/MySQL.svg"), progress: "80"},
        {name: "Scss", logo: require("/src/assets/sass.svg"), progress: "60"},
        {name: "JavaScript", logo: require("/src/assets/js.svg"), progress: "70"},
        {name: "Python", logo: require("/src/assets/python.svg"), progress: "60"},
        {name: "Wordpress", logo: require("/src/assets/wordpress.png"), progress: "65"},
        {name: "react-native", logo: require("/src/assets/react.svg"), progress: "50"},
        {name: "vue", logo: require("/src/assets/vue.png"), progress: "40"},
        {name: "Node", logo: require("/src/assets/node.png"), progress: "40"},
        {name: "Strapi", logo: require("/src/assets/strapi.svg"), progress: "50"},
        {name: "Adobe XD", logo: require("/src/assets/xd.svg"), progress: "65"},
        {name: "Figma", logo: require("/src/assets/figma.svg"), progress: "70"},
      ]
    }
  }
}
</script>