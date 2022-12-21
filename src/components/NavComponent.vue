<template>
    <div class="container-fluid header">
        <nav class="navbar navbar-expand-lg navbar-light bg-red">
            <div class="container container-navigation">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div v-if="paso===true" class="collapse navbar-collapse center bg-red" id="navbarNav">
                    <router-link class="nav-link text-light px-3" to="/">Home</router-link> |
                    <router-link class="nav-link text-light px-3" to="/abmprod">ABM Productos</router-link> |
                    <router-link class="nav-link text-light px-3" to="/usuarios">Lista de Usuarios</router-link> |
                    <router-link class="nav-link text-light px-3" to="/ordenes">Ordenes</router-link>
                </div>
                <div v-else class="collapse navbar-collapse center bg-red" id="navbarNav">
                    <router-link class="nav-link text-light px-3" to="/">Home</router-link> |
                    <router-link class="nav-link text-light px-3" to="/productos">Productos</router-link> |
                    <router-link class="nav-link text-light px-3" to="/carrito">Carrito</router-link>
                </div>
            </div>
        </nav>
    </div>
  </template>
  
  <script>
  export default {
      name:'NavComponent',
      props:{
        paso:Boolean,
      }
  }
  </script>
  
  <style scoped>
      .header{
          background-color: #a70303;
          height: 40px;
      }
      .bg-red{
        background-color: #a70303;
      }
      .center{
        display: flex;
        align-items:center;
        justify-content: center;
      }
      .navbar{
        background-color: #a70303;
          height: 40px;
      }

      .container-navigation{
        color:white;
      }
  </style>