<template>

  <section>
    <div>
      <h2>{{api.titulo}}</h2>
      <p>{{api.descricao}}</p>
    </div>
    <div>
      <img :src="api.imagem">
      <router-link to="/autores/machadoDeAssis">Machado de Assis</router-link>
      <router-link to="/autores/saramago">Saramago</router-link>
        <router-link to="/autores/JoaoGuimaraesRosa">João Guimarães Rosa</router-link>
    </div>
  </section>
</template>

<script>
import fetchData from '@/mixins/fetchData'
export default {
name:"Prosa",
mixins:[fetchData],

created(){
  this.fetchData("/prosa")
}
}
 
</script>

<style scoped>
section{
  width:90%;
  margin:40px auto;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-area:20px
}
h2{
  text-align:center;
  margin-bottom:25px;
  border-bottom:solid 1px black;
  font-family:monospace;
  font-size:30px
}

div{
  max-width:400px;
}

</style>
 


 
 



