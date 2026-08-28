# ELYNDRAN — Plan de edición de lectura v0.3

## Estado editorial

La edición v0.2 termina en el Capítulo XIII. El manuscrito maestro llega ya al **Capítulo XXII — Antes de apoyar el pie**. La distancia es de nueve capítulos y la actualización del PDF queda por tanto **necesaria**, no opcional a largo plazo.

Además, los textos de XIII, XIX, XX, XXI y XXII han sido pulidos después de sus primeras versiones. La revisión más reciente de XXII conserva todos sus hechos, pero sustituye un cierre demasiado explicativo por una consecuencia corporal más limpia: el protagonista recuerda el apoyo que ya no estaba a la altura esperada y asume que una ruta conocida debe comprobarse antes de cargar peso. La futura edición debe tomar siempre los Markdown maestros actuales y no reutilizar texto ya maquetado o extraído de una edición anterior.

No debe reconstruirse tomando v0.2 como fuente textual. La autoridad es `manuscript/` + `CONTINUITY.md` y, mientras la integración literal de XXI–XXII siga pendiente por limitación de edición segura del archivo largo, los deltas `CONTINUITY_DELTA_XXI.md` y `CONTINUITY_DELTA_XXII.md`. La dirección visual vigente es `art/ILLUSTRATION_MANIFEST_V03.md`.

## Cambios narrativos que debe incorporar

- XIII: misma escena y canon, pero con una reescritura que elimina explicación metanarrativa del hambre y deja que la presión de comida aparezca por conducta y mirada.
- XIV: aire exterior parcialmente compatible en composición gaseosa, pero con particulado y coste de filtro; ninguna respiración directa.
- XV: la cápsula no es una esclusa; limpieza, recirculación y prefiltro convierten el retorno en coste de refugio.
- XVI: primera exposición dérmica controlada, 34 segundos, solo mano/muñeca izquierdas y casco cerrado.
- XVII: retorno a la estructura de tres brazos; el tono agudo depende parcialmente del estado de su película transparente sin resolver mecanismo.
- XVIII: fallo y reparación del módulo térmico; la energía se convierte en recurso con generación variable, cargas competidoras y prioridad explícita para la baliza.
- XIX: retorno a la misma placa cobriza de XIII; parte de la película oscura vuelve a ocupar superficie previamente despejada, sin demostrar crecimiento, renovabilidad, comestibilidad ni mecanismo. La revisión posterior corrige una sobreafirmación sobre carga de filtros y poda explicación redundante.
- XX: jornada de reposo en la cápsula por rigidez de rodilla; aparece una recepción anómala en banda de emergencia aproximadamente 37 segundos antes de una baliza automática. No se reproduce en dos ciclos posteriores y no se identifica su fuente. La revisión posterior poda explicaciones y el inventario final de misterios, y fija con más claridad que la anomalía se **descubre retrospectivamente en el búfer** tras la transmisión; no fue observada en directo antes de que ocurriera.
- XXI: el protagonista desplaza una transmisión programada +7 min 14 s sin cambiar mensaje, potencia ni frecuencia. La segunda recepción anómala comienza 36,91 s antes de la nueva hora y vuelve a parecerse solo parcialmente al encabezado posterior. Como el controlador conocía la reprogramación, el resultado refuerza la relación entre los eventos pero **no demuestra predicción**; el acoplamiento interno sigue siendo una explicación válida. La revisión actual poda staccato excesivo, reduce prosa procedimental y cierra el capítulo sin verbalizar una conclusión que el protagonista todavía no puede sostener.
- XXII: el protagonista vuelve a la primera ruta para comprobar cuerpo y camino, no para perseguir la señal. La zona del antiguo marcador reflectante deja de ser una referencia superficial perfecta; adopta una alineación geométrica alternativa. En la zona de las depresiones no se confirma cambio nuevo. Durante el regreso, dos golpes profundos coinciden con un descenso de unos centímetros de una raíz usada como apoyo habitual; evita una caída mediante la raíz superior y el aseguramiento corto y confirma una alternativa de paso. La revisión posterior conserva esa secuencia y elimina un cierre conceptual demasiado explícito: el capítulo termina en la memoria física del apoyo desplazado y en la necesidad de verificar el terreno antes de confiar en él.

## Prioridad visual previa a maquetación definitiva

