# IKOMI PERÚ — Evaluación 03 de Next.js

Base del sitio corporativo de IKOMI PERÚ desarrollada con Next.js 16.4.4 (App Router), React, TypeScript, Tailwind CSS y ESLint. En esta etapa el proyecto conserva la página y los metadatos iniciales de `create-next-app`: todavía no se han implementado páginas ni componentes corporativos. Las decisiones propuestas para revisión del estudiante están en [DECISIONES.md](DECISIONES.md), y el registro de uso de IA en [BITACORA_IA.md](BITACORA_IA.md).

## Requisitos e instalación

- Node.js 20.9 o superior y npm.
- Desde la raíz del repositorio, instalar las dependencias declaradas en `package-lock.json`:

```bash
npm ci
```

## Ejecución

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). `dev` inicia el servidor de desarrollo con actualización de cambios.

Para generar y servir la versión de producción:

```bash
npm run build
npm run start
```

`build` genera la compilación de producción; `start` la sirve y requiere ejecutar `build` previamente. La comprobación de estilo disponible es `npm run lint` (ESLint).

## Archivos y carpetas principales

| Ruta | Función actual |
| --- | --- |
| `app/layout.tsx` | Diseño raíz compartido por las rutas: define `<html>` y `<body>`, carga `app/globals.css` y las fuentes Geist, inserta cada página mediante `children` y exporta metadatos globales. Actualmente el título, la descripción y `lang="en"` siguen siendo los del ejemplo y deberán revisarse cuando se prepare el contenido de IKOMI PERÚ. |
| `app/page.tsx` | Define la ruta `/`; por ahora muestra la pantalla inicial de Next.js, no una portada corporativa. |
| `public/` | Guarda archivos estáticos accesibles desde la raíz de la URL (por ejemplo, `public/next.svg` se sirve como `/next.svg`). Actualmente contiene los SVG del proyecto inicial. |
| `next.config.ts` | Configuración tipada de Next.js; contiene opciones experimentales y una regla de Turbopack para CSS/Tailwind. No define todavía `turbopack.root`. |
| `package.json` | Declara dependencias y scripts `dev`, `build`, `start` y `lint`. |
| `evidencias/` | Carpeta reservada para evidencias reales de la evaluación; `.gitkeep` permite mantenerla en Git mientras esté vacía. |

La carpeta `app/` está en la raíz y no se usa `src/` ni Pages Router.

## ¿Por qué Next.js para IKOMI PERÚ?

- **SEO:** el App Router permite declarar títulos y descripciones con la API de metadatos para que los buscadores identifiquen los contenidos corporativos. En una SPA típica con React/Vite, el HTML inicial suele contener menos contenido y los metadatos por página requieren una solución adicional. La mejora dependerá de completar los metadatos y publicar contenido real; los actuales siguen siendo los del ejemplo.
- **Renderizado del servidor:** las páginas y diseños son Server Components por defecto. Cuando se creen secciones informativas de IKOMI PERÚ, el servidor podrá preparar su contenido antes de enviarlo al navegador, en vez de depender de que toda la interfaz se construya tras descargar JavaScript como en una SPA cliente típica.
- **Rendimiento:** enviar menos JavaScript para contenido no interactivo y reservar los Client Components para interacciones puede mejorar la carga inicial; Next.js también ofrece optimizaciones como `next/image`, ya usado en la página de ejemplo. El resultado real deberá medirse una vez exista el sitio corporativo.

## Advertencia de raíz de Turbopack

Existe un `package-lock.json` externo en `Documents` además del `package-lock.json` de este repositorio. Si Turbopack advierte que detectó una raíz de trabajo incorrecta o varios archivos de bloqueo, la propuesta para revisión es fijar la raíz **a este proyecto** mediante `turbopack.root` en `next.config.ts`, conservando la regla CSS existente:

```ts
import path from "node:path";

// Dentro de turbopack, junto a rules:
root: path.resolve(__dirname),
```

`root` debe ser una ruta absoluta. Primero conviene comprobar el texto exacto de la advertencia y confirmar si ese archivo externo pertenece a otro proyecto; no se ha modificado la configuración ni eliminado el archivo externo. Referencia: documentación instalada de Next.js en `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/turbopack.md` (sección «Root directory»).
