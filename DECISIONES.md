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

La estrategia es reservar `app/globals.css` para tokens de diseño y estilos globales mínimos (fondo y color del texto), y usar utilidades Tailwind en las páginas corporativas. Esto evita duplicar colores en las páginas y mantiene los estilos fáciles de identificar y ajustar durante la implementación posterior.

## 3. Función de los archivos principales

| Archivo o carpeta | Función dentro del proyecto |
|---|---|
| `app/layout.tsx` | Define la estructura principal compartida de la aplicación mediante las etiquetas `html` y `body`. Permite cargar estilos globales, configurar fuentes y mostrar las páginas mediante `children`. También permite establecer metadatos generales. |
| `app/page.tsx` | Representa la ruta `/`; ahora muestra Inicio con contenido corporativo y metadatos específicos. |
| `app/nosotros/page.tsx` | Define `/nosotros` con sus propios metadatos y los valores publicados en la referencia corporativa. |
| `app/servicios/page.tsx` | Define `/servicios` con cuatro áreas y un proceso de solicitud basados en las páginas de IKOMI consultadas. |
| `app/marcas/page.tsx` | Define `/marcas` y presenta ocho nombres confirmados sin reproducir logotipos ajenos. |
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

Esto resulta útil para IKOMI PERÚ: Servicios ya tiene metadatos propios y Productos y Contacto podrán tenerlos cuando se implementen.

Por ejemplo, la página `/productos` podrá tener un título como *Productos y Repuestos | IKOMI PERÚ*, acompañado de una descripción de su catálogo.

En una SPA tradicional desarrollada con React y Vite, la gestión del contenido inicial y los metadatos por ruta puede requerir configuraciones adicionales.

### 5.2. Renderizado en el servidor

Next.js con App Router utiliza Server Components por defecto.

Esto permite preparar el contenido de las páginas informativas en el servidor y entregar HTML al navegador sin necesidad de ejecutar toda la lógica de presentación en el cliente.

En IKOMI PERÚ, Nosotros, Servicios y Marcas utilizan esta característica porque principalmente muestran contenido informativo.

### 5.3. Rendimiento y optimización

Next.js proporciona herramientas como `next/image` para optimizar imágenes y `next/font` para gestionar fuentes tipográficas.

Estas características pueden contribuir a mejorar la carga del sitio corporativo, especialmente cuando se incorporen imágenes de productos, marcas y banners.

Asimismo, mantener como Server Components las secciones que no necesitan interactividad puede reducir el JavaScript enviado al navegador.

Estas son ventajas técnicas del framework; todavía no representan mediciones de rendimiento realizadas sobre la versión corporativa terminada.

## 6. Organización del proyecto y decisiones de arquitectura

### 6.1. Uso de layouts

Actualmente, el proyecto utiliza `app/layout.tsx` como layout raíz.

Este archivo ya comparte Navbar, Footer, estilos globales y tipografía entre las rutas. El contenido de cada página conserva su propio `<main>` semántico.

El uso de layouts anidados se evaluará cuando se implemente el catálogo de productos. Inicialmente, no se considera necesario agregar un layout exclusivo para `/productos`, debido a que las páginas del catálogo pueden compartir el diseño general.

### 6.2. Uso de Route Groups

Por el momento, no se utilizarán Route Groups como `(marketing)`.

Las páginas corporativas de IKOMI PERÚ pertenecen a una misma estructura visual, por lo que mantener rutas directas facilita comprender su organización.

Si posteriormente se incorporan secciones con diseños independientes, se podrá reconsiderar esta decisión.

### 6.3. Navegación y límite entre cliente y servidor

`components/layout/Navbar.tsx` es un **Client Component** porque necesita `usePathname()` para identificar la ruta activa y `useState` para abrir y cerrar el menú móvil. La directiva `"use client"` se limita a ese archivo: `app/layout.tsx`, las páginas informativas y `components/layout/Footer.tsx` permanecen como Server Components.

