BITÁCORA DE USO DE IA — IKOMI PERÚ
Registro cronológico de las interacciones relevantes para la Evaluación N.º 03. Cada entrada incluye el objetivo, el prompt recibido, la respuesta, la decisión y su justificación. La documentación inicial se generó como borrador y fue corregida en la segunda interacción; este registro no atribuye consultas, errores ni pruebas que no hayan ocurrido.
Entrada 1 — 03/11/2026 — documentación inicial de la Evaluación 03
Objetivo: documentar las elecciones técnicas y el estado inicial del sitio corporativo IKOMI PERÚ, explicar la estructura y las ventajas de Next.js, reservar la carpeta de evidencias y proponer una respuesta a la advertencia de Turbopack sin alterar la configuración.

Prompt utilizado (texto del usuario en esta interacción):

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

Resumen de la respuesta: se revisaron app/layout.tsx, app/page.tsx, public/, next.config.ts, package.json y la guía instalada de Next.js 16.4.4. Se redactaron DECISIONES.md y este registro; se actualizó README.md con instalación, ejecución, funciones de archivos y ventajas potenciales para IKOMI PERÚ. Se creó evidencias/.gitkeep porque la carpeta no existía. Se propuso fijar turbopack.root a la ruta absoluta del proyecto si se confirma la advertencia, sin editar next.config.ts ni tocar el bloqueo externo.

Decisión tomada (aceptado como borrador): dejar las justificaciones técnicas y la solución de Turbopack como borradores sujetos a revisión del estudiante; conservar la plantilla existente y registrar solo evidencia verificable de esta solicitud.

Justificación: las motivaciones personales del estudiante y el texto exacto de la advertencia no constan en el repositorio; proponerlas como definitivas inventaría antecedentes. La configuración actual ya permite al estudiante continuar, por lo que una modificación preventiva no es necesaria para esta etapa.
Entrada 2 — 03/11/2026 — corrección de la documentación inicial
Objetivo: corregir el tono y la precisión de los tres documentos iniciales según la rúbrica y el estado confirmado del repositorio, sin desarrollar todavía el sitio corporativo.

Prompt utilizado (texto íntegro del usuario en esta interacción):

CONTEXTO GENERAL DEL PROYECTO

Estoy desarrollando la Evaluación N.º 03 del curso Desarrollo de Aplicaciones Web Avanzado: FullStack, de TECSUP, con el docente Jorge Ventura Gonzales.

PROYECTO: IKOMI PERÚ

Repositorio: https://github.com/rickyushinahua-rgb/ikomi-next-ushinahua

Referencia visual: https://www.ikomiperu.com/

Framework: Next.js 16.4.4 con App Router.

El objetivo de la evaluación es recrear el sitio corporativo IKOMI PERÚ. No se exige una copia pixel por pixel, pero sí que sea funcional, visualmente coherente, organizado, responsive y que yo pueda explicar y justificar el código durante la sustentación.

RÚBRICA DE EVALUACIÓN — 20 PUNTOS EN TOTAL

CRITERIO 1: PROYECTO NEXT.JS Y DECISIONES DE CONFIGURACIÓN (4 puntos)

Para obtener 4 puntos:

- El proyecto debe ejecutarse y compilar sin errores.

- Justificar las decisiones de TypeScript o JavaScript, Tailwind CSS, uso de src/, App Router y ESLint.

- En DECISIONES.md incluir una tabla con Opción elegida | Alternativa descartada | Justificación.

- Cada decisión requiere al menos dos líneas de justificación específica sobre IKOMI PERÚ.

- Explicar la función de app/layout.tsx, app/page.tsx, public/, next.config.ts y scripts dev, build y start.

- Explicar ventajas concretas frente a React/Vite SPA: SEO, renderizado en servidor y rendimiento.

- Guardar captura de npm run build exitoso en evidencias/.

CRITERIO 2: ENRUTAMIENTO Y PÁGINAS (4 puntos)

Implementar todas estas rutas utilizando App Router:

- / : Inicio

- /nosotros : Nosotros

