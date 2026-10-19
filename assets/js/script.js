// "document" es la página que el navegador acaba de leer. Buscamos el botón
// que tiene id="consola", escrito en index.html, y guardamos ese botón en una cajita.
const imp_cons=document.getElementById("consola")

// También buscamos la parte principal de la página, que tiene id="cuerpo".
// La guardamos por si luego queremos cambiar algo de esa parte desde JavaScript.
const cuerpo=document.getElementById("cuerpo")


// Le decimos al botón: "cuando alguien haga clic, ejecuta lo que está entre las llaves".
imp_cons.addEventListener('click',()=>{
    // Escribe el botón en la consola del navegador, una zona para ver mensajes de prueba.
    // Podemos cambiar esto para mostrar otro mensaje o hacer que la página reaccione.
    console.log(imp_cons)
} )