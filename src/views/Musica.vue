<template>
  <section>
    <div>
      <h2>{{api.titulo}}</h2>
      <p>{{api.descricao}}</p>
        <div class="autores">
          <h2>Autores:</h2>
          <router-link to="/autores/beethoven">Ludwig van Beethoven</router-link>
          <router-link to="/autores/heitorVillaLobos">Heitor Villa Lobos</router-link>
          <router-link to="/autores/JSB">Johann Sebastian Bach</router-link>
        </div>
    </div>
    <img :src="api.imagem" alt="musica Erudita">
  </section>
</template>
       



<script>
import fetchData from '@/mixins/fetchData.js'

export default {
name:"Home",
mixins:[fetchData],
created(){
  this.fetchData("/musica")
}

}
</script>

<style scoped>
section{
  display:grid;
  grid-template-columns: 1fr 1fr;
  width:90%;
  margin: 40px auto;
  padding:10px;
  grid-gap:15px

}
h2{
  margin-bottom:15px
}
.autores{
  width:250px;
  padding:20px;
}
.autores a{
 display:block;
 margin-bottom:10px;
}
</style>