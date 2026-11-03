# IKOMI PERÚ — Sitio Web Corporativo

## 1. Descripción del proyecto

IKOMI PERÚ es un proyecto académico desarrollado para la Evaluación N.º 03 del curso **Desarrollo de Aplicaciones Web Avanzado: FullStack**, de TECSUP.

El proyecto consiste en recrear el sitio web corporativo de IKOMI PERÚ mediante Next.js, implementando una interfaz moderna, organizada, responsive y orientada a la presentación de productos, servicios e información institucional.

La aplicación utilizará componentes reutilizables, navegación entre páginas, rutas dinámicas y herramientas de optimización para ofrecer una experiencia de navegación adecuada en diferentes dispositivos.

**Sitio de referencia:** https://www.ikomiperu.com/

**Repositorio de GitHub:** https://github.com/rickyushinahua-rgb/ikomi-next-ushinahua

### Estado del proyecto

La identidad visual base, Navbar y Footer están integrados. Las rutas `/` (Inicio) y `/nosotros` ya presentan contenido corporativo con metadatos propios y componentes reutilizables. Las imágenes son ilustrativas de Pexels: no muestran instalaciones, personal ni productos reales de IKOMI PERÚ.

Las demás rutas y componentes se implementarán progresivamente. Los enlaces a rutas pendientes mostrarán la respuesta predeterminada para rutas inexistentes hasta que existan esas páginas.

## 2. Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| Next.js 16.4.4 | Framework principal para desarrollar la aplicación web. |
| React | Construcción de la interfaz mediante componentes. |
| TypeScript | Tipado estático para mejorar la organización y seguridad del código. |
| Tailwind CSS 4 | Implementación de estilos modernos y responsive. |
| ESLint | Análisis estático para mantener buenas prácticas de programación. |
| Turbopack | Herramienta utilizada por Next.js durante el desarrollo y compilación. |
| Git y GitHub | Control de versiones y registro progresivo del desarrollo. |

## 3. Requisitos de instalación

Para ejecutar el proyecto se necesita:

- Node.js compatible con Next.js 16.
- npm.
- Visual Studio Code u otro editor de código.
- Git para gestionar el repositorio.

## 4. Instalación y ejecución

### 4.1. Clonar el repositorio

```bash
git clone https://github.com/rickyushinahua-rgb/ikomi-next-ushinahua.git
```

### 4.2. Ingresar al proyecto

```bash
cd ikomi-next-ushinahua
```

### 4.3. Instalar dependencias

```bash
npm ci
```

### 4.4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador: http://localhost:3000

### 4.5. Generar la compilación de producción

```bash
npm run build
```

### 4.6. Ejecutar la aplicación en producción

Después de compilar:

```bash
npm run start
```

### 4.7. Verificar la calidad del código

```bash
npx eslint .
```

Este comando permite ejecutar ESLint directamente. La disponibilidad del script `npm run lint` depende de su configuración en `package.json`.

## 5. Estructura actual del proyecto

```text
ikomi-next-ushinahua/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── nosotros/
│       └── page.tsx
│
├── components/
│   ├── Hero.tsx
│   ├── SectionTitle.tsx
│   └── layout/
│       ├── Footer.tsx
│       └── Navbar.tsx
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── evidencias/
│   ├── .gitkeep
│   └── build-inicial.png
│
├── AGENTS.md
├── BITACORA_IA.md
├── DECISIONES.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

La carpeta `app/` está ubicada directamente en la raíz del proyecto. Se utiliza App Router y no se ha implementado una carpeta `src/`.

## 6. Rutas de la aplicación

Estas son las rutas implementadas mediante App Router y las que faltan:

| Página | Ruta | Estado |
|---|---|---|
| Inicio | `/` | Implementada |
| Nosotros | `/nosotros` | Implementada |
| Servicios | `/servicios` | Pendiente |
| Productos | `/productos` | Pendiente |
| Detalle de producto | `/productos/[slug]` | Pendiente |
| Marcas | `/marcas` | Pendiente |
| Contáctenos | `/contacto` | Pendiente |
| Página 404 personalizada | `app/not-found.tsx` | Pendiente |

La ruta dinámica de productos utilizará datos locales y permitirá consultar los detalles de cada producto mediante su identificador `slug`.

## 7. Componentes reutilizables

Estos son los componentes implementados y los que siguen pendientes:

| Componente | Estado | Función |
|---|---|---|
| Navbar | Implementado (Client Component) | Enlaces con `Link`, enlace activo con `usePathname` y menú móvil. |
| Footer | Implementado (Server Component) | Descripción corporativa, enlaces y año de copyright. |
| Hero | Implementado (Server Component) | Encabezado con imagen, título, descripción y acciones opcionales. |
| ProductCard | Pendiente | Tarjeta de producto que recibe información mediante props. |
| SectionTitle | Implementado (Server Component) | Título, subtítulo y alineación opcional para secciones. |
| ContactForm | Pendiente | Formulario visual para la página de contacto. |

No se han añadido datos de contacto no verificados al Footer.

## 8. Árbol de componentes

### Estructura actual

```text
RootLayout (Server Component)
├── Navbar (Client Component)
├── HomePage `/` (Server Component)
│   ├── Hero (Server Component)
│   └── SectionTitle (Server Component)
├── NosotrosPage `/nosotros` (Server Component)
│   ├── Hero (Server Component)
│   └── SectionTitle (Server Component)
└── Footer (Server Component)
```

El layout raíz está definido en `app/layout.tsx` y la página principal en `app/page.tsx`.

### Estructura prevista

```text
RootLayout (Server Component)
├── Navbar (Client Component; implementado)
├── Páginas pendientes (Server Components por defecto)
│   ├── Servicios
│   ├── Productos
│   │   └── ProductCard
│   ├── Detalle de producto
│   ├── Marcas
│   └── Contacto
│       └── ContactForm
└── Footer (Server Component; implementado)
```

**Nota:** este segundo árbol representa solo lo pendiente. La clasificación definitiva de los componentes aún no creados se actualizará conforme se implementen.

## 9. Estrategia de diseño y estilos

Se utiliza **Tailwind CSS** como estrategia principal para la estilización de la aplicación.

La identidad visual base ya utiliza `@theme` de Tailwind CSS 4 en `app/globals.css`: azul principal `#143F77`, azul secundario `#2169B0`, texto oscuro `#152235`, fondo `#F3F6FA` y blanco `#FFFFFF`. Geist se aplica globalmente con `next/font`, sin carga de la fuente desde un CDN en el navegador.

