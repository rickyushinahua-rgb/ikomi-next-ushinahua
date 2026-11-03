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

## Entrada 3 — 03/11/2026 — identidad visual base

**Objetivo:** configurar los colores, la tipografía, los metadatos y una portada temporal para IKOMI PERÚ, sin adelantar las rutas ni los componentes corporativos.

**Prompt utilizado (texto íntegro del usuario):**

```text
PROYECTO: IKOMI PERÚ — Evaluación 03 de Desarrollo de Aplicaciones Web Avanzado, TECSUP.

CONTEXTO:
Estamos recreando el sitio web corporativo https://www.ikomiperu.com/ con Next.js 16.4.4, App Router, TypeScript, Tailwind CSS 4 y ESLint.
El profesor evalúa configuración, rutas, navegación, componentes reutilizables y uso crítico de IA, con 4 puntos por criterio, total 20.

Repositorio: https://github.com/rickyushinahua-rgb/ikomi-next-ushinahua
Rama: main.
La documentación inicial ya está publicada en GitHub.
El proyecto utiliza app/ directamente en la raíz y no utiliza src/.

OBJETIVO ÚNICO DE ESTA ETAPA:
Configurar la identidad visual base del proyecto para preparar el desarrollo posterior de las páginas corporativas.

REGLAS:
1. Ningún archivo de código debe superar las 350 líneas, preferiblemente menos de 250.
2. Código claro, ordenado, legible y modular.
3. No comprimir código en líneas demasiado largas.
4. No utilizar Pages Router, next/router ni getStaticProps.
5. Mantener Server Components por defecto.
6. No utilizar 'use client' salvo necesidad real.
7. No instalar paquetes adicionales sin justificarlo.
8. No crear todavía Navbar, Footer, Hero, ProductCard, SectionTitle ni ContactForm.
9. No desarrollar todavía las rutas Nosotros, Servicios, Productos, Marcas ni Contacto.
10. No ejecutar git commit ni git push; esos pasos se harán manualmente.

ARCHIVOS PERMITIDOS:
- app/layout.tsx
- app/globals.css
- app/page.tsx
- DECISIONES.md
- BITACORA_IA.md
- README.md, solo si es necesario actualizar información que haya quedado desactualizada.

TAREAS:

1. Revisar la configuración existente de Next.js y Tailwind 4 antes de modificar archivos.

2. Configurar las variables de colores corporativos:
   --color-primary: #143F77;
   --color-secondary: #2169B0;
   --color-dark: #152235;
   --color-background: #F3F6FA;
   --color-white: #FFFFFF;

   Integrarlas correctamente con Tailwind CSS 4 usando la configuración actual. No crear una configuración antigua de Tailwind innecesariamente.

3. Configurar una fuente profesional con next/font. Preferir Geist si ya está instalada o configurada. Evitar importar tipografías desde CDN externas.

4. Actualizar app/layout.tsx:
   - html lang="es".
   - Metadata global para IKOMI PERÚ, con título y descripción relacionados con repuestos automotrices.
   - Conservar la importación de globals.css.
   - Mantener el layout como Server Component.
   - No agregar Navbar ni Footer todavía; se implementarán en otro avance.

5. Actualizar app/globals.css:
   - Mantener Tailwind CSS 4.
   - Centralizar colores y tipografía.
   - Agregar estilos globales sencillos y consistentes.
   - Evitar duplicaciones y reglas innecesarias.
   - Asegurar legibilidad y contraste.

6. Actualizar app/page.tsx para sustituir la plantilla create-next-app por una portada TEMPORAL sencilla:
   - Nombre IKOMI PERÚ.
   - Subtítulo relacionado con repuestos automotrices.
   - Presentación visual utilizando los nuevos colores.
   - No convertir esta pantalla temporal en la página corporativa definitiva.
   - No utilizar imágenes externas todavía.

7. Actualizar DECISIONES.md explicando las elecciones reales sobre colores, tipografía y estrategia de estilos.

8. Registrar esta interacción de forma fiel en BITACORA_IA.md con objetivo, prompt completo, resumen de respuesta, decisión tomada y justificación. No inventar errores ni pruebas.

9. Si README.md describe todavía la plantilla inicial de Next.js, actualizar solamente esa información para reflejar el nuevo estado.

VERIFICACIONES:
- Ejecutar npm run build.
- Ejecutar npx eslint .
- Verificar que ningún archivo de código modificado supere las 350 líneas.
- Si una verificación falla, explicar la causa y corregir únicamente lo necesario.
- No inventar resultados de comprobación.

AL FINALIZAR:
- Mostrar archivos modificados.
- Explicar brevemente cada modificación.
- Indicar resultados reales de build y ESLint.
- Detenerse al terminar esta etapa.
- No crear commits ni hacer push.
```

