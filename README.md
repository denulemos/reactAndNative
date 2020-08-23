# React Native

Estos apuntes estan basados en el siguiente curso de udemy: https://www.udemy.com/course/introduccion-a-react-native-con-react-navigation-y-axios/ .

**¿Que es React Native y como funciona?**

Es una tecnologia desarollada por Facebook con mucha comunidad detras de la misma.

* Un codigo fuente puede exportar a iOS y Android.
* Componentes React (JS) -> JS Core (Interpreta el codigo) -> React Native Bridges (Uno distinto para android, iOS y Otros, traduce a codigo nativo) -> Artefacto de cada plataforma.
* WebApp => Incrusta un webview con su codigo HTML y CSS. Se busca la misma fluidez que con una aplicacion 100% nativa. Se podrian mejorar las animaciones a futuro.
* Si utilizamos Windows, SOLO podremos exportar para android, aunque el codigo sirve para importar en iOS. Igual con Linux. Esto se podria solucionar con una VM.

**¿Porque usar React Native?**

* El lenguaje es JS.
* Hay buen soporte ante cualquier eventualidad.
* Hay releases del Core de RN muy seguido.

### Instalacion

**¿Que necesitamos?**

* Node y NPM.
* En mac, se necesita xCode y Homebrew tambien.
* npm install -g react-native-cli
* Creamos el proyecto con =>  react-native init nombreProyecto
* Ejecutamos el host con => react-native start
* Emular Android (con dispositivo o emulador corriendo) => npx react-native run-android
* Emular iOS (Solo mac) => npx react-native run-ios

## Estructura Proyecto

* Carpeta android e iOS son especificas por cada plataforma, con su codigo correspondiente.
* App.js => Componente basico de la aplicacion.
* App.json => Nombre de proyecto y nombre a mostrar del proyecto (No cambiar por tema de referencias).
* index.js => Punto de entrada de la aplicacion, importa App.js.

### Metro Bundler

* Todos los cambios hechos en el codigo fuente se van a reflejar en el codigo sin necesidad de recompilar (en caso iOS, en plena emulacion si deseamos).
* En iOS podemos ir a un menu de dev que posee las siguientes opciones:
* Reload: Vuelve a leer archivos JS.
* Live Reload: Recarga en cada cambio.
* Debug: Debug desde Chrome
* Systrace: Debugging.
* Hot Reloading.

### Componente - Ciclo de vida

*
