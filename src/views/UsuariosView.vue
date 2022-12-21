<template>
    <div class="container content">
      <h1 class="titulo">Lista de usuarios Activos</h1>
    <ListaUsuarios />
    </div>
  </template>

<script>
  import ListaUsuarios from '@/components/ListaUsuarios.vue';
  export default {
    name: 'HomeView',
    components:{
        ListaUsuarios
    },
    
  }
</script>
<style scoped>
.content{
  padding: 15px;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  row-gap: 15px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: white;
  margin-bottom: 0px;
  box-shadow: 5px 5px 10px #888888;
  }
  .titulo{
   width: 100%;
   text-align: center;
   padding: 30px;
  }
</style>