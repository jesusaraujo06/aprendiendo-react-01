/**
 * En la parte superior siempre debemos importar:
   librerias, imagenes de todo tipo, estilos css, etc.

 * Esto es posible porque todo lo que escribamos aqui pasa
   por un empaquetador, que en este caso es: "esbuild", asi que,
   el por detras se encarga de importarlo y ademas de aplicar todas
   las optimizaciones necesarias a los archivos.
 */
import ReactDOM from 'react-dom';
import './index.css';

/**
 * Lo primero que tenemos que definir es que es lo que queremos renderizar
 * La sintaxis JSX es una combinación de HTML + Javascript y se escribe sin agruparlo en comillas.
 */
const app = <h1>Yisus Prime</h1>;
console.log(app);
/**
 * Seleccionamos el nodo raiz de nuestra app
 */
const container = document.getElementById('root');

/**
 * Ahora solo renderizamos la app en el container.
 * Con la ayuda del metodo render() de la libreria react-dom
 */

ReactDOM.render(app, container);
