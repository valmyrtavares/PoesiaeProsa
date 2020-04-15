<template>
  <section>
    <h1>obra</h1>
   
     <!-- <p>{{api[0].obra}}</p>  -->
      <div v-for="(item,index) in api" :key="index">
        <div v-for="(element, index) in item.obra" :key="index + element.id">
         <div v-if="element.id===obra">
         <img :src="element.imagem" :alt="element.titulo">
          <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${element.mus}`"
          frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
        </div>
           
        </div>
      </div>
        

    <!-- <div v-for="(item, index) in api" :key="index" >
      <div v-for="(elemento, index) in item" :key="index"></div>
      <p>{{elemento}}</p>
      <img v-if="item.obra.id===obra" :src="item.imagem" :alt="item.id">
    </div> -->
     
    
  </section>
</template>

    

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "Obra",
  props: ["obra"],
  mixins: [fetchData],
  data() {
    return {
      nome: "../assets/consoada.png"
    };
  },
  computed: {
    poesia() {
      return `../assets/${this.obra}.png`;
    }
  },
  created() {
    this.fetchData("/autores");
  }

  // beforeRouteUpdate(to, from, next) {
  //  this.poesia
  //  console.log(this.poesia)
  //   next();
  // }
};
</script>

<style>
</style>