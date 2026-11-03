# DECISIONES TÉCNICAS DEL PROYECTO IKOMI PERÚ

## 1. Introducción

El presente documento describe y justifica las decisiones técnicas tomadas durante la configuración y desarrollo del sitio web corporativo IKOMI PERÚ, utilizando Next.js con App Router.

Estas decisiones buscan facilitar la organización del código, la reutilización de componentes, el mantenimiento del proyecto y la implementación de una interfaz moderna y adaptable a diferentes dispositivos.

## 2. Decisiones de configuración del proyecto

| Opción elegida | Alternativa descartada | Justificación |
|---|---|---|
| **TypeScript** | JavaScript | Se eligió TypeScript porque permite definir tipos de datos para productos, componentes y propiedades, reduciendo posibles errores durante el desarrollo. Además, facilita el mantenimiento del sitio IKOMI PERÚ conforme se incorporen nuevas páginas y funcionalidades. |
| **Tailwind CSS** | CSS Modules y Bootstrap | Se eligió Tailwind CSS porque permite crear interfaces personalizadas utilizando clases de utilidad y facilita el diseño responsive. Para IKOMI PERÚ resulta conveniente porque ofrece flexibilidad para adaptar colores, espacios y componentes a la referencia visual sin depender de estilos prediseñados. |
| **Carpeta `app/` en la raíz** | Utilizar `src/` | Se decidió mantener la carpeta `app/` directamente en la raíz porque permite localizar fácilmente las páginas, rutas y archivos principales. Como el proyecto tiene una estructura inicial sencilla, no es necesario agregar otro nivel de carpetas. |
| **App Router** | Pages Router | Se eligió App Router porque permite organizar las rutas mediante carpetas, compartir diseños mediante layouts y definir metadatos por página. Además, facilita el uso de Server Components para presentar información corporativa de IKOMI PERÚ. |
| **ESLint** | No utilizar herramientas de análisis estático | Se eligió ESLint porque permite detectar problemas de calidad y mantener buenas prácticas de programación. Esto facilita desarrollar componentes ordenados, legibles y consistentes durante las diferentes etapas del proyecto. |

### 2.1. Justificación de Tailwind CSS frente a otras alternativas

**Tailwind CSS frente a CSS Modules:** Tailwind permite aplicar estilos directamente mediante clases de utilidad, reduciendo la necesidad de crear archivos CSS independientes para cada componente. Esto facilita mantener una apariencia uniforme en las secciones de IKOMI PERÚ.

**Tailwind CSS frente a Bootstrap:** Bootstrap ofrece componentes y estilos prediseñados, mientras que Tailwind brinda mayor flexibilidad para personalizar la interfaz. Por este motivo, Tailwind resulta conveniente para recrear las características visuales del sitio corporativo sin depender de una apariencia predeterminada.

Además, Tailwind facilita implementar diseños adaptables a diferentes resoluciones mediante sus variantes responsive.

### 2.2. Identidad visual base

Se definieron cinco colores en `app/globals.css` mediante `@theme` de Tailwind CSS 4:

| Variable | Valor | Uso previsto |
|---|---|---|
| `--color-primary` | `#143F77` | Azul principal para títulos y elementos destacados. |
| `--color-secondary` | `#2169B0` | Azul de apoyo para acentos. |
| `--color-dark` | `#152235` | Texto sobre fondos claros. |
| `--color-background` | `#F3F6FA` | Fondo claro del sitio. |
| `--color-white` | `#FFFFFF` | Superficies blancas y texto sobre fondos oscuros cuando corresponda. |

Los azules diferencian la identidad de IKOMI PERÚ y el tono oscuro sobre blanco o fondo claro favorece la lectura. `@theme` permite reutilizar los mismos valores como variables CSS y mediante utilidades como `text-primary`, `bg-secondary` y `bg-background`, sin agregar una configuración antigua de Tailwind.

Se conserva **Geist** mediante `next/font/google`, ya presente en el proyecto. Next.js aloja la fuente con la aplicación para que el navegador no dependa de un CDN de tipografía; `--font-geist-sans` se vincula con `--font-sans` mediante `@theme inline`. Se eliminó Geist Mono porque esta portada no necesita una fuente monoespaciada.

La estrategia es reservar `app/globals.css` para tokens de diseño y estilos globales mínimos (fondo y color del texto), y usar utilidades Tailwind en la portada temporal. Esto evita duplicar colores en las páginas y mantiene los estilos fáciles de identificar y ajustar durante la implementación corporativa posterior.

## 3. Función de los archivos principales

