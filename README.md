# Prueba Técnica - Gestión de Órdenes de Carga

Esta aplicación es una prueba técnica diseñada para demostrar habilidades en el desarrollo frontend, enfocándome en la implementación de una interfaz dinámica para la gestión de órdenes de carga. Aunque el contexto no fue implementado, se dejó preparado como un posible feature adicional.

## Características Implementadas

### 1. Visualización de órdenes
- Se muestra un listado de órdenes actuales y próximas, dividido en secciones de **"Current Orders"** y **"Upcoming Orders"** para mayor claridad.
- Cada orden tiene un diseño limpio y funcional que incluye información clave como:
  - Número de orden
  - Tipo de carga
  - Puntos de recolección y entrega
  - Estado actual
  - Tiempo restante para pickup

### 2. Búsqueda dinámica
- Implementación de un buscador por número de orden.
- Permite a los usuarios filtrar órdenes actuales y próximas en tiempo real.
- Si no se encuentra ninguna coincidencia, muestra un mensaje claro al usuario.

### 3. Detalle de órdenes
- Al hacer clic en una orden, se redirige a una página de detalles donde se muestra información extendida sobre la misma.
- Incluye un componente visual para el progreso de la orden basado en su estado.
- Los detalles abarcan:
  - Proceso de estados (con estilos interactivos para cada estado activo/inactivo).
  - Información detallada de recolección y entrega.

### 4. Redireccionamiento
- Botones funcionales que permiten navegar entre la lista de órdenes y la página de detalles de cada orden.

### 5. Estado y manejo de datos
- La información se obtiene de dos endpoints principales (**orders** y **upcoming orders**), normalizando los datos para su uso en componentes.
- Uso de hooks personalizados (`useOrders`) para manejar las solicitudes a las APIs y centralizar la lógica.

## Observaciones

Se identificaron algunos puntos en los endpoints que podrían estar diseñados así por tratarse de una prueba técnica:

- **Incongruencias en los datos**: Algunos datos esperados en el diseño no están presentes en los endpoints ofrecidos, lo que obliga a manejar valores predeterminados o placeholders.
- **Endpoint incompleto**: El endpoint más completo es **orders**. En contraste, **upcoming orders** no incluye información adicional como detalles del conductor o rutas completas, lo cual limita la funcionalidad en algunos componentes.

**Las observaciones son para enriquecer la prueba**

## Posibles mejoras y features futuros

1. **Context API (OrdersContext)**:
   - Preparado como una mejora futura para optimizar la gestión del estado global de órdenes.
   - Reducir las peticiones a la API mediante el almacenamiento temporal de datos ya cargados.

2. **Paginación**:
   - Se podría implementar para manejar grandes volúmenes de datos.

3. **Optimización de rendimiento**:
   - Uso de librerías como **React Query** o **SWR** para la gestión de datos asincrónicos.
   - Memoización de componentes críticos para evitar renders innecesarios.

4. **Testeo**:
   - Implementación de tests unitarios y de integración para asegurar el correcto funcionamiento.

## Tecnologías Utilizadas
- **React.js**: Framework principal para el desarrollo de la interfaz.
- **React Router**: Para el manejo de rutas y navegación entre páginas.
- **Tailwind CSS**: Para estilos rápidos y modulares.
- **JavaScript moderno**: Uso de ES6+ para mantener el código limpio y mantenible.
- **PropTypes**: Validación de las propiedades de los componentes.
