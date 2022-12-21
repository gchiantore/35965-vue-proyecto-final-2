<template>
    <div class="card col-md-8 mb-5" >
      <div class="card-header">
          Ordenes
      </div>
      <div class="card-body table-responsive ">
          <table class="table align-middle table-hover">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Total</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(itemn, i) of carrito" :key="i">
                      <th scope="row">{{carrito.id}}</th>
                      <td>{{carrito.createdAt}}</td>
                      <td>{{carrito.userName}}</td>
                      <td>{{carrito.total}}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
  </template>
  
  <script>
      import axios from "axios"
      export default {
          name:'ListaUsuarios',
          data(){
              return{
                  carrito:Object,
              }    
          },
          created(){
            const URLAPICARRITO="https://639e8f4e3542a261305d989b.mockapi.io/carrito";
            axios.get(URLAPICARRITO)
                .then(response => response.data)
                .then(data =>{
                    this.carrito = data
                }) 
   
          },
  }   
  
  </script>
  
  <style scoped>
      .avatar{
          height: 40px;
          width: 40px;
          border-radius: 50%;
      }
  </style>