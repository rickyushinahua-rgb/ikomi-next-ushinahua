# IKOMI PERÚ — Sitio Web Corporativo

## 1. Descripción del proyecto

IKOMI PERÚ es un proyecto académico desarrollado para la Evaluación N.º 03 del curso **Desarrollo de Aplicaciones Web Avanzado: FullStack**, de TECSUP.

El proyecto consiste en recrear el sitio web corporativo de IKOMI PERÚ mediante Next.js, implementando una interfaz moderna, organizada, responsive y orientada a la presentación de productos, servicios e información institucional.

La aplicación utilizará componentes reutilizables, navegación entre páginas, rutas dinámicas y herramientas de optimización para ofrecer una experiencia de navegación adecuada en diferentes dispositivos.

**Sitio de referencia:** https://www.ikomiperu.com/

**Repositorio de GitHub:** https://github.com/rickyushinahua-rgb/ikomi-next-ushinahua

### Estado del proyecto

Actualmente se ha completado la configuración inicial de Next.js, la documentación técnica, la preparación del repositorio Git y la primera prueba de compilación.

Las páginas corporativas y los componentes personalizados se implementarán progresivamente, registrando cada avance mediante commits descriptivos en GitHub.

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
│   └── page.tsx
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

Las siguientes rutas forman parte de los requisitos de la evaluación y se implementarán mediante el sistema de enrutamiento de Next.js.

| Página | Ruta | Estado |
|---|---|---|
| Inicio | `/` | Plantilla inicial; pendiente de personalización |
| Nosotros | `/nosotros` | Pendiente |
| Servicios | `/servicios` | Pendiente |
| Productos | `/productos` | Pendiente |
| Detalle de producto | `/productos/[slug]` | Pendiente |
| Marcas | `/marcas` | Pendiente |
| Contáctenos | `/contacto` | Pendiente |
| Página 404 personalizada | `app/not-found.tsx` | Pendiente |

La ruta dinámica de productos utilizará datos locales y permitirá consultar los detalles de cada producto mediante su identificador `slug`.

## 7. Componentes reutilizables

El desarrollo contempla los siguientes componentes:

| Componente | Funcionalidad prevista |
|---|---|
| Navbar | Barra de navegación con enlaces activos y menú responsive. |
| Footer | Pie de página con información corporativa y enlaces. |
| Hero | Banner principal reutilizable para presentar secciones. |
| ProductCard | Tarjeta de producto que recibe información mediante props. |
| SectionTitle | Títulos reutilizables para las diferentes secciones. |
| ContactForm | Formulario visual para la página de contacto. |

Estos componentes todavía están pendientes de implementación.

## 8. Árbol de componentes

### Estructura actual

```text
RootLayout (Server Component)
└── HomePage (Server Component)
```

El layout raíz está definido en `app/layout.tsx` y la página principal en `app/page.tsx`.

### Estructura prevista

```text
RootLayout (Server Component)
├── Navbar (Client Component)
├── Páginas (Server Components)
│   ├── Inicio
│   │   ├── Hero
│   │   └── SectionTitle
│   ├── Nosotros
│   ├── Servicios
│   ├── Productos
│   │   └── ProductCard
│   ├── Detalle de producto
│   ├── Marcas
│   └── Contacto
│       └── ContactForm
└── Footer (Server Component)
```

**Nota:** este segundo árbol representa la arquitectura prevista. La clasificación definitiva de los componentes se actualizará conforme se implementen.

## 9. Estrategia de diseño y estilos

Se utiliza **Tailwind CSS** como estrategia principal para la estilización de la aplicación.

La interfaz se desarrollará considerando:

- Colores corporativos coherentes con la referencia visual.
- Tipografía mediante `next/font`.
- Imágenes optimizadas con `next/image`.
- Distribución adaptable a pantallas móviles, tabletas y computadoras.
- Transiciones visuales que mejoren la interacción.

Las pruebas de diseño responsive se realizarán en resoluciones de **375 px, 768 px y 1280 px**.

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

El despliegue de la aplicación está pendiente y se realizará después de implementar y verificar las funcionalidades requeridas.

La plataforma y la dirección pública del sitio se documentarán cuando el despliegue esté completado.

## 14. Observaciones técnicas

Durante la configuración inicial se detectó una advertencia de Turbopack relacionada con un archivo `package-lock.json` ubicado fuera del repositorio, en la carpeta `Documents`.

La advertencia no impidió ejecutar el proyecto ni completar la compilación inicial. No se han realizado modificaciones preventivas a la configuración de Turbopack.

---

**Proyecto académico — Desarrollo de Aplicaciones Web Avanzado: FullStack — TECSUP.**