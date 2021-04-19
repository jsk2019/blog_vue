<template>
  <div id="Home" >
    <div :style="styles">
      <Maske/>
    </div>
  </div>
</template>

<script>
import picture from "@/assets/images/maskeBG.jpg"
import Maske from "@/components/HomeComponents/Maske";
export default {
  name: "Home",
  components: {
    Maske
  },
  data(){
    return{
      styles:{
        width: '300px',
        height: '200px',
        backgroundImage: `url(${picture})`
      },
    }
  }
};
</script>
