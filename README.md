# APP creada con react para challenge
<br/>
<br/>
<img src ='https://www.elenas.co/co/wp-content/uploads/2022/09/elenas.png'/>
<br/>
<br/>
<p align="justify"> Elenas Task Manager, es un proyecto individual desarrollado para una prueba tecnica de la empresa Elenas, los principales requerimiento estan basado en el proceso de login de un usuario el cual puede crear, editar, modificar y eliminar solo las taras relacionadas a su perfil, el diseño esta basado en algo simple, gestionando la tareas como una tarjetas independientes para comodida y mejor gestion del usuario.</p> 

<br/>
<br/>
<h1>Primeros pasos</h1>

por favor sigue las siguientes instrucciones para poder levantar los servicios del backend de manera correcta en un entorno local

**📑  Requerimientos**

Para poder poner a correr esta aplicación tendrás que tener instalado en tu ordenador con anterioridad la última versión de NPM y Node, puedes chequear en consola si la tienes instalada haciendo 

```
npm -v
```
ó también

``` 
node-v
```

Sino en el siguiente link puedes descargarla gratuitamente - <https://nodejs.org/es/download/> .

Luego, deberás ingresar a nuestro repositorio de elenas-frontend-react:
https://github.com/orimarselasirg/elenas-frontend-react

Copia el repositorio haciendo click en Fork, así obtendrás una copia del mismo en tu Github.

<br>
<br>
<h1>Para instalar 🛠 </h1>

Llegó el momento para ejecutar en tu equipo el proyecto.

Abre la terminal desde tu editor de codigo o desde un consola aparte dentro de la carpeta raiz y ejecuta los siguientes comandos.
```sh
   npm install
```

Con este comando descargar e instalara todas las dependencias que se utiliza en el proyecto de forma automática. El tiempo de este proceso depende de tu conexión a internet y del poder del procesamiento de tu equipo, ten paciencia, puede tardar unos minutos.

<br>
Después, necesitarás crear un archivo bajo el nombre ".env" (sin comillas) con la siguiente información:

```
REACT_APP_URL_=

```
en esa variable se debe colocar la url de conexion al backend, normalmente es http://localhost:8000, el puerto variar dependiendo de la configuración de puertos que el back haya definido
<br/>
<br/>


Luego, para iniciar la aplicación en tu navegador deberás ejecutar la siguiente línea de código en consola:

```
npm start
```

Este comando busca y ejecuta los scripts contenidos en el archivo que se denomina package.json, automáticamente desplegará la aplicación en su navegador predeterminado por el sistema en la dirección [http://localhost:3000](http://localhost:3000/) , este proceso puede demorar unos minutos.

Puedes realizar cambios en el código, y al ser guardados notarás que tu navegador se refrescará con los mismos.
<br>
<br>
<h1>Ahora a navegar 🏄</h1>
<br>
<br>
<h4>Incio</h4>
<br>
Al iniciar la aplicación, lo primero en encontrar sera la pantalla de login, en esta pantalla podra loguease si ya se ha registrado o podra registrarse
<h4>Registro de usuario</h4>
<br>
En esta pantalla, se podra crear o registrar un usuario para que pueda darle uso a la aplicacion, la creacion requerida de un nombre, un apellido, un nombre de usuario, un correo y una contraseña.

contiene dos botones, uno para registrar el cual devolvera un error en caso de que el usuario ya este en base de datos o el campo de correo no sea valido, y un boton de cancelar en caso de no querer rear un usuario

si el registro es exitoso, devolvera a la pantalla de login para el inicio de sesion, sino se mantendra en la pantalla de registro
<br>
<br>
<h4>Home</h4>
<br>
En esta pantalla se encontrara el listado de tareas que el usuario logueado tiene, el paginado mostrara maximo 4 tarjetas de tareas
<br>
<br>
En cada card tendra un titulo con la tarea, una descripción, y tres botones que permitira editar, cambiar el estado de una tarea de pendiente a completado o de completado a pediente, y un boton de eliminar
<br>
<br>
<h4>Barra de navegacion</h4>
<br>
En la barra de navegacion estara una barra de busqueda con su respectivo boton de buscar, el cual retornara todas las tareas que coincidan con el texto enviado.
Tambien cuenta con un boton de creacion de tareas y el boton al final para salir de la sesión el cual lo devolvera a la pantalla de login.
<br>
<br>
<h4>Edición de tarea</h4>
<br>
En esta pantalla podra modificar el nombre de la tarea y la descripción, tiene un boton de guardado y uno de cancelar, en los dos casos, regresa a la pantalla de Home
<h4>Creación de tarea</h4>
En esta pantalla se podra crear tareas, el cual requerira de un titulo para la tarea y una descripción, estos campos son obligatorios
<br>
<br>
<h1>Tecnologías utilizadas 👨‍💻</h1>
<br>
Para el desarrollo de esta apliación se utilizarón las siguientes tecnologias

- React
- Javascript
- Node
- Redux Toolkit
- Css
- Bulma

<br/>
<br/>
Cualquier duda, por favor no dudes en comunicarte conmigo. Saludos
