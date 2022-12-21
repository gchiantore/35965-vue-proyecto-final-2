# proyecto-final-2
Al ejecutar en proyecto aparacera una ventana de logIn, la cual permite ingresar al sistema en modo cliente o administrador. Si no tenemos cuenta de Usuario, mediante un link nos permite crearnos una para despues poder loguearnos. 

Hay usuarios pre cargados los mismos son :
```
usuario: adm@example.net pass: 1234 para el Adminsitrador
```
```
usuario: cliente@example.com pass: 1234 para el CLiente 
```

Dependiendo del tipo de usuario se nos modifica la barra de navegacion y las opciones que podemos usar, 

el cliente solo puede ver la lista de productos para agregarlos al carrito y el carrito para ver los productos que va eligiendo 

El Administrador puede ver todos los usuarios, los carritos confirmados, un dashboard con informacion util, y los productos, a los cuales los puede eliminar, editar o crear nuevos. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
