Se requiere realizar una aplicación para administrar una lista de contadores.

Un contador es un componente con un nombre y un número, que representa el valor del contador,
un contador puede aumentar o disminuir su valor utilizando 2 botones; uno para sumar 1 al
contador y otro para restar 1 al contador. además de un botón para eliminar el contador
permanentemente.
En la aplicación debe existir un botón para agregar contadores al listado. Este botón debe desplegar
un modal/popup/diálogo donde se solicite el nombre del contador + un botón para confirmar
agregar el contador a la lista y un botón para cancelar la acción de agregar contador.
Es necesario poder ordenar los contadores creados en la lista, por Nombre del Contador de forma
ascendente o descendente o por el Valor actual del contador de forma ascendente o descendente
Debe existir una opción de filtro donde se puedan desplegar en la lista sólo los contadores mayores
a x número o menores a x número, además de una forma de borrar los filtros aplicados
Por ultimo, debe existir un footer donde se despliegue la suma de todos los contadores creados en
la aplicación, independiente de los filtros aplicados

Consideraciones del requerimiento
• No se pueden crear mas de 20 contadores
• Al iniciar la aplicación la primera vez, la lista de contadores debe estar vacía
• Ningún contador puede ser menor a 0
• Ningún contador puede ser mayor a 20
• Deshabilitar el botón de agregar contadores cuando se llegue al tope máximo de contadores
• Un contador no puede tener un nombre vacío
• Habilitar el botón agregar contadores si la condición anterior no se cumple
• Si la lista de contadores esta vacía, ofrecer la opción de crear un nuevo contador
• El nombre del contador no puede tener mas de 20 caracteres
• Utilizar localStorage en conjunto con el State para guardar los contadores creados
• Utilizar sessionStorage en conjunto con el State para dejar guardadas las preferencias de los
filtros aplicados
