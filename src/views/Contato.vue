<template>
<div>
  <section>
    <h2>{{api.titulo}}</h2>
    <p>{{api.descricao}}</p>
    <div>
     <p> Numero: <span> {{api.contato.telefone}}</span></p>
      <p> Email: <span> {{api.contato.email}}</span></p>
     <p> Endereço: <span> {{api.contato.endereco}}</span></p>
    </div>
  </section>
 

</div>  
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
export default {
name:"Contato",
props:["res"],
mixins:[fetchData],

            
    created(){
        this.fetchData("/contato");
    }
}
       
       
    
   

</script>

<style scoped>
section{
  text-align:center;
  width:35%;
  margin:50px auto;
  padding:20px;
  border: solid 1px black;
}
p+p{
  margin:10px;
}
p+div{
  margin:10px;
}
h2{
  margin-bottom: 7px;
  
}

</style>