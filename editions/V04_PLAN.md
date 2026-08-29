# ELYNDRAN — PLAN DE EDICIÓN v0.4

## Objetivo

Construir la primera edición de lectura plenamente alineada con el manuscrito comprimido y el nuevo estándar visual.

La v0.4 **no** es una actualización incremental de v0.3. Debe reconstruirse desde las fuentes Markdown actuales.

## Fuente narrativa

Estructura vigente:

- Prólogo;
- Capítulos I–XXV;
- final actual: `XXV — La escala que faltaba`.

Fuente de canon: `CONTINUITY.md`.

Fuente de arte: `art/ILLUSTRATION_MANIFEST_V09.md`.

Mapas:

- `art/maps/MAP_A_LOCAL_SPEC.md`
- `art/maps/MAP_B_XXV_EXPANSION_SPEC.md`

## Por qué no reutilizar v0.3

La edición anterior queda obsoleta porque:

- utilizaba numeración anterior hasta XXVIII;
- el manuscrito ha sido comprimido y reescrito desde el Prólogo;
- tres arcos narrativos se han fusionado;
- la expansión final ahora es XXV;
- el estándar visual exige imágenes desde el comienzo;
- el índice/front matter antiguo ya no representa el libro actual.

No importar páginas del PDF antiguo salvo assets visuales que hayan sido auditados y sigan siendo válidos.

## Formato físico

- Trim: **6 × 9 pulgadas**.
- Papel visual: marfil cálido / off-white muy sutil.
- Márgenes de novela impresa, con margen interior ligeramente mayor.
- Tipografía de cuerpo: serif literaria de alta legibilidad.
- Interlineado contenido, sin aspecto de manuscrito ni dossier.
- Numeración discreta.
- Cabeceras mínimas o inexistentes en aperturas.
- Guiones de corte y control de viudas/huérfanas si el motor de composición lo permite.

## Arquitectura visual por capítulo

### Apertura

- nueva página;
- capítulo + título con jerarquía sobria;
- imagen de apertura 10/10 cuando exista master aprobado;
- si no existe, apertura tipográfica limpia: nunca rellenar con arte mediocre.

### Interiores

- 1–2 imágenes normalmente;
- 3 solo cuando la escena cambia realmente de espacio/escala y lo justifica;
- imágenes colocadas junto al momento narrativo correspondiente;
- evitar que una imagen revele una escena antes de que el lector llegue a ella.

### Tratamiento de imagen

- masters sin texto;
- encuadre editorial en maqueta;
- integración tonal ligera con el papel;
- no convertir fotografías en ilustración sepia uniforme;
- preservar negros, niebla y profundidad.

## Cobertura mínima antes de generar v0.4 completa

La edición completa solo se genera cuando existen, como mínimo, los siguientes masters aprobados:

### Canon visual / continuidad

- X-A — cara inferior de plataforma.
- XIV-A — bóveda + partículas.
- XV-A — cápsula/prefiltro.
- XVI-A — exposición de mano correcta.

### Ilustración desde el inicio

- Prólogo-A.
- I-A.
- I-I1 o equivalente interior.
- II-A.
- IV-A.
- V-A.

### Expansión

- XXV-A — primer mirador/cascada.
- XXV-I2 — región abierta + fauna planeadora.

### Mapas

- Mapa A local.
- Mapa B ampliado de XXV.

Si alguno no alcanza estándar, se usa apertura tipográfica o se retrasa la v0.4 completa. No insertar una imagen 7/10 para cumplir una lista.

## Índice

Generar desde cero:

- Prólogo — Treinta y siete segundos
- I — El primer paso
- II — Bajo la niebla
- III — La ruta que respira
- IV — Dos tonos en la niebla
- V — La ruta que sube
- VI — La segunda visita
- VII — La parte seca
- VIII — El agua que no era agua
- IX — Antes de tocar la raíz
- X — Una hora más
- XI — La órbita vacía
- XII — El mismo camino
- XIII — La mitad de una ración
- XIV — El aire que gastas
- XV — Lo que entra contigo
- XVI — La mano izquierda
- XVII — El tono que faltaba
- XVIII — Lo que dejas encendido
- XIX — La franja que vuelve
- XX — Antes de la llamada
- XXI — Antes de apoyar el pie
- XXII — Lo que entra
- XXIII — Lo que dejas fuera
- XXIV — Lo que pesa
- XXV — La escala que faltaba

No incluir números/páginas heredados.

## Mapas dentro del libro

### Mapa A

Insertar cuando la geografía local ya sea comprensible. Posición preferente: tras XII o como lámina de transición antes de XIII.

Debe parecer una cartografía que el lector ya puede entender y no un spoiler.

### Mapa B

Insertar después de XXV.

Debe contener el Mapa A reducido y dejar visible que incluso la expansión sigue siendo mínima frente al mundo.

No incluir mapa planetario global.

## Portada

La portada cinematográfica anterior puede seguir sirviendo como referencia promocional, pero debe auditarse frente al canon actual antes de entrar como portada v0.4.

La portada final debe:

- mostrar un único humano;
- casco cerrado;
- escala enorme de Elyndran;
- evitar revelar plataforma/civilización;
- no prometer criaturas gigantes o fantasía que el libro no contiene.

## QA editorial

Antes de considerar v0.4 publicable como edición de lectura:

### Texto

- comprobar orden Prólogo–XXV;
- títulos coinciden con nombres de archivos;
- sin referencias accidentales a capítulos renumerados antiguos;
- sin notas de continuidad/arte/producción dentro del libro;
- sin bloques Markdown rotos;
- sin caracteres Unicode perdidos.

### Páginas

Renderizar **todas** las páginas y revisar:

- viudas/huérfanas graves;
- líneas sueltas;
- títulos cortados;
- imágenes deformadas;
- imágenes demasiado oscuras en marfil;
- pies o textos invadiendo arte;
- páginas en blanco accidentales;
- números de página incorrectos;
- índices desalineados;
- cortes de capítulo poco elegantes.

### Imagen

- protagonista/traje consistentes;
- cápsula consistente;
- regresos geográficos reconocibles;
- ninguna imagen rompe canon;
- ninguna imagen principal contiene texto generado;
- no hay arte provisional presentado como master final.

### Mapas

- Mapa A y B legibles al tamaño impreso;
- no revelan plataforma completa;
- no añaden topónimos no ganados;
- no convierten zonas desconocidas en territorio conocido.

## PDF técnico

- PDF final de lectura con fuentes incrustadas según licencia/flujo permitido, sin compartir archivos de fuente aparte.
- Marcadores/bookmarks de capítulos si la herramienta de composición lo permite.
- Metadatos limpios: título `ELYNDRAN` y versión de edición.
- Tamaño razonable para móvil sin destruir detalle de las imágenes.
- Mantener una copia de alta calidad y, si es útil, una optimizada para lectura móvil.

## Gate de reconstrucción

No reconstruir v0.4 completa solo porque el texto ya esté renumerado.

Orden correcto:

1. canon consolidado — **HECHO**;
2. manifiesto visual v0.9 — **HECHO**;
3. specs de mapas A/B — **HECHO**;
4. producir y aprobar primeros masters 10/10 — pendiente;
5. generar mapas finales — pendiente;
6. montar PDF completo — pendiente;
7. render QA página por página — pendiente.

## Criterio final

La v0.4 debe sentirse desde el Prólogo como **una novela de ciencia ficción ilustrada profesional**, no como un manuscrito al que se le añadieron imágenes al final del proceso.