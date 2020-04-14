<template>
<div>
  <img :src='nome' :alt="nome">

</div>
</template>
    

<script>
export default {
  name: "Obra",
  props: ["obra"],
  data(){
    return{
     nome:"@/assets/consoada.png"
    }
  },
  computed:{
    poesia(){
      return `@/assets/${this.obra}.png`
    }
  },
  created(){
    console.log(this.poesia)
  }

};
</script>

<style>
</style>