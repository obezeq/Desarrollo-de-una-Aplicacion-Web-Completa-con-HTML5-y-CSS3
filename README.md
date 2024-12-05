# ForoAlejandro
## A forum for programmers, gamers, designers, tech lovers...

### **Fase 1: Documentación del Proyecto (Wireframe y Estructura HTML)**

#### **1. Análisis de Requisitos y Objetivos del Proyecto**

La web **ForoAlejandro** ya está desarrollada, y esta documentación detalla los requisitos que guiaron su creación, las decisiones de diseño adoptadas y cómo se estructuró su contenido. La plataforma combina un blog personal con un foro temático que aborda categorías de tecnología, gaming, programación, y otras áreas relacionadas con tech lovers.

---

#### **Objetivos del Proyecto**

1. **Objetivo General:**
   Documentar una web completa, estructurada y funcional que cumpla con los estándares modernos de diseño y desarrollo, proporcionando un espacio interactivo y visualmente atractivo.

2. **Objetivos Específicos:**
   - Espacio donde Don Alejandro pueda compartir su sabiduria en su blog personal.
   - Permitir a los usuarios interactuar en un foro organizado por temáticas.
   - Garantizar la navegabilidad, accesibilidad y diseño responsive en toda la plataforma.

---

#### **Requisitos Identificados**

**Funcionales:**
1. Un foro dividido en categorías temáticas:
   - Tecnología.
   - Gaming.
   - Tech Lovers.
   - Programación.
   - Moderación básica a cargo del administrador (cuando el foro funcione al 100%, el administrador podra administrar a los usuarios y añadir funcionalidades en el foro de forma sencilla mediante un panel de contorl).
   - Publicación y respuesta a hilos de discusión.
2. Blog personal integrado:
   - Gestión de publicaciones con multimedia (portada de fotos en blog).
   - Función de interacción mediante comentarios o "me gusta" (solo html + css).
3. Página de contacto con formulario funcional.
4. Página "Acerca de" con información del creador.

**No Funcionales:**
1. **Accesibilidad:** Estándares básicos de W3C comprobados.
2. **Rendimiento:** Optimización de recursos (carga rápida, imágenes comprimidas (para blog), logo comprimido (svg).
3. **Diseño responsivo:** Adaptación fluida a dispositivos móviles, tablets y escritorios (gracias al responsive css).
4. **Compatibilidad:** Soporte para los navegadores modernos.

---

#### **Justificación de Tecnologías Utilizadas**

**HTML5 y CSS3:**
- **HTML5:** 
  - Uso de etiquetas semánticas para estructurar contenido (ej. `<section>` para categorías del foro y agrupar secciones, `<header>` para el header, `<footer>` para el footer, `<main>` para el contenido principal, `<div>` para agrupacion de elementos muy concretos...).
  - Mejora de la accesibilidad y el SEO con etiquetas `<meta>` en el `<header>`
- **CSS3:**
  - Aplicación de un diseño visual moderno y coherente.
  - Implementación de diseño adaptativo mediante **media queries** en el CSS3, creando una web altamente responsive.
  - Animaciones y transiciones para enriquecer la experiencia de usuario, especialmente con `<transition>` y algun uso simple de JavaScript, para animaciones en página principal en el subtítulo, así como la animación de "A forum for ... [programmers, designers, gamers, tech lovers...]

**Rendimiento y estándares:**
- Uso de prácticas estándar para garantizar la calidad del código y su mantenimiento.