| Archivo o carpeta | Función dentro del proyecto |
|---|---|
| `app/layout.tsx` | Define la estructura principal compartida de la aplicación mediante las etiquetas `html` y `body`. Permite cargar estilos globales, configurar fuentes y mostrar las páginas mediante `children`. También permite establecer metadatos generales. |
| `app/page.tsx` | Representa la ruta `/`; ahora muestra una portada temporal con la identidad visual base, no la página corporativa definitiva. |
| `app/globals.css` | Contiene los estilos globales del proyecto y permite establecer variables visuales reutilizables, como colores y tipografía. |
| `public/` | Almacena recursos estáticos como imágenes, logotipos e íconos. Los archivos pueden utilizarse desde las páginas y componentes mediante rutas públicas. |
| `next.config.ts` | Permite configurar el comportamiento de Next.js y establecer opciones relacionadas con la compilación y otras características del framework. |
| `package.json` | Contiene las dependencias, información del proyecto y scripts utilizados para ejecutar y compilar la aplicación. |

## 4. Función de los comandos de Next.js

### `npm run dev`

Inicia el servidor de desarrollo de Next.js y permite visualizar los cambios realizados en el proyecto durante la programación.

La aplicación puede consultarse localmente en `http://localhost:3000`.

### `npm run build`

Genera una compilación optimizada para producción y permite comprobar que el proyecto puede compilarse correctamente.

Este comando se utilizó durante la configuración inicial de IKOMI PERÚ y finalizó sin errores, como se muestra en la evidencia correspondiente.

### `npm run start`

Inicia la aplicación utilizando la compilación de producción generada previamente mediante `npm run build`.

Permite ejecutar el sitio en modo de producción.

## 5. Ventajas de Next.js frente a una SPA de React con Vite

Para desarrollar el sitio corporativo IKOMI PERÚ, Next.js ofrece ventajas relacionadas con el posicionamiento en buscadores, el renderizado y el rendimiento.

### 5.1. Posicionamiento en buscadores (SEO)

Next.js permite configurar títulos y descripciones individuales para cada página mediante la API de metadatos.

Esto resulta útil para IKOMI PERÚ porque sus secciones de productos, servicios y contacto podrán contar con información específica para los motores de búsqueda.

Por ejemplo, la página `/productos` podrá tener un título como *Productos y Repuestos | IKOMI PERÚ*, acompañado de una descripción de su catálogo.

En una SPA tradicional desarrollada con React y Vite, la gestión del contenido inicial y los metadatos por ruta puede requerir configuraciones adicionales.

### 5.2. Renderizado en el servidor

Next.js con App Router utiliza Server Components por defecto.

Esto permite preparar el contenido de las páginas informativas en el servidor y entregar HTML al navegador sin necesidad de ejecutar toda la lógica de presentación en el cliente.

En IKOMI PERÚ, páginas como Nosotros, Servicios y Marcas podrán utilizar esta característica porque principalmente mostrarán contenido informativo.

### 5.3. Rendimiento y optimización

Next.js proporciona herramientas como `next/image` para optimizar imágenes y `next/font` para gestionar fuentes tipográficas.

Estas características pueden contribuir a mejorar la carga del sitio corporativo, especialmente cuando se incorporen imágenes de productos, marcas y banners.

Asimismo, mantener como Server Components las secciones que no necesitan interactividad puede reducir el JavaScript enviado al navegador.

Estas son ventajas técnicas del framework; todavía no representan mediciones de rendimiento realizadas sobre la versión corporativa terminada.

## 6. Organización del proyecto y decisiones de arquitectura

### 6.1. Uso de layouts

Actualmente, el proyecto utiliza `app/layout.tsx` como layout raíz.

Este archivo permitirá compartir elementos comunes como Navbar, Footer, estilos globales y tipografía.

El uso de layouts anidados se evaluará cuando se implemente el catálogo de productos. Inicialmente, no se considera necesario agregar un layout exclusivo para `/productos`, debido a que las páginas del catálogo pueden compartir el diseño general.

### 6.2. Uso de Route Groups

Por el momento, no se utilizarán Route Groups como `(marketing)`.

Las páginas corporativas de IKOMI PERÚ pertenecen a una misma estructura visual, por lo que mantener rutas directas facilita comprender su organización.

Si posteriormente se incorporan secciones con diseños independientes, se podrá reconsiderar esta decisión.

## 7. Estado de verificación inicial

Durante la configuración inicial del proyecto se realizaron las siguientes comprobaciones:

- Se creó el proyecto mediante `create-next-app`.
- Se confirmó el uso de Next.js 16.4.4 con App Router.
- Se verificó que la carpeta `app/` se encuentra en la raíz.
- Se ejecutó `npm run dev` y la página principal respondió correctamente.
- Se ejecutó `npm run build` y la compilación finalizó sin errores.
- Se guardó la captura correspondiente en `evidencias/build-inicial.png`.
- Se inicializó Git y se publicó el proyecto en GitHub.

## 8. Conclusión

Las decisiones de configuración permiten establecer una base organizada para desarrollar el sitio web corporativo IKOMI PERÚ.

La combinación de Next.js, TypeScript y Tailwind CSS facilita la implementación progresiva de páginas, componentes reutilizables y estilos adaptables.

Asimismo, el uso de App Router permite organizar la navegación y aprovechar las capacidades de renderizado y metadatos del framework, mientras que ESLint contribuye al mantenimiento de la calidad del código.
