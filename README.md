# ChallengeJavaScript
Creación de una lista de amigos y su selección por aleatorización 

# Amigo Secreto

Este proyecto es una aplicación web simple para gestionar una lista de amigos y realizar un sorteo de "Amigo Secreto".

## Descripción

La aplicación permite a los usuarios agregar nombres a una lista de amigos, verificar que los nombres no contengan caracteres especiales o números, y realizar un sorteo aleatorio para seleccionar un "Amigo Secreto" de la lista.

## Funcionalidades

- Agregar amigos: Permite agregar nombres a la lista de amigos.
- Validación de nombres: Verifica que los nombres no contengan caracteres especiales o números y que no estén vacíos.
- Evitar nombres duplicados: Asegura que no se agreguen nombres duplicados a la lista.
- Limpiar campo de entrada: Limpia el campo de entrada después de agregar un nombre.
- Mostrar lista de amigos: Actualiza y muestra la lista de amigos en el HTML.
- Sorteo de Amigo Secreto: Realiza un sorteo aleatorio para seleccionar un "Amigo Secreto" de la lista.

## Uso

1. Agregar un amigo:
   - Ingresa un nombre en el campo de entrada.
   - Haz clic en el botón "Agregar Amigo".
   - El nombre se agregará a la lista si es válido.

2. Realizar el sorteo:
   - Haz clic en el botón "Sortear Amigo".
   - Se seleccionará un amigo aleatorio de la lista y se mostrará en la página.

## Código

### Variables y Funciones

- `amigos`: Array para almacenar los nombres de los amigos.
- `agregarAmigo`: Función para agregar un nuevo amigo a la lista.
- `clearNombre`: Función para limpiar el campo de entrada.
- `CrearLi`: Función para crear y agregar un nuevo elemento `<li>` a la lista de amigos en el HTML.
- `sortearAmigo`: Función para realizar el sorteo de "Amigo Secreto".
