<script>
import { ref} from "vue";
import dataApi from "../api/dataApi";
const project = dataApi.data().project

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

  return {currentValue, displayImg, displayName, displayDesc, next, before};

}

</script>