# TripleTen web_project_expenses_es

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web de gestión de gastos personales. La aplicación permite a los usuarios establecer un presupuesto, registrar gastos por categorías, visualizar estadísticas detalladas en tiempo real y gestionar sus finanzas de manera intuitiva. Incluye persistencia de datos mediante localStorage, cálculos automáticos de balance y visualización de categorías con mayor gasto.

---

## Tecnologías Utilizadas

### HTML

| Aspecto | Descripción |
|--------|-------------|
| Estructura semántica | Uso de etiquetas HTML5 para secciones, encabezados y listas. |
| Plantillas dinámicas | Implementación de `<template>` para la generación de elementos de gastos. |
| Formularios modales | Formulario para agregar nuevos gastos con selección de categoría y monto. |
| Diseño responsive | Estructura adaptable mediante grid layout y media queries. |
| Inputs especializados | Campos de tipo `number` con validación nativa para montos. |
| Selectores | Menú desplegable para categorías predefinidas de gastos. |

---

### CSS (Metodología BEM)

| Aspecto | Descripción |
|--------|-------------|
| Arquitectura BEM | Estructura modular basada en bloques, elementos y modificadores. |
| Sistema de grid | Layout principal con `grid-template-columns` para secciones responsivas. |
| Diseño responsive | Media queries para adaptación a tabletas, móviles y escritorio. |
| Componentes reutilizables | Botones, tarjetas de estadísticas, modal y elementos de lista. |
| Estados interactivos | Estilos `:hover`, `:active` y `:focus` para feedback visual. |
| Sistema de color | Paleta coherente con estados semánticos (positivo, advertencia, negativo). |
| Tipografía escalable | Fuentes Montserrat y Manrope con pesos variables. |

---

### JavaScript (ES6, DOM y localStorage)

| Aspecto | Descripción |
|--------|-------------|
| Persistencia de datos | Uso de `localStorage` para guardar presupuesto y lista de gastos. |
| Cálculos financieros | Funciones para totales, promedios, balance y estadísticas por categoría. |
| Manipulación del DOM | Renderizado dinámico de lista de gastos y actualización de estadísticas. |
| Gestión de eventos | Event listeners para botones, formularios y elementos interactivos. |
| Validación de formularios | Validación básica para entradas de gastos y presupuesto. |
| Clonación de plantillas | Uso de `template.content.cloneNode()` para elementos repetitivos. |
| Gestión de estado | Variables globales sincronizadas con UI y almacenamiento local. |
| Sistema de categorías | Mapeo entre valores internos y nombres mostrados al usuario. |

---

## Funcionalidad Global del Proyecto

### 1. **Gestión de Presupuesto**
- Establecer un presupuesto inicial mediante campo de entrada.
- Visualización del presupuesto como placeholder después de asignarlo.

### 2. **Registro de Gastos**
- Agregar gastos mediante modal con categoría (Comida, Transporte, Hogar, etc.) y monto.
- Lista dinámica de gastos con botón de eliminación individual.
- Persistencia automática en localStorage.

### 3. **Estadísticas en Tiempo Real**
- **Estadísticas generales:** Gastos totales, gasto promedio y saldo actual.
- **Balance visual:** Color dinámico (rojo/naranja/verde) según relación saldo-presupuesto.
- **Categoría más grande:** Identificación automática de categoría con mayor gasto.
- **Desglose por categoría:** Total acumulado por cada categoría de gasto.

### 4. **Gestión de Datos**
- **Persistencia:** Datos sobreviven a recarga de página mediante localStorage.
- **Restablecimiento:** Botón "Borrar todo" para reiniciar presupuesto y gastos.
- **Datos iniciales:** Conjunto de gastos de ejemplo precargados.

### 5. **Interfaz Responsiva**
- Adaptación completa a dispositivos móviles, tabletas y escritorio.
- Reorganización de grid layout según tamaño de pantalla.
- Optimización de espaciado y tipografía para mejor legibilidad.

### 6. **Experiencia de Usuario**
- Modal de agregar gastos con cierre por botón o clic externo.
- Feedback visual en botones (hover, active).
- Formato de montos con dos decimales para consistencia.
- Nombres de categorías traducidos al español.

---

## Estructura de Archivos


web_project_expenses_es-main/
├── index.html                 # Página principal
├── pages/
│   └── index.css             # CSS principal (importa todos los bloques)
├── blocks/                    # Estilos BEM modularizados
│   ├── page.css
│   ├── content.css
│   ├── header.css
│   ├── budget.css
│   ├── stats.css
│   ├── expenses.css
│   ├── expense.css
│   ├── controls.css
│   ├── modal.css
│   ├── button.css
│   └── footer.css
├── scripts/                   # Lógica JavaScript
│   ├── calculations.js       # Funciones de cálculo matemático
│   ├── handle-html.js        # Manipulación DOM y event listeners
│   └── index.js              # Inicialización y localStorage
├── vendor/                   # Recursos externos
│   ├── normalize.css        # Reset CSS
│   └── fonts/              # Fuentes tipográficas
└── images/                  # Íconos y assets visuales
