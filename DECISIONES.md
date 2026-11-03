# Decisiones técnicas — borrador para revisión del estudiante

Estas justificaciones son propuestas basadas en la configuración observada del repositorio de IKOMI PERÚ; el estudiante debe validarlas y ajustarlas a sus motivos reales antes de presentar la evaluación.

| Opción elegida | Alternativa descartada | Justificación propuesta |
| --- | --- | --- |
| TypeScript | JavaScript sin tipado estático | Para IKOMI PERÚ, tipar los datos y las propiedades de futuras secciones corporativas puede detectar errores durante el desarrollo.<br>También hace más legibles los contratos entre archivos cuando se amplíe el sitio de IKOMI PERÚ. |
| Tailwind CSS | CSS tradicional escrito íntegramente a mano | Para IKOMI PERÚ, las clases utilitarias facilitan mantener una apariencia coherente entre futuras secciones del sitio.<br>Permiten ajustar estilos responsivos de IKOMI PERÚ sin crear una hoja de estilos nueva para cada cambio pequeño. |
| `app/` en la raíz, sin `src/` | Crear una carpeta `src/` adicional | Para IKOMI PERÚ, la estructura actual mantiene cerca de la configuración los archivos de rutas del proyecto inicial.<br>Evita una capa de carpetas innecesaria en esta etapa y facilita ubicar `app/layout.tsx` y `app/page.tsx`. |
| App Router | Pages Router | Para IKOMI PERÚ, el enrutamiento basado en `app/` permite compartir el diseño raíz y preparar metadatos para las rutas corporativas futuras.<br>Sus Server Components por defecto permiten planificar contenido informativo sin trasladar toda su lógica al navegador. |
| ESLint | No usar un analizador estático (o sustituirlo por otra herramienta) | Para IKOMI PERÚ, revisar el código con ESLint ayuda a mantener convenciones consistentes a medida que crezca el proyecto.<br>El script `npm run lint` facilita detectar problemas antes de entregar nuevas secciones de IKOMI PERÚ. |

Las alternativas de la tabla son comparaciones para argumentar la elección, no un registro de configuraciones instaladas o probadas. La implementación corporativa aún no existe.
