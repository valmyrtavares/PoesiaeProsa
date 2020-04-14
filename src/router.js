import Vue from 'vue';
import Router from 'vue-router' 
import Prosa from '@/views/Prosa.vue'
import Musica from '@/views/Musica.vue'
import Poesia from '@/views/Poesia.vue'
import Home from '@/views/Home.vue'
import Contato from '@/views/Contato.vue'
import Autor from '@/views/Autores.vue'
import Obra from '@/components/Obra.vue'


Vue.use (Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home

        },
        {
            path:"/poesia",
            name:"Poesia",
            component:Poesia

        },
        {
            path:"/autores/:autor/",
            name:"Poesia",
            component:Autor,
            props:true,
            children:[
                {
                    path:":obra",
                    name:"Obra",
                    component:Obra,
                    props:true
        
                },
            ]

        },
        {
            path:"/prosa",
            name:"Prosa",
            component:Prosa

        },
        {
            path:"/musica",
            name:"Musica",
            component:Musica

        },
        {
            path:"/contato",
            name:"Contato",
            component:Contato,
        },
       
    ]
})
           
