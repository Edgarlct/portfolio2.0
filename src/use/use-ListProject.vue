<script>
import { ref} from "vue";
const project = [
  {
    img:require('../assets/spidermanHome.jpg'),
    name: 'Spider-man',
    description: 'Projet réalisé pour la marque Monade, fabricant et distributeur de limonades Bio. Le site a été entièrement designé et développé en étroite collaboration avec le responsable de la marque.'
  },
  {
    img:require('../assets/monadeHome.jpg'),
    name: 'Monade Bio',
    description: 'Projet réalisé pour valider ma première année. Il s\'agissait de réaliser un site web sur un personnage de fiction, avec une gestion de blog et d’utilisateur.'
  },
  {
    img:require('../assets/app.jpg'),
    name: 'Association du pôle LDV',
    description: 'Dans le cadre de ma formation en deuxième année, en groupe nous avons pour objectif de réaliser une application cross-plateforme, pour les associations présentes sur le campus.'
  }
]
export default function changeProject(){
  const len = project.length;
  let currentValue = ref(1);
  function next(){
    if (currentValue.value == len-1){
      currentValue.value = 0
    }
    else {
      currentValue.value++;
    }
    return currentValue.value;
  }
  function before(){
    if (currentValue.value == 0){
      currentValue.value = len-1;
    }
    else {
      currentValue.value--;
    }
    return currentValue.value;
  }

  function displayImg(i){
    if (currentValue.value + i == -1){
      return project[len-1].img
    }

    else if (currentValue.value + i == len){
      return project[0].img
    }
    else {
      console.log(currentValue.value + i )
      return project[currentValue.value+i].img
    }
  }
  function displayName(){
    let name = ref(project[currentValue.value].name)
    return name.value
  }
  function displayDesc(){
    let desc = ref(project[currentValue.value].description)
    return desc.value
  }

  return {displayImg, displayName, displayDesc, next, before};

}

</script>