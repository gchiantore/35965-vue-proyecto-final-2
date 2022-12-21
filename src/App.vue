<template>
  <div id="app">
      <div v-if="logged==0" class="contenedor">
        <!-- Login Form -->
        <div class="login-container">
          <div class="login-header">
            <img class="login-img mb-5" src="./assets/logo-app.png" alt="">
            <h3 class="text-center mb-3">Ingreso a la App</h3>
          </div>
          
          <div class="login-form" id="loginform">
            <form action="" @submit.prevent="logValidate">
              <div class="mb-2">
                <label for="email" class="form-label">Tu e-mail</label>
                <input v-model="usuario" type="email" class="form-control" id="email">
              </div>
              <div class="mb-3">
                <label for="pass" class="form-label">Password</label>
                <input v-model="pass" type="password" class="form-control" id="pass">
              </div>
              <button type="submit" class="btn btn-success float-end">Ingresar</button>
            </form>
          </div>  

          <div class="login-footer">
            <hr class="mb-1">
            <p class="text-center text-secondary mb-1 fs-6">No tenes cuenta, No te preocupes hace clic <a @click="seguirOpcion(1)" href="#">Aqui</a> y crea una</p>
          </div>
        </div>
      </div>
      <!-- Registro -->
      <div v-else-if="logged===1" class="contenedor">
        <div class="registry-container container">
          <div v-if="errores.length!=0" class="alert alert-danger">
            {{showErrors}}
          </div>
          <div class="registry-header">
            <img class="login-img mb-5" src="./assets/logo-app.png" alt="">
            <h3>Vamos a Registrarnos</h3>
            <hr>
          </div>
          <div class="registry-form">
            <form id="userform" action="" @submit.prevent="regValidate">
              <div class="mb-2">
                <label for="nombre" class="form-label">Tu Nombre</label>
                <input v-model="user.nombre" type="text" class="form-control" id="nombre">
              </div>
              <div class="mb-2">
                <label for="nacimiento" class="form-label">Cuando Naciste?</label>
                <input v-model="user.nacimiento" type="date" class="form-control" id="nacimiento">
              </div>
              <div>
                <label for="tipo" class="form-label">Tipo Usuario</label>
                <select v-model="user.tipo" class="form-select" id="tipo">
                    <option selected disabled value=""></option>
                    <option value="false">Cliente</option>
                    <option value="true">Administrador</option>
                </select>
              </div>
              <div class="mb-2">
                <label for="email" class="form-label">Tu e-mail</label>
                <input v-model="user.email" type="email" class="form-control" id="email">
              </div>
              <div class="mb-3">
                <label for="pass" class="form-label">Password</label>
                <input v-model="user.pass" type="password" class="form-control" id="pass">
              </div>
              <div class="mb-3">
                <label for="checkpass" class="form-label">Confirmar Password</label>
                <input v-model="chekpass" type="password" class="form-control" id="checkpass">
              </div>
                <button type="submit" class="btn btn-success float-end">Guardar Datos</button>
            </form>
          </div>
          <div class="login-footer">
            <hr class="mb-1">
            <p class="text-center text-secondary mb-1 fs-6">Ya tenes una cuenta, ne te preocupes hace click <a @click="seguirOpcion(0)" href="#">Aqui</a> para loguearte con tu usuario y clave</p>
          </div>
        </div>  
      </div>
       <!-- Login Fallido -->
       <div v-else-if="logged==3" class="contenedor">
        <div class="badlog-container container">
          <i class="bi bi-emoji-frown badlog-icon p-3"></i>
          <h1 class="badlog-text p-5">Ups, parece que alguno de los datos no corresponden a un usuario registrado</h1>
          <button @click=seguirOpcion(0) class="btn btn-success">Volver a intentar</button>
        </div>  
      </div>

    <!-- App Logueada -->
    <div v-else>
      <HeaderComponent @salir="seguirOpcion($event)" :imagen="user.avatar" :nombre="user.nombre" :tipo="user.tipo"/>
      <NavComponent :paso="user.tipo"/> . 
      <router-view :paso="user.tipo"/>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import axios from 'axios'

