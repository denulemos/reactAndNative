# PostApp 🚀️ 

### Tipos de autenticaciones 👀️ 

**Email / password:** Se ingresa correo y contraseña de un modo cifrado, Backend chequea si el usuario existe y manda una respuesta en consecuencia. Es la mas comun de todas.

**OAuth:** Se verifica la identidad con librerias de terceros (Facebook, Google, etc..) , todo esto mediante un token hecho por la misma libreria.

**OTP**: El usuario da un numero de telefono, complementa la autenticacion en 2 pasos (2FA: Comprueba que el usuario exista mediante un elemento que solo el usuario puede tener).

### Flujo de Login 👀️ 

1. Usuarios ingresan sus datos.
2. Se cifran datos capturados.
3. Se envian datos.
4. Se verifica el registro.
5. Se genera un token.
6. Se envia el token.
7. Se guarda el token.

### Flujo de 2FA 👀️ 

1. Teclear datos.
2. Enviar registro.
3. Comprobar que sea nuevo el registro.
4. Generar codigo para que sea enviado al celular o a donde sea.
5. Enviar codigo.
6. Teclear codigo.
7. Devolver codigo.
8. Verificar codigo.
9. Crear registro.

### Google Cloud Functions 👀️ 

Se usan para no montar un servidor como tal para manejar cosas como login, etc..

* **No hay procesos eternos:** No se esta ejecutando constantemente como en un servidor NodeJS. Solo se ejecutan cuando son llamadas.
* **No estan instanciados en un servidor:** No estan almacenadas como en AWS.
* **No pertenecen a un backend completo:** Son simplemente funciones.
* **Las acciones son solo funciones:** Podemos tener las funciones disponibles en cualquier lado.
* **Sin metodo de ruteo:** No hay ruteos complejos. El mismo servicio proporciona las rutas especificas.
* **Cada funcion cumple un solo proposito:** Todo tiene una sola orden, una sola funcion, no es multitarea.

### Configuracion Firebase / Google Functions🚀️

**Se necesita tener plan Blaze en Firebase (Pago por uso) para que esto se pueda hacer!!! 😕 **

1. Crear una cuenta en **Firebase**.
2. Crear nuevo proyecto en Firebase.
3. Instalar dependencias necesarias:` npm i -g firebase-tools.`
4. Iniciar una Firebase functions.
5. Creamos una carpeta para las funciones Firebase. (/posts)
6. Hacemos `firebase login`. Nos logeamos con nuestra cuenta de Google.
7. Una vez logeados, hacemos `firebase init` para configurar el proyecto. Seteamos Functions, con el proyecto ya existente. Las funciones seran escritas con JS, en este caso, aunque tambien podemos seleccionar Typescript.
8. El paso anterior nos habra generado un firebase.json, y un directorio de functions, donde estara todo lo necesario. (/posts/functions). Dentro de functions poseemos una carpeta node_modules, podemos instalar dependencias. En index.js vamos a tener las funciones para exportar, hay un ejemplo comentado.
9. Para que las funciones esten en Firebase, deben ser **deployadas**. Para eso nos paramos en la carpeta functions y hacemos un `firebase deploy`
10. Es necesario crear una carpeta "config" dentro de "functions" donde este la clave privada generada por firebase!.

**Configuracion**

* Auth Sign-in Method: Correo y Contraseña.
