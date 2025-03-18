# Challenge-Amigo-Secreto

Este proyecto es una aplicación web interactiva diseñada para que los usuarios puedan ingresar nombres de amigos y, a partir de esa lista, realizar un sorteo aleatorio para determinar quién será el **"amigo secreto"**. La idea surgió como un desafío para practicar conceptos básicos de JavaScript, manejo del DOM y estilos con CSS, ¡y quedé muy contento con el resultado!

## Características del Proyecto

- **Ingreso de Nombres:**  
  Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a la lista haciendo clic en el botón **"Añadir"**.

- **Validación de Entrada:**  
  Se verifica que el usuario no intente agregar un nombre vacío. En caso de omitirlo, se muestra una alerta que solicita ingresar un nombre válido.

- **Visualización en Tiempo Real:**  
  Cada nombre ingresado se despliega en una lista visible en la página, permitiendo ver todos los nombres acumulados.

- **Sorteo Aleatorio:**  
  Con un solo clic en el botón **"Sortear Amigo"**, se selecciona al azar uno de los nombres de la lista y se muestra el resultado en pantalla.

- **Interfaz Amigable y Moderna:**  
  Se utilizó HTML5, CSS3 y JavaScript para crear una interfaz limpia, responsiva y fácil de usar.

## Estructura del Proyecto

El proyecto se compone de tres archivos principales:

- **index.html:**  
  Contiene la estructura básica de la aplicación, con secciones definidas para el banner, el área de entrada de nombres y la visualización del resultado del sorteo.

- **style.css:**  
  Define el diseño visual del proyecto. Se emplean variables CSS para manejar la paleta de colores, tipografías y estilos de botones, listas y contenedores.

- **app.js:**  
  Es el motor de la aplicación. Aquí se implementan las funcionalidades para:
  - Capturar y validar la entrada del usuario.
  - Agregar los nombres ingresados a un arreglo.
  - Actualizar dinámicamente la lista de amigos en la página.
  - Realizar el sorteo aleatorio utilizando `Math.random()` y `Math.floor()`, y mostrar el resultado.

## Desarrollo del Proyecto

1. **Planificación y Estructuración:**  
   Se comenzó definiendo la estructura del HTML, dividiendo el contenido en secciones claramente diferenciadas: banner, formulario de ingreso y área de resultados.

2. **Diseño y Estilizado:**  
   Con `style.css` se estableció una identidad visual utilizando variables para los colores y fuentes. Se aplicaron estilos modernos a botones, listas y contenedores para garantizar una experiencia de usuario agradable y clara.

3. **Implementación de la Lógica en JavaScript:**  
   Se creó un arreglo llamado `amigos` para almacenar los nombres. Se desarrollaron las siguientes funciones:
   - **agregarAmigo():**  
     Captura el nombre del campo de entrada, valida que no esté vacío, lo añade al arreglo y actualiza la lista visual.
   - **actualizarLista():**  
     Recorre el arreglo y muestra cada nombre en la lista de la interfaz, asegurándose de que no haya duplicados.
   - **sortearAmigo():**  
     Verifica que el arreglo contenga al menos un nombre, genera un índice aleatorio y muestra el resultado del sorteo.

4. **Validaciones y Feedback:**  
   Se incorporaron validaciones para evitar entradas vacías y para manejar el caso en el que se intente realizar el sorteo sin haber ingresado ningún nombre, proporcionando retroalimentación inmediata mediante alertas.

## Cómo Usar la Aplicación

1. **Abrir el Proyecto:**  
   Abre el archivo `index.html` en tu navegador favorito.

2. **Agregar Nombres:**  
   Escribe el nombre de un amigo en el campo de texto y presiona el botón **"Añadir"**. Verás cómo cada nombre se añade a la lista.

3. **Realizar el Sorteo:**  
   Una vez que hayas ingresado todos los nombres, haz clic en el botón **"Sortear Amigo"**. El sistema seleccionará al azar uno de los nombres y lo mostrará en pantalla como el amigo secreto.

## Conclusión

Este proyecto es un ejercicio sencillo pero muy útil para comprender cómo interactuar con el DOM usando JavaScript, validar entradas de usuario y aplicar estilos modernos con CSS. Además, puede servir como base para agregar funcionalidades adicionales en el futuro, como eliminar nombres o animar el sorteo.

¡Espero que disfrutes trabajando en este proyecto tanto como yo disfruté desarrollándolo! Y recuerda, el sorteo es completamente aleatorio... ¡así que nadie se puede quejar del resultado!