- /servicios : Servicios

- /productos : Productos

- /productos/[slug] : Detalle dinámico de producto

- /marcas : Marcas

- /contacto : Contáctenos

- Ruta inexistente: not-found.tsx personalizado

Crear un archivo de datos con al menos tres productos. Mostrar los productos en /productos, navegar al detalle mediante slug y utilizar notFound() cuando el slug no exista.

Configurar metadata, título y descripción propios por página; generateMetadata en la ruta dinámica si corresponde.

Justificar en DECISIONES.md el uso o no de layouts anidados y route groups.

CRITERIO 3: NAVEGACIÓN (4 puntos)

- Navbar global utilizando Link de next/link.

- Enlace activo con usePathname.

- Menú responsive para celulares.

- Explicar por qué Navbar necesita 'use client' y las páginas informativas pueden ser Server Components.

- Realizar un experimento reemplazando temporalmente Link por <a href>, comparar el comportamiento en DevTools Network y guardar capturas y explicación.

CRITERIO 4: COMPONENTES Y ESTILIZACIÓN (4 puntos)

Componentes mínimos obligatorios:

- Navbar

- Footer

- Hero

- ProductCard con props

- SectionTitle

- ContactForm (solo interfaz)

Navbar y Footer deben estar en el layout raíz.

Usar Tailwind CSS, CSS Modules o Bootstrap, eligiendo uno y justificándolo frente a los otros dos.

Definir colores y tipografía de forma centralizada.

Utilizar next/image con alt descriptivo y tamaños definidos y next/font para la tipografía; explicar sus beneficios.

Verificar diseño responsive a 375 px, 768 px y 1280 px.

Guardar capturas de al menos dos páginas por cada ancho: mínimo seis capturas.

Añadir una animación o transición funcional, por ejemplo hover en tarjetas.

Crear el árbol de componentes en README.md indicando cuáles son Server y Client Components.

CRITERIO 5: ANÁLISIS CRÍTICO DEL USO DE IA (4 puntos)

- Crear BITACORA_IA.md con un mínimo de cinco entradas.

- Cada entrada incluirá objetivo, prompt exacto utilizado, resumen de la respuesta, decisión tomada (aceptado, modificado o rechazado) y justificación.

- Documentar al menos dos casos reales donde la IA propuso código incorrecto, desactualizado o poco adecuado, mostrando antes, después y explicación.

- No inventar errores. Registrar únicamente problemas realmente detectados.

- Elaborar una reflexión personal de máximo 200 palabras.

- Preparar sustentación de 5 minutos sin IA. Debo poder explicar los archivos y realizar cambios en vivo.

ENTREGABLES OBLIGATORIOS

- Repositorio público de GitHub con al menos cinco commits progresivos y descriptivos.

- Aplicación desplegada en una plataforma utilizada en clase.

- README.md con instalación, ejecución y árbol de componentes.

- DECISIONES.md en la raíz.

- BITACORA_IA.md en la raíz.

- Carpeta evidencias/ con capturas de build, Network y responsive.

- npm install, npm run dev y npm run build funcionando sin errores.

- Cinco conclusiones finales para el informe académico.

REGLAS DE DESARROLLO

1. NINGÚN ARCHIVO DE CÓDIGO DEBE SUPERAR 350 LÍNEAS, preferiblemente menos de 250.

2. No comprimas el código en líneas enormes para cumplir el límite.

3. Divide responsabilidades en archivos y componentes pequeños.

4. Trabaja únicamente una etapa por instrucción.

5. No implementes todo el proyecto automáticamente.

6. No hagas commits ni push automáticamente; yo controlaré los avances de GitHub.

7. No utilices Pages Router, next/router ni getStaticProps.

8. Conserva la carpeta app/ en la raíz, sin src/.

9. Usa TypeScript, Tailwind CSS, ESLint y App Router.

10. No agregues dependencias innecesarias.

11. Cada componente debe ser claro, reutilizable y fácil de sustentar.

12. Registra las interacciones relevantes en BITACORA_IA.md.