1. Resolver la revisión del Capítulo X para garantizar que la plataforma no se revela de forma completa.
2. Generar/aprobar XIV, XV y XVI con fotorealismo y continuidad estricta.
3. Generar XVII manteniendo exactamente la estructura del IV si puede alcanzar el mismo nivel.
4. Generar XVIII como escena interior de mantenimiento, sin convertir una avería menor en espectáculo tecnológico.
5. Generar XIX solo si la diferencia de cobertura de la película puede mostrarse con sutileza fotográfica; si exige exageración visual, preferir apertura tipográfica.
6. Generar XX solo si la anomalía puede permanecer pequeña y técnicamente plausible; si la imagen exige un “37” gigante, holograma, Aster o un eco temporal visible, preferir apertura tipográfica.
7. Generar XXI únicamente si la escena puede seguir siendo una prueba técnica contenida: mismo interior de cápsula, receptor pequeño, protagonista esperando y ninguna visualización de futuro, doble temporal o mensaje inteligible.
8. Generar XXII únicamente si puede leerse que el peligro está en un apoyo conocido que ha cambiado unos centímetros. No convertirlo en derrumbe, criatura visible ni accidente de acción.

Si XVII–XXII no alcanzan el estándar visual cuando XIV–XVI estén aprobados, se permite una apertura tipográfica sobria para esos capítulos en un checkpoint de lectura antes que introducir una imagen claramente inferior. No se permite usar concept art genérico, imágenes con texto incrustado o ilustraciones que revelen información no descubierta.

## Maquetación objetivo

- Formato 6 × 9 pulgadas.
- Portada limpia con título compuesto por la maqueta, nunca dentro de la imagen.
- Jerarquía consistente de Prólogo y capítulos.
- Tipografía editorial con soporte español completo.
- Márgenes profesionales y páginas de lectura sin saturación gráfica.
- Una apertura visual por capítulo solo cuando exista imagen aprobada; donde no exista, apertura tipográfica deliberada, no placeholder pobre.
- Índice paginado y marcadores PDF si la herramienta de composición lo permite de forma fiable.
- Imágenes próximas a su escena correspondiente, sin pies salvo que aporten información editorial real.

## QA obligatorio de v0.3

- Construir desde los Markdown maestros actuales.
- Confirmar que contiene Prólogo + XXII en orden.
- Confirmar que XIII, XIX, XX, XXI y XXII corresponden a sus revisiones actuales.
- Comprobar caracteres españoles y símbolos especiales sin sustituciones.
- Comprobar tamaño 6 × 9 en todas las páginas.
- Renderizar todas las páginas y revisar visualmente portada, aperturas, cortes, márgenes, páginas casi vacías, imágenes y continuidad gráfica.
- Verificar que ninguna imagen contiene texto incrustado utilizado como título principal.
- Verificar que XI no muestra Aster, X no resuelve la plataforma y XIV–XXII respetan los límites de exposición/respiración del canon.
- Verificar especialmente que XIX no convierta la película oscura en alimento, cultivo o regeneración confirmada por medio de la imagen.
- Verificar que XX no convierta la recepción anómala en prueba visual de Aster, viaje temporal, predicción o mensaje inteligible, ni la represente como una señal contemplada conscientemente antes de la transmisión.
- Verificar que XXI no convierta el desplazamiento horario en una prueba visual de que Elyndran “conoce el futuro”; la posibilidad de acoplamiento interno debe seguir siendo físicamente plausible en la imagen.
- Verificar que XXII no convierta los golpes profundos en criatura, maquinaria visible, onda energética ni causa demostrada del movimiento de la raíz; el desplazamiento debe ser local y físicamente modesto.
- Registrar páginas, tamaño final, fuentes y limitaciones conocidas.

## Bloqueo actual

El repositorio no conserva toda la biblioteca raster utilizada en v0.2 y las ilustraciones XIV–XXII aún no están aprobadas. Tampoco existe en el repositorio una fuente visual verificable suficiente para afirmar una auditoría pixel a pixel de todas las imágenes antiguas. Por ello, este plan fija la reconstrucción como trabajo editorial obligatorio, pero **no declara una v0.3 ya maquetada ni visualmente revisada**.

Con nueve capítulos de distancia, la edición no debe seguir creciendo indefinidamente por detrás del manuscrito. El siguiente checkpoint editorial debe ejecutarse en cuanto se resuelvan dos condiciones mínimas:

1. Capítulo X auditado/reemplazado sin revelar la plataforma.
2. XIV, XV y XVI con imágenes fotorealistas aprobadas y coherentes entre sí.

En ese punto, XVII–XXII pueden entrar con aperturas tipográficas si sus imágenes todavía no alcanzan el estándar. No es necesario esperar a ilustrar todos los capítulos nuevos para reconstruir v0.3; sí es necesario evitar una edición visualmente peor que v0.2.

La siguiente publicación PDF debe priorizar coherencia, legibilidad y fidelidad canónica sobre cobertura visual forzada.
