//?TODO: Crear carpeta services
//!Atentos en donde se crea la capeta services
//? Usar comando 'npm install axios' y posteriormente lo importamos
//? dentro del archivo http.js creado dentro de la capeta services
import axios from "axios";
//? El endpoint hace referencia a la ruta en la que vamos a trabajar
//? usando larabel en el backend
const endpoint = "http://localhost:8000/api";
//* exportamos los servicios que vamos a utlizar en los componentes que se vayan creando
export { endpoint, axios };