13. No inventes verificaciones, funcionalidades, errores o resultados.

14. Usa las capturas del profesor como referencia cuando sean proporcionadas.

15. Comprueba las versiones y APIs actuales antes de utilizar funcionalidades de Next.js.

ESTADO ACTUAL DEL PROYECTO

- Proyecto Next.js 16.4.4 creado correctamente.

- app/ en la raíz.

- npm run dev funciona.

- npm run build compiló exitosamente.

- GitHub conectado y publicado.

- Dos commits existentes: cdb468b (inicial) y a8b580c (documentación).

- Rama main.

- README.md, DECISIONES.md y BITACORA_IA.md ya existen.

- evidencias/build-inicial.png existe.

- Todavía no están implementadas las páginas corporativas.

TAREA ACTUAL — CORREGIR DOCUMENTACIÓN INICIAL

Modifica únicamente README.md, DECISIONES.md y BITACORA_IA.md.

A. DECISIONES.md

- Título: DECISIONES TÉCNICAS DEL PROYECTO IKOMI PERÚ.

- Eliminar encabezados como 'borrador para revisión del estudiante'.

- Mantener las cinco decisiones técnicas confirmadas.

- Mantener al menos dos líneas por decisión en la tabla.

- Explicar funciones de archivos y ventajas de Next.js frente a SPA si falta esa información.

- No atribuir decisiones que no se tomaron.

- Mantener argumentos concretos relacionados con IKOMI.

B. README.md

- Título: IKOMI PERÚ — Sitio web corporativo.

- Descripción profesional del proyecto y su propósito.

- Tecnologías utilizadas.

- Requisitos e instrucciones de instalación.

- Comandos separados: npm ci, npm run dev, npm run build, npm run start.

- Estructura real del repositorio.

- Enlaces relativos a los documentos.

- Evidencia build-inicial.png.

- Preparar las secciones de rutas y árbol de componentes sin afirmar que ya están desarrolladas.

- Eliminar frases como 'propuesta para revisión del estudiante'.

- Mantener veracidad sobre el estado actual del proyecto.

C. BITACORA_IA.md

- Mejorar encabezado e introducción.

- Conservar íntegro el prompt original de la primera entrada.

- Mantener los campos exigidos por el profesor.

- Registrar esta nueva interacción relevante como entrada 2, copiando fielmente el prompt recibido, el trabajo realizado, la decisión tomada y su justificación.

- Registrar las correcciones documentales sin ocultar que inicialmente se generaron borradores.

- No inventar errores de código de IA.

IMPORTANTE

No modifiques app/, next.config.ts, package.json ni otros archivos de código.

No crees todavía Navbar, Footer, Hero ni páginas corporativas.

No ejecutes git commit ni git push.

Al finalizar, muestra los archivos modificados, un resumen de cambios y cualquier justificación que todavía deba revisar personalmente. Luego detente y espera la siguiente instrucción.

Resumen de la respuesta: se revisaron el estado de Git y los tres documentos; se confirmó que evidencias/build-inicial.png existe. Se corrigieron los títulos y el tono de README.md y DECISIONES.md, se documentó la estructura real, se añadió el enlace a la captura y se dejaron explícitamente pendientes las rutas y los componentes corporativos. Se amplió DECISIONES.md con las funciones de archivos y comandos y las ventajas de Next.js frente a una SPA. Esta entrada se incorporó conservando el prompt inicial de la entrada 1.

Decisión tomada (modificado): actualizar la documentación generada inicialmente como borrador, mantener las cinco elecciones técnicas que ya usa el repositorio y dejar constancia de que la explicación de Turbopack es una posibilidad sin aplicar cambios de configuración.

Justificación: la documentación anterior describía evidencias/ como vacía, aunque ahora existe una captura, y contenía expresiones de borrador que el estudiante pidió retirar de los documentos de presentación. Los argumentos técnicos se formulan sobre el proyecto actual y las ventajas futuras se describen como posibilidades, no como funcionalidades o mediciones ya comprobadas. Las motivaciones personales definitivas siguen correspondiendo al estudiante.