<template>
  <div class="card col-md-8 mb-5" >
    <div class="card-header">
        Usuarios
    </div>
    <div class="card-body table-responsive ">
        <table class="table align-middle table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">e-mail</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, i) of users" :key="i">
                    <th scope="row">{{user.id}}</th>
                    <td><img class="avatar" :src="user.avatar" alt=""></td>
                    <td>{{user.nombre}}</td>
                    <td>{{user.email}}</td>
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
                users:Object,
            }    
        },
        created(){
            const URLAPIUSER="https://639e8f4e3542a261305d989b.mockapi.io/users";
            axios.get(URLAPIUSER)
                .then(response => response.data)
                .then(data =>{
                    this.users = data
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