Los enlaces internos utilizan `Link` de `next/link` para aprovechar la navegación del App Router sin forzar una recarga completa en rutas disponibles. `usePathname` permite aplicar `aria-current="page"` y estilos al enlace activo; en rutas de detalle, el prefijo `/productos/` mantendrá resaltada la sección Productos. El menú se cierra al seleccionar un enlace y se muestra cerrado si cambia la ruta. Inicio, Nosotros, Servicios y Marcas están implementadas; Productos y Contacto todavía mostrarán la respuesta predeterminada para rutas inexistentes.

El **Footer** no requiere hooks, eventos ni APIs del navegador, por lo que no necesita `"use client"`. Incluye una descripción breve y enlaces internos sin atribuir a IKOMI PERÚ datos de contacto no verificados. El año del copyright se calcula en una función de servidor con `"use cache"` y `cacheLife("days")`: con `cacheComponents` activo, leer `new Date()` directamente durante el prerender impide compilar; el valor cacheado puede actualizarse con la revalidación diaria.

La comparación de `Link` con `<a href>` mediante DevTools Network y sus capturas quedan pendientes; no se ha realizado ese experimento en esta etapa.

### 6.4. Reutilización, imágenes y organización de Inicio y Nosotros

`components/Hero.tsx` recibe título, descripción, URL de imagen, texto alternativo y acciones opcionales mediante props tipadas. `components/SectionTitle.tsx` recibe título, subtítulo y alineación opcional. Ambos son Server Components y permiten que Inicio y Nosotros compartan presentación sin repetirla ni enviar JavaScript interactivo innecesario al navegador.

Cada ruta vive en su propio `page.tsx` y exporta `metadata` específica. Las tarjetas y textos particulares permanecen cerca de la página que los usa; no se crearon layouts anidados ni route groups porque comparten el diseño raíz actual.

Se utiliza `next/image` con `fill`, contenedores con proporción, `sizes` y `alt` descriptivo; el Hero usa `preload` para su imagen principal, como recomienda la guía de Next.js 16 para imágenes visibles al cargar. `next.config.ts` limita `images.remotePatterns` a seis fotografías concretas de `images.pexels.com`, verificadas como JPEG y servidas por el optimizador local. La [licencia de Pexels](https://www.pexels.com/license/) permite su uso en un sitio web; el README atribuye a los autores. No se presentan como fotografías oficiales de IKOMI PERÚ ni se reprodujo un logotipo.

La información sobre importación y venta de repuestos para camiones y buses, sus categorías y los valores Respeto, Compromiso, Superación y Adaptabilidad se contrastó con [Inicio](https://www.ikomiperu.com/) y [Nosotros](https://ikomiperu.com/nosotros) de la referencia. Se evitó incluir cifras, testimonios, misión, visión o historia empresarial en estas páginas.

### 6.5. Servicios y Marcas

`app/servicios/page.tsx` y `app/marcas/page.tsx` son rutas independientes de App Router, cada una con `metadata` propia. Reutilizan Hero y SectionTitle, el layout raíz y las dos fotos ilustrativas de Pexels ya permitidas por `next.config.ts`. No se añadieron hosts, imágenes ni dependencias. Las cuadrículas se adaptan a pantalla móvil y escritorio con utilidades Tailwind y hover discreto con `motion-reduce:transform-none`.

Servicios describe ventas, asesoría, coordinación de entrega y líneas de productos basándose en [Inicio](https://ikomiperu.com/) y [Envíos](https://ikomiperu.com/envios). El texto evita prometer horarios, costos o plazos; el enlace a `/contacto` es una llamada a la acción, pero la página destino aún no está implementada. Los cuatro iconos están en `components/ServiceIcon.tsx` como SVG propios, de tamaño uniforme y `aria-hidden` porque los títulos de cada tarjeta ya nombran su contenido. Los datos de las cuatro tarjetas y de los tres pasos se usan solo en esta página y permanecen cerca de ella.

Marcas presenta Hyundai Mobis, Mando, Valeo, SKF, Gates, GMB, Sangsin y Hi-Q, contrastadas con la [página de Marcas](https://ikomiperu.com/marcas). Su lista se usa en una sola página, por eso no se creó un archivo `data/` adicional. Se optó por nombres tipográficos en lugar de logos no verificados para no atribuir identidad visual falsa ni introducir recursos externos. El enlace a `/productos` apunta a una ruta pendiente y no se presenta como catálogo ya desarrollado.

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
