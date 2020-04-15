<template>
  <section>
    <h1>Autor</h1>
    <div v-for="(item, index) in api" :key="index">
      <div class="container" v-if="item.id===autor">
        <div>
          <h2>{{item.titulo}}</h2>
          <p>{{item.biografia}}</p>
        </div>
        <div>
          <img :src="item.imagem" :alt="item.titulo" />
          <ul>
            <li v-for="(elemento, index) in item.obra" :key="index">
             <router-link :to="{name:'Obra', params:{obra:elemento.id}}"> <p>{{elemento.titulo}}</p> </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>



<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "autor",
  mixins: [fetchData],
  props: ["autor"],
  created() {
    this.fetchData(`/autores`);
  }
};
</script>

<style scoped>
img{
  max-width:250px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:40px;
}
section {
  width: 90%;
  margin: 40px 40px;
}
</style>