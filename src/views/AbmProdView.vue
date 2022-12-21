<template>
    <div class="container content">
      <h1 class="titulo">Alta, Baja y Modificacion de Productos</h1>
      <AbmProductosComponent />
    </div>
</template>

<script>
  import AbmProductosComponent from '@/components/AbmProductosComponent.vue'
  export default {
    name: 'AbmProdView',
    components:{
        AbmProductosComponent,
    },
    
  }
</script>

<style scoped>
  .content{
    padding: 15px;
    display: flex;
    flex-direction: column;
    column-gap: 15px;
    row-gap: 15px;
    justify-content:center;
    align-items: center;
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