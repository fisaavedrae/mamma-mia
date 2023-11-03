# Descripción
La pizzería italiana Mamma Mia! SPA le solicita realizar su aplicación web para mostrar y vender sus pizzas. Esta app deberá mostrar los distintos tipos de pizzas y sus ingredientes a
través de una archivo JSON que estará a tu disposición en el material de apoyo y en donde encontrarás un arreglo de objetos correspondientes a cada tipo de pizza con su nombre,
ingredientes, imagen, descripción, ID y precio.

La aplicación debe incluir un carrito y una vista de detalle por cada pizza seleccionada en el catálogo ubicado en la vista principal.

Para la estética de esta aplicación contará con algunas imágenes de referencia, sin embargo, el diseño quedará a su criterio siempre y cuando cumpla con los requerimientos.


# Requerimientos
1. Crear vistas y componentes para desarrollar las interfaces de las siguientes rutas:
a. /Home: Mostrar el catálogo de pizzas.
b. /pizza/:id: Mostrar el detalle de una pizza seleccionada en el catálogo.
c. /carrito: Mostrar las pizzas añadidas al carrito con sus precios y total a pagar.
(3 puntos)

2. Usar React Router como gestor de rutas de la aplicación.
(3 puntos)

3. Manejar el estado global de la aplicación con Context API.
(4 puntos)

4. Crear la lógica en el carrito para incrementar y decrementar la cantidad de pizzas a
comprar.
(Opcional)

5. Calcular el total de la compra y mostrarlo en los componentes que correspondan
según las imágenes de referencia.
(Opcional)

# Solución

El desarrollo de la app lo hice usando Tailwind como framework css usando las vistas que trae como ejemplo para el PLP, PDP, Cart y Checkout.

* Para el checkout no usé un formulario para la información de pago y despacho, solo muestro un mensaje de finalización de la orden.


- [repo](https://github.com/fisaavedrae/mamma-mia) 
- [live app](https://mamma-mia-delta.vercel.app/) 