Inicio y Nosotros ya utilizan `next/image` con texto alternativo, contenedores proporcionados y `sizes`; las tarjetas incluyen transiciones hover que respetan la preferencia de movimiento reducido. Las demás páginas se desarrollarán considerando:

- Reutilización de los colores y la tipografía ya centralizados.
- Imágenes optimizadas con `next/image` cuando corresponda.
- Distribución adaptable a pantallas móviles, tabletas y computadoras.
- Transiciones visuales que mejoren la interacción.

Las comprobaciones visuales de diseño responsive a **375 px, 768 px y 1280 px** están pendientes; aún no hay capturas de esas resoluciones.

### Imágenes ilustrativas y atribución

Se utiliza la [licencia de Pexels](https://www.pexels.com/license/), que permite usar estas fotografías en sitios web. Se verificó la respuesta de las URLs directas y del optimizador de Next.js. Las imágenes no representan al personal, almacén o flota de IKOMI PERÚ. En `next.config.ts`, `images.remotePatterns` permite únicamente las seis URL exactas utilizadas.

| Uso | Fotógrafo | Fuente |
|---|---|---|
| Hero Inicio (camiones) | Quintin Gellar | [Pexels 2199293](https://www.pexels.com/photo/white-volvo-semi-truck-on-side-of-road-2199293/) |
| Inicio (turbocompresor) | cottonbro studio | [Pexels 7565164](https://www.pexels.com/photo/close-up-shot-of-a-turbocharger-7565164/) |
| Hero Nosotros (almacén) | imeenhae | [Pexels 4277794](https://www.pexels.com/photo/photo-of-warehouse-4277794/) |
| Nosotros (trabajadores de almacén) | Tiger Lily | [Pexels 4480986](https://www.pexels.com/photo/men-standing-in-a-warehouse-talking-4480986/) |
| Nosotros (estanterías de almacén) | Tiger Lily | [Pexels 4481327](https://www.pexels.com/photo/shelves-in-a-warehouse-4481327/) |
| Nosotros (camiones junto a un almacén) | Bogdan Krupin | [Pexels 16663692](https://www.pexels.com/photo/trucks-near-warehouse-16663692/) |

## 10. Documentación técnica

El repositorio incluye dos documentos complementarios:

**[DECISIONES.md](DECISIONES.md):** contiene las decisiones de configuración, las justificaciones técnicas y la comparación de Next.js frente a una SPA desarrollada con React/Vite.

**[BITACORA_IA.md](BITACORA_IA.md):** registra las interacciones relevantes con herramientas de inteligencia artificial, las decisiones tomadas y las correcciones realizadas durante el desarrollo.

## 11. Evidencias de evaluación

Las capturas de las pruebas se almacenan en la carpeta `evidencias/`.

| Evidencia | Estado |
|---|---|
| [Compilación inicial](evidencias/build-inicial.png) | Completada |
| Comparación de Link y etiqueta HTML `a` en Network | Pendiente |
| Capturas responsive a 375 px | Pendiente |
| Capturas responsive a 768 px | Pendiente |
| Capturas responsive a 1280 px | Pendiente |
| Compilación final | Pendiente |

## 12. Control de versiones

El desarrollo se registra de manera progresiva mediante Git y GitHub.

Cada avance funcional será comprobado antes de crear un commit, con mensajes descriptivos que permitan identificar los cambios realizados.

Esto facilita revisar el historial de implementación y demostrar el proceso de desarrollo del proyecto.

## 13. Despliegue

No se realizará un despliegue en esta evaluación por limitaciones de tiempo.

## 14. Observaciones técnicas

Durante la configuración inicial se detectó una advertencia de Turbopack relacionada con un archivo `package-lock.json` ubicado fuera del repositorio, en la carpeta `Documents`.

La advertencia no impidió ejecutar el proyecto ni completar la compilación inicial. No se han realizado modificaciones preventivas a la configuración de Turbopack.

---

**Proyecto académico — Desarrollo de Aplicaciones Web Avanzado: FullStack — TECSUP.**
