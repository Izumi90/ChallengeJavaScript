// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Botones
// Agregar amigos
function agregarAmigo() {
    // Variable amigos
    let nombreIngresado = document.getElementById('amigo').value.trim();

    // Excepción caracteres especiales
    if (nombreIngresado.match(/[!@#$%^&*(),.?":{}|<>?_-]/)) {
        alert('Un nombre no puede tener caracteres especiales');
        clearNombre();
        return false;
    }

    // Excepción números
    if (nombreIngresado.match(/\d/)) {
        alert('Un nombre no puede contener un número');
        clearNombre();
        return false;
    }

    // Nombre vacío
    if (nombreIngresado === '') {
        alert('Escribe un nombre.');
        return;
    } else {
        // No repetir nombres
        if (amigos.includes(nombreIngresado)) {
            alert('Ingrese un nuevo nombre');
        } else {
            amigos.push(nombreIngresado);
            CrearLi(nombreIngresado);
        }
    }
    clearNombre();
}

// Limpiar input
function clearNombre() {
    let valorInput = document.querySelector('#amigo');
    valorInput.value = '';
}

// Crear lista de amigos
function CrearLi(nombre) {
    let nuevoLi = document.createElement('li');
    nuevoLi.textContent = nombre;
    document.querySelector('#listaAmigos').appendChild(nuevoLi);
}

// Randomizar amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres ingresados, no se puede realizar el sorteo');
        return false;
    } else {
        let amigoRandom = Math.floor(Math.random() * amigos.length);
        let amigoSelect = amigos[amigoRandom];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>El amigo secreto es: ${amigoSelect}</li>`;
    }
}