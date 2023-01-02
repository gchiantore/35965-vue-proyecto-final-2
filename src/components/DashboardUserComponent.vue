<template>
    <div class="dashboard-container p-5">
      <DashboardCardContainer icono="bi bi-boxes" nombre="Cantidad Productos Comprados" :cantidad="cantProduct"/>
      <DashboardCardContainer icono="bi bi-currency-dollar" nombre="Importe de las Compras" :cantidad="impTotal"/>
      <DashboardCardContainer icono="bi bi-cart-check-fill" nombre="Cantodad Ordenes realizadas" :cantidad="cantOrdenes"/>
    </div>
  </template>
  
  <script>
      import DashboardCardContainer from '../components/DashboardCardComponent.vue'
      import axios from 'axios'
      export default {
          name:'DashboardAdmComponent',
          components:{
              DashboardCardContainer,
          },
          data(){
              return{
                  user:Object,
                  carrito:Object,
                  cantProduct:0,
                  impTotal:0,
                  cantOrdenes:0,
              }    
          },
          created(){
              this.user=JSON.parse(localStorage.getItem('userLog'))
              const URLAPIUSER="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle";
              axios.get(URLAPIUSER)
                  .then(response => response.data)
                  .then(data =>{
                      this.carrito = data
                      const carritousuario=this.carrito.filter(car => (car.userid === this.user.id))   
                      this.cantOrdenes=carritousuario.length
                      this.impTotal=this.calculototal(carritousuario)
                      this.cantProduct=this.calculoproductos(carritousuario)
                  })  
          },

          methods:{
            calculototal(car){
                let total=0 
                for (let i=0;i<car.length;i++){
                    total=total+car[i].total
                }
                return total 
            },
            calculoproductos(car){
                let cant=0 
                for (let i=0;i<car.length;i++){
                    for (let j=0;j<car[i].items.length;j++){
                        cant=cant+car[i].items[j].cantidad
                    }
                }
                return cant
            }
          }
  }
  </script>
  
  <style>
      .dashboard-container{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          row-gap: 30px;
      }
  </style>