export default {
  components: { 
    HeaderComponent, 
    NavComponent,
    FooterComponent
   },

  name: 'App',
  data(){
        return{
            opcion:0,
            logged:0,
            usuario:'',
            pass:'',
            users:Object,
            user:{
              nombre:'',
              nacimiento:'',
              tipo:false,
              email:'',
              pass:''
            },
            chekpass:'',
            errores:[],
            administrador:false,
        }    
    },
    created(){
          const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/users";
          axios.get(URLAPI)
               .then(response => response.data)
               .then(data =>{
                  this.users = data
                  console.log(this.users[0])
               })
               
               

    },
    methods:{
        logValidate(){
          this.user = this.users.find(user => user.email === this.usuario);
          if (this.user){
            if (this.user.pass===this.pass){
              /* Validacion OK */     
              this.logged=2
            }else{
              this.logged=3
            }
          }else{
            this.logged=3
          }
          console.log(this.user)
          this.usuario=''
          this.pass=''
        },
        regValidate() {
            if(this.user.nombre && this.user.tipo && this.user.email && this.user.pass){  
                if (this.user.pass===this.chekpass){
                    setTimeout(() => {
                      const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/users"
                      axios
                        .post(URLPOST, this.user)
                        .then((resp) => {
                              this.getUsers();
                              console.log(resp)
                            });
                      document.getElementById("userform").reset();
                      Object.assign(this.$data, this.$options.data());
                    }, 1000);
                    return true;
                  }else{
                    this.errores.push("Las contraseñas no son iguales");
                    return false;
                  }
            }
            if(!this.user.nombre){
                this.errores.push("Tu Nombre es necesario para el regustro");
            }
            if(!this.user.tipo){
                this.errores.push("Falta definir el tipo de Usuario");
            }
            if(!this.user.email){
                this.errores.push("Tu Correo es necesario")
            } 
            if(!this.user.pass){
                this.errores.push("La contraseña no puede esta vacia")
            } 
            setTimeout(() => {
                this.errores=[];
            }, 3000);
        },

        seguirOpcion(op){
            this.logged=op
        },
        getUsers(){
          const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/users";
          axios.get(URLAPI)
               .then(response => response.data)
               .then(data =>{
                  this.users = data
                  console.log(this.users[0])
               })
        }
       
        
    },
    computed: {
        showErrors() {
            let formErrores=this.errores.join(" <---> ");
            return formErrores;
        }
    }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
  #app {
    font-family: 'Roboto Mono', monospace;
    margin:0;
    padding: 0;
    background-color: rgb(235, 232, 232);;
        background-image: url("./assets/fondo.png");
        background-repeat: repeat;
  }

  .form-control:focus { 
    border-color: #28a745; 
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); 
  }

 .form-select:focus{
    border-color: #28a745; 
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);  
 }
  body{
        background-color: blanchedalmond;
    }
    .contenedor{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(235, 232, 232);;
        background-image: url("./assets/fondo.png");
        background-repeat: repeat;
    }
    .login-container{
        width: 400px;
        height: 600px;
        background-color: white;
        border: 1px solid rgb(196, 195, 195);
        padding: 30px;
        box-shadow: 5px 5px 10px #888888;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .login-header{
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .login-img{
      height: 85px;
      width: 250px; 
    }

    .registry-container{
        background-color: white;
        border: 1px solid rgb(196, 195, 195);
        padding: 30px;
        box-shadow: 5px 5px 10px #888888;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .registry-header{
      display:flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .registry-form{
      padding-left: 50px;
      padding-right: 50px;
    }
    .badlog-container{
      background-color: white;
        border: 1px solid rgb(196, 195, 195);
        padding: 30px;
        box-shadow: 5px 5px 10px #888888;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .badlog-icon{
      font-size: 106px;
      color: red;      
    }
    .badlog-text{
      text-align: center;
    }
</style>
