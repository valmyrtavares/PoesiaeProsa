export default{
    data(){
        return{
            api:{}
        }
    },
    methods:{
        fetchData(url){
            fetch(`http://localhost:3000${url}`).then(r => r.json()).then(response =>{
                this.api = response
            })
        }
    },
}