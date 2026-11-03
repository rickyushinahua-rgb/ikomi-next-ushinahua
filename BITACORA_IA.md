# Bitácora de uso de IA

Registro de interacciones observables en este repositorio. La entrada siguiente recoge únicamente la solicitud presente y la respuesta realizada durante esta interacción; no atribuye al estudiante otras consultas ni pruebas.

## Entrada 1 — 03/11/2026 — documentación inicial de la Evaluación 03

**Objetivo:** documentar las elecciones técnicas y el estado inicial del sitio corporativo IKOMI PERÚ, explicar la estructura y las ventajas de Next.js, reservar la carpeta de evidencias y proponer una respuesta a la advertencia de Turbopack sin alterar la configuración.

**Prompt utilizado (texto del usuario en esta interacción):**

```text
Estoy desarrollando la Evaluación 03 de Next.js: sitio corporativo IKOMI PERÚ.

ESTADO ACTUAL:
- Proyecto: ikomi-next-ushinahua
- Next.js 16.4.4 con App Router.
- TypeScript, Tailwind CSS y ESLint.
- La carpeta app/ está en la raíz; no existe src/.
- npm run dev funciona correctamente.
- npm run build compiló exitosamente.
- Git ya está inicializado.

REGLAS OBLIGATORIAS:
1. Ningún archivo de código puede superar 350 líneas, preferiblemente menos de 250.
2. Mantener código modular, claro y fácil de explicar.
3. No utilizar Pages Router, next/router ni getStaticProps.
4. No crear todavía nuevas páginas o componentes corporativos.
5. No hacer git commit ni git push automáticamente.
6. No inventar errores de IA, pruebas ni evidencias.
7. Conservar la estructura actual del proyecto.

TAREAS:
1. Crear DECISIONES.md con una tabla de Opción elegida, Alternativa descartada y Justificación. Documentar TypeScript, Tailwind CSS, app/ sin src/, App Router y ESLint; mínimo dos líneas por justificación relacionadas con IKOMI PERÚ. Crear borradores para revisión del estudiante.
2. Explicar la función de app/layout.tsx, app/page.tsx, public/, next.config.ts y scripts dev, build y start.
3. Explicar ventajas concretas de Next.js frente a React/Vite SPA para IKOMI, incluyendo SEO, renderizado del servidor y rendimiento.
4. Crear BITACORA_IA.md con una primera entrada fiel de esta interacción, indicando objetivo, prompt utilizado, resumen de respuesta, decisión tomada y justificación. Mantener un registro verificable, sin inventar interacciones.
5. Actualizar README.md con descripción del proyecto y comandos de instalación y ejecución.
6. Verificar la existencia de evidencias/ y crear .gitkeep si está vacía; no eliminar capturas existentes.
7. Revisar next.config.ts y proponer, sin aplicar cambios innecesarios, una solución para la advertencia de Turbopack sobre el package-lock.json externo en Documents.

Al finalizar, explicar cada archivo creado o modificado y detenerse. No continuar con otras etapas.
```

**Resumen de la respuesta:** se revisaron `app/layout.tsx`, `app/page.tsx`, `public/`, `next.config.ts`, `package.json` y la guía instalada de Next.js 16.4.4. Se redactaron `DECISIONES.md` y este registro; se actualizó `README.md` con instalación, ejecución, funciones de archivos y ventajas potenciales para IKOMI PERÚ. Se creó `evidencias/.gitkeep` porque la carpeta no existía. Se propuso fijar `turbopack.root` a la ruta absoluta del proyecto si se confirma la advertencia, sin editar `next.config.ts` ni tocar el bloqueo externo.

**Decisión tomada:** dejar las justificaciones técnicas y la solución de Turbopack como borradores sujetos a revisión del estudiante; conservar la plantilla existente y registrar solo evidencia verificable de esta solicitud.

**Justificación:** las motivaciones personales del estudiante y el texto exacto de la advertencia no constan en el repositorio; proponerlas como definitivas inventaría antecedentes. La configuración actual ya permite al estudiante continuar, por lo que una modificación preventiva no es necesaria para esta etapa.