**Resumen de la respuesta:** se revisaron `next.config.ts`, la configuración de Tailwind 4, `app/` y las guías instaladas de Next.js. Se definieron los cinco colores mediante `@theme`, se conservó Geist con `next/font`, se actualizaron el idioma y los metadatos globales y se sustituyó la plantilla por una portada temporal. Se actualizaron `DECISIONES.md` y las referencias desactualizadas de `README.md`.

**Decisión tomada (aceptado con ajustes):** usar los valores de color solicitados, reutilizar Geist y limitar la página inicial a una presentación temporal; mantener componentes de servidor y no añadir rutas, dependencias ni componentes corporativos.

**Justificación:** `@theme` expone tokens y utilidades reutilizables en Tailwind 4 sin un archivo de configuración adicional. La fuente ya estaba configurada, y una portada breve permite comprobar la identidad visual sin adelantarse a las etapas siguientes.

**Verificaciones de esta interacción:** `npm run build` terminó correctamente: compiló, comprobó TypeScript y generó las páginas estáticas `/` y `/_not-found`. Mostró una advertencia no bloqueante: Next.js ignoró el `package-lock.json` de `Documents` por estar fuera del repositorio e indicó que se puede establecer `turbopack.root` para utilizar ese directorio. `npx eslint .` finalizó sin errores y sin mensajes. Recuento de líneas de código modificado: `app/layout.tsx` (22), `app/globals.css` (18) y `app/page.tsx` (24); ninguno supera 350 líneas. No se modificó `next.config.ts` ni se guardaron capturas nuevas en esta interacción.

## Entrada 4 — 03/11/2026 — Navbar y Footer

**Objetivo:** crear únicamente la navegación global y el pie de página, integrarlos al layout raíz y mantener identificadas como pendientes las demás páginas y componentes.

**Prompt utilizado (texto completo del usuario; las tres imágenes se adjuntaron como referencias visuales y se conservan identificadas aquí):**

```text
[Image 1] [Image 2] [Image 3] PROYECTO: IKOMI PERÚ — Evaluación 03 de Desarrollo de Aplicaciones Web Avanzado, TECSUP.

CONTEXTO:
Estamos recreando académicamente https://www.ikomiperu.com/ con Next.js 16.4.4, App Router, TypeScript y Tailwind CSS 4.
Repositorio: https://github.com/rickyushinahua-rgb/ikomi-next-ushinahua
Carpeta app/ en la raíz, sin src/.
Ya configuramos colores, tipografía, metadata y una portada temporal.
No realizaremos despliegue por limitaciones de tiempo.

OBJETIVO DE ESTA ETAPA:
Implementar únicamente los componentes reutilizables Navbar y Footer, integrados en app/layout.tsx, cumpliendo los criterios 3 y 4 de la rúbrica.

REQUISITOS DEL NAVBAR:
1. Crear components/layout/Navbar.tsx.
2. Utilizar Link de next/link para todos los enlaces internos.
3. Incluir Inicio (/), Nosotros (/nosotros), Servicios (/servicios), Productos (/productos), Marcas (/marcas) y Contáctenos (/contacto).
4. Utilizar usePathname de next/navigation para resaltar el enlace activo.
5. Aplicar 'use client' exclusivamente porque Navbar necesita usePathname y estado interactivo.
6. Implementar menú hamburguesa responsive para pantallas pequeñas con useState.
7. El menú debe abrirse, cerrarse y actualizarse al navegar.
8. Incluir atributos accesibles como aria-label, aria-expanded y aria-controls.
9. Mantener una altura equilibrada, navegación legible y colores corporativos.
10. Mostrar el nombre IKOMI PERÚ como identidad temporal. No inventar un logo oficial.
11. Los enlaces apuntarán a rutas que construiremos en etapas posteriores.

REQUISITOS DEL FOOTER:
1. Crear components/layout/Footer.tsx.
2. Mantenerlo como Server Component, sin 'use client'.
3. Utilizar las variables de color existentes.
4. Incluir una descripción corporativa breve de IKOMI PERÚ.
5. Incluir enlaces internos a las secciones solicitadas.
6. Mostrar información de contacto solamente si está verificada en una fuente del proyecto; de lo contrario, evitar inventar teléfono, correo o dirección.
7. Incluir derechos de autor con el año actual.

INTEGRACIÓN:
1. Importar Navbar y Footer en app/layout.tsx.
2. Colocar Navbar antes de children y Footer después de children.
3. Asegurar que el contenido principal tenga una estructura semántica adecuada.
4. No modificar el comportamiento actual de metadata ni next/font.
5. Mantener la portada temporal de app/page.tsx.

REGLAS DE CÓDIGO:
- Máximo 350 líneas por archivo, preferiblemente menos de 250.
- Separar responsabilidades.
- Código claro, legible y mantenible.
- No comprimir código para cumplir el límite.
- No usar Pages Router ni APIs obsoletas.
- Evitar dependencias adicionales.
- No crear las páginas Nosotros, Servicios, Productos, Marcas ni Contacto todavía.
- No crear Hero, ProductCard, SectionTitle ni ContactForm en esta etapa.
- No realizar commits ni push.

DOCUMENTACIÓN:
1. Actualizar DECISIONES.md explicando por qué Navbar es Client Component y Footer es Server Component.
2. Explicar por qué utilizamos Link y usePathname.
3. Registrar esta interacción real en BITACORA_IA.md como siguiente entrada, incluyendo el prompt completo, resumen, decisión y justificación.
4. Actualizar README.md para reflejar únicamente los componentes implementados, sin presentar páginas pendientes como terminadas.

VERIFICACIONES:
1. Ejecutar npm run build.
2. Ejecutar npx eslint .
3. Comprobar que ningún archivo de código supera las 350 líneas.
4. Verificar visualmente la navegación en desktop y móvil si el entorno lo permite.
5. No afirmar que las rutas pendientes funcionan ni inventar resultados.

Al terminar, mostrar los archivos modificados, las pruebas realizadas y una explicación breve de cada componente. Detenerse al finalizar esta etapa.
```

