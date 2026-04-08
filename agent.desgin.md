# Contexto y Rol
Actúa como un Diseñador UI/UX y Desarrollador Frontend Senior. Quiero crear una landing page ultra-moderna, con un diseño minimalista de alto rendimiento y una atención obsesiva al detalle.

# Sistema de Diseño y Estilos (Guía Estricta)

## 1. Paleta de Colores (Dark Mode Premium)
* **Fondo Principal:** Negro profundo (`#000000`) o gris carbón (`#09090B`).
* **Fondos de Superficie (Tarjetas/Contenedores):** Ligeramente más claros que el fondo (ej. `#111111` o usando un fondo con opacidad rgba y efecto backdrop-blur muy sutil).
* **Color de Acento Principal:** `#ea1889` (un magenta/rosa vibrante).
* **Texto Principal:** Blanco puro (`#FFFFFF`) o casi blanco (`#FAFAFA`) para los títulos.
* **Texto Secundario:** Gris claro/mutado (`#A1A1AA` o similar) para los párrafos y descripciones.

## 2. Tipografía
* Utiliza una fuente sans-serif moderna, limpia y geométrica (ej. Inter, Geist, o Roboto).
* **Jerarquía clara:** Títulos con buen peso (Semibold/Bold) y tracking ajustado. Descripciones legibles y con buen interlineado.
* Usa fuentes monoespaciadas solo si hay snippets de código o etiquetas técnicas.

## 3. Estructura y Componentes (Flexible y Modular)

* La estructura general debe ser limpia, moderna y bien espaciada, priorizando claridad visual y jerarquía.
* Utiliza una combinación de layouts según convenga: secciones full-width, grids, split layouts (texto + imagen), y bloques centrados.
* El estilo **Bento Box (cards en grid)** puede utilizarse cuando aporte valor visual o ayude a organizar features, pero **NO debe ser el patrón dominante en toda la página**.
* Alterna entre distintos tipos de secciones para generar ritmo visual y evitar monotonía.

### Uso de Cards (cuando aplique)
* Tarjetas con bordes redondeados (`rounded-xl` o `rounded-2xl`).
* Bordes sutiles (`border border-white/10`).
* Fondos ligeramente elevados respecto al fondo principal.
* Hover effects suaves (glow, elevación, etc).

### Variación de secciones (muy importante)
Incluye variedad como:
* Hero section impactante (con CTA claro)
* Secciones de features (pueden usar Bento si aplica)
* Bloques de contenido más editoriales (texto + imagen)
* Secciones minimalistas con mucho aire (espaciado)
* Call to Action finales bien destacados

## 4. Efectos Visuales (El detalle "Killer")
* **Glow/Resplandor:** Los iconos y elementos gráficos clave dentro de las tarjetas deben tener un brillo o resplandor detrás de ellos utilizando el color de acento `#ea1889`. Logra esto con gradientes radiales difuminados (`blur`) en el fondo del icono para crear un efecto de "luz de neón" en un entorno oscuro.
* Los iconos deben ser minimalistas, de trazo fino, o elementos de interfaz abstractos que reflejen tecnología avanzada.

## 5. Secciones de Datos y Comparación (Benchmark Visual)

* Incluye secciones orientadas a demostrar superioridad del producto mediante datos claros.
* Utiliza visualizaciones simples pero impactantes (ej. barras horizontales comparativas).
* Evita tablas tradicionales: prioriza gráficos minimalistas integrados al diseño.

### Estilo visual
* El elemento principal (producto) debe destacarse claramente:
  - Color de acento (#ea1889)
  - Glow o resplandor
  - Mayor contraste
* Los competidores deben verse atenuados:
  - Colores grises o baja opacidad
  - Menor protagonismo visual

### Composición
* Título grande y dominante que comunique liderazgo
* Visualización centrada o ligeramente desplazada
* Uso de gradientes y blur para guiar la atención
* Fondo con textura sutil (noise, grid o patrones abstractos)

### Objetivo UX
* El usuario debe entender en menos de 2 segundos quién es el mejor
* Generar percepción de autoridad y confianza sin sobrecargar de datos

## 6. Integración con GitHub y Open Source

* La landing debe reflejar que el producto es un proyecto activo en GitHub.
* Incluir una o más secciones dedicadas a mostrar información del repositorio.

### Contenido sugerido
* Cantidad de estrellas (stars)
* Forks
* Issues abiertas
* Últimos commits o actividad reciente

### Call To Actions (muy importante)
* Botón claro: “Star on GitHub”
* Botón: “Contribute”
* Botón: “View Repository”

### Estilo visual
* Puede utilizar cards o bloques tipo dashboard liviano
* Íconos sutiles (stars, forks, commits)
* Mantener estética minimalista y consistente con el dark mode

### UX
* El usuario debe poder entender rápidamente que:
  - El proyecto está activo
  - Tiene comunidad
  - Puede participar fácilmente

## 7. Sección de Colaboración

* Incluir una sección clara que invite a colaborar con el proyecto.

### Contenido
* Mensaje tipo:
  - “Built in public”
  - “Open for contributions”
* Explicar brevemente cómo contribuir (muy resumido)

### Acciones
* Botón: “Open Issues”
* Botón: “Submit PR”
* Botón: “Join the Community”

### Diseño
* Puede ser una sección más minimalista, con mucho espacio
* Enfatizar claridad sobre complejidad

## 8. Animaciones y Microinteracciones (Nivel Premium)

* Toda la interfaz debe tener animaciones suaves, modernas y de alto nivel.

### Tipos de animaciones
* Fade-in progresivo al hacer scroll (scroll reveal)
* Slight parallax en fondos o elementos decorativos
* Hover con elevación + glow sutil
* Transiciones fluidas entre estados

### Timing
* Animaciones rápidas pero suaves (200ms–400ms)
* Usar easing moderno (ease-out, cubic-bezier)

### Principio clave
* Las animaciones deben sentirse naturales y no distraer
* Deben mejorar la percepción de calidad del producto


## 9. Sombras y Efectos de Profundidad

* Utilizar sombras modernas y efectos de desvanecimiento para dar profundidad.

### Cards y contenedores
* Sombras suaves y difusas (no duras)
* Evitar sombras tradicionales pesadas

### Efecto clave (muy importante)
* En algunas cards o secciones, agregar un “fade shadow” inferior:
  - La sombra debe comenzar debajo del componente
  - Desvanecerse progresivamente hacia abajo
  - Puede lograrse con gradientes (no solo box-shadow)

### Glow
* Integrar glow sutil con el color de acento (#ea1889)
* Especialmente en:
  - Elementos activos
  - Hover states
  - Componentes destacados

### Resultado esperado
* Sensación de profundidad, suavidad y diseño premium

# Objetivo Final
El resultado debe verse como una plataforma de alto nivel: sofisticada, rápida, oscura y elegante, utilizando las tonalidades del `#ea1889` para guiar la vista hacia los puntos clave.