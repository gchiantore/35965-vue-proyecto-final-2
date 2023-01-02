<template>
  <div class="col-md-8">
    <div v-if="carritovacio==1">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Importe</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) of carritodetalle" :key="index">
                    <th scope="row">{{item.prodid}}</th>
                    <td>{{item.producto}}</td>
                    <td>{{item.cantidad}}</td>
                    <td>{{item.precio}}</td>
                    <td>{{item.importe}}</td>
                </tr>
            </tbody>
        </table>
        <div class="col-md-12 text-center p-3">
            
            <button class="btn btn-danger m-3">Cancelo la compra</button>
            <button class="btn btn-light m-3"> Humm creo que me falto algo</button>
            <button @click="comprar()" class="btn btn-success m-3"> Listo Compro !</button>
            
        </div>
    </div>
    <div v-else>
        <div class="col-md-12 text-center p-3">
            <h2>No hay items en el carrito</h2>
            <button @click="listaproductos()" class="btn btn-success m-3"> ir a comprar ...</button>
            
        </div>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'CarritoComponent',
    data(){
        return{
            carritovacio:0,
            carritodetalle:Object,
            usuario:Object,
            carrito:{
                fecha:'',
                userid:'',
                username:'',
                useremail:'',
                items:Object,
                total:''
            }
            
        }    
    },
    created(){
            this.carritodetalle=JSON.parse(localStorage.getItem('items'))
            if (this.carritodetalle.length>0){
                this.carritovacio=1
            }else{
                this.carritovacio=0
            }
            this.usuario=JSON.parse(localStorage.getItem('userLog'))
          },
    methods:{
        comprar(){
            let total=0
            for (let i=0;i<this.carritodetalle.length;i++){
                total=total+this.carritodetalle[i].importe
            }
            this.carrito.fecha=new Date()
            this.carrito.userid=this.usuario.id 
            this.carrito.username=this.usuario.nombre
            this.carrito.useremail=this.usuario.email 
            this.carrito.items=this.carritodetalle
            this.carrito.total=total
            const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle"
            axios.post(URLPOST, this.carrito)
            console.log (this.objproducto)
            this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Gracias ${this.carrito.username}, tu pedido se esta procesando, te mantedremos informado en tu casilla de correo ${this.carrito.useremail}`,
                            showConfirmButton: false,
                            timer: 5000
                            })  
            localStorage.removeItem('items')                
            this.$router.push('/')         
        },

        listaproductos(){
            this.$router.push('/productos')
        }
 
    }   
       

}
</script>

<style>

</style>