**Resumen de la respuesta:** se crearon `components/layout/Navbar.tsx` con enlaces `Link`, ruta activa con `usePathname` y menú móvil accesible, y `components/layout/Footer.tsx` como Server Component con enlaces y copyright sin datos de contacto no verificados. Se integraron ambos en `app/layout.tsx` y se conservó el contenido de la portada temporal, ajustando solo su crecimiento para que conviva con el encabezado y el pie. Se actualizaron `DECISIONES.md` y `README.md` con el estado real y se registraron dos fallos detectados durante las verificaciones, corregidos antes de finalizar.

**Decisión tomada (modificado):** aceptar la separación Client/Server y los enlaces solicitados, pero cambiar dos detalles de la primera implementación al detectar un fallo de ESLint y otro de compilación; no adelantar rutas ni el experimento de Network.

**Justificación:** el Navbar requiere estado de menú y lectura de la URL, mientras que el Footer no requiere interactividad. Corregir los problemas reales permite cumplir las verificaciones sin desactivar ESLint ni `cacheComponents` y sin convertir innecesariamente el Footer en cliente.

**Caso real 1 — estado del menú (código inicial rechazado por ESLint):**

Antes:

```tsx
const [menuOpen, setMenuOpen] = useState(false);
useEffect(() => {
  setMenuOpen(false);
}, [pathname]);
```

Después:

```tsx
function Navbar() {
  const pathname = usePathname();
  return <NavbarContent key={pathname} pathname={pathname} />;
}

function NavbarContent({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  // El botón abre o cierra el menú y los enlaces lo cierran al hacer clic.
}
```

`npx eslint .` detectó `react-hooks/set-state-in-effect` al actualizar estado de forma síncrona dentro de `useEffect`. El estado del menú reside en un componente identificado por la ruta: al cambiar `pathname`, React lo reinicia incluso si se navega con el historial. El botón y los enlaces lo actualizan mediante eventos.

**Caso real 2 — año del Footer (compilación inicial fallida):**

Antes:

```tsx
© {new Date().getFullYear()} IKOMI PERÚ. Todos los derechos reservados.
```

Después:

```tsx
async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
// Footer obtiene el año con: const year = await getCurrentYear();
```

`npm run build` compiló el código inicial pero falló al prerenderizar `/_not-found`: Next.js 16.4.4 con `cacheComponents` rechaza `new Date()` directamente en un Server Component prerenderizado. La función cacheada hace determinista el valor para el prerender y lo revalida diariamente; se siguió la guía de Next.js para valores de tiempo en Cache Components.

**Verificaciones finales:** tras las correcciones, `npm run build` completó la compilación, la comprobación de TypeScript y la generación estática de `/` y `/_not-found`; `npx eslint .` terminó sin errores ni mensajes. Next.js mantuvo la advertencia no bloqueante sobre el `package-lock.json` externo en `Documents`. Recuento de los archivos de código modificados o creados: `components/layout/Navbar.tsx` (100 líneas), `components/layout/Footer.tsx` (55), `app/layout.tsx` (28) y `app/page.tsx` (24). No se dispone en esta sesión de un navegador con inspección visual para comprobar manualmente menú de escritorio y móvil, y no se realizó el experimento de DevTools Network ni se generaron capturas nuevas.
