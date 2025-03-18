// Declaramos un arreglo para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 * Captura el valor del input, valida que no esté vacío, lo añade al array y actualiza la lista en pantalla.
 */
function agregarAmigo() {
    // Capturamos el elemento de entrada
    const input = document.getElementById("amigo");
    // Obtenemos y limpiamos el valor (eliminamos espacios en blanco al inicio y final)
    const nombre = input.value.trim();
    
    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Añadimos el nombre al arreglo
    amigos.push(nombre);
    
    // Limpiamos el campo de entrada
    input.value = "";
    
    // Actualizamos la lista visible en la página
    actualizarLista();
}

/**
 * Función que recorre el arreglo "amigos" y muestra cada nombre como un elemento <li>
 * dentro de la lista con id "listaAmigos".
 */
function actualizarLista() {
    // Seleccionamos la lista HTML donde se mostrarán los nombres
    const lista = document.getElementById("listaAmigos");
    // Limpiamos la lista para evitar duplicados
    lista.innerHTML = "";
    
    // Iteramos sobre el arreglo de amigos y creamos un <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

/**
 * Función para sortear aleatoriamente un amigo.
 * Verifica que el arreglo no esté vacío, genera un índice aleatorio y muestra el resultado.
 */
function sortearAmigo() {
    // Verificar si hay amigos en el arreglo
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre correspondiente al índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}