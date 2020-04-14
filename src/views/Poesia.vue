<template>
<section>
<div>
  <h1>{{api.titulo}}</h1>
  <p>{{api.descricao}}</p>
  

  <div class="autores">
    <router-link to="/autores/manoelBandeira">Manoel Badeira</router-link>
    <router-link to="/autores/carlosDrumond">Carlos Drumond</router-link>
    <router-link to="/autores/augustoAnjos">Augusto dos Anjos</router-link>
  </div>
 
</div>
  <img :src='api.imagem' :alt="api.id" >
</section>

</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
name:"Poesia",
mixins:[fetchData],
created(){
  this.fetchData("/poesia")
}
}
</script>


<style scoped>
.autores{
  display:grid;
  }
  .autores a + a{
    margin:10px;
  }


h1{
  margin-bottom:20px;
}
div{
  padding:20px;
}
section{
  display:grid;
  grid-template-columns: 1fr 1fr;
}
img{
  width:400px;
  height:500px;
  margin:40px auto;
}
</style>