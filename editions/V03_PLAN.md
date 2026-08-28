# ELYNDRAN — Plan de edición de lectura v0.3

## Estado editorial

La edición v0.2 termina en el Capítulo XIII. El manuscrito maestro llega ya al **Capítulo XVIII — Lo que dejas encendido**. La distancia es de cinco capítulos y la actualización del PDF queda por tanto **necesaria**, no opcional a largo plazo.

No debe reconstruirse tomando v0.2 como fuente textual. La autoridad es `manuscript/` + `CONTINUITY.md`; la dirección visual vigente pasa a `art/ILLUSTRATION_MANIFEST_V03.md`.

## Cambios narrativos que debe incorporar

- XIV: aire exterior parcialmente compatible en composición gaseosa, pero con particulado y coste de filtro; ninguna respiración directa.
- XV: la cápsula no es una esclusa; limpieza, recirculación y prefiltro convierten el retorno en coste de refugio.
- XVI: primera exposición dérmica controlada, 34 segundos, solo mano/muñeca izquierdas y casco cerrado.
- XVII: retorno a la estructura de tres brazos; el tono agudo depende parcialmente del estado de su película transparente sin resolver mecanismo.
- XVIII: fallo y reparación del módulo térmico; la energía se convierte en recurso con generación variable, cargas competidoras y prioridad explícita para la baliza.

## Prioridad visual previa a maquetación definitiva

1. Resolver la revisión del Capítulo X para garantizar que la plataforma no se revela de forma completa.
2. Generar/aprobar XIV, XV y XVI con fotorealismo y continuidad estricta.
3. Generar XVII manteniendo exactamente la estructura del IV si puede alcanzar el mismo nivel.
4. Generar XVIII como escena interior de mantenimiento, sin convertir una avería menor en espectáculo tecnológico.

Si XVII o XVIII no alcanzan el estándar visual cuando XIV–XVI estén aprobados, se permite una apertura tipográfica sobria para esos capítulos en un checkpoint de lectura antes que introducir una imagen claramente inferior. No se permite usar concept art genérico, imágenes con texto incrustado o ilustraciones que revelen información no descubierta.

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
- Confirmar que contiene Prólogo + XVIII en orden.
- Comprobar caracteres españoles y símbolos especiales sin sustituciones.
- Comprobar tamaño 6 × 9 en todas las páginas.
- Renderizar todas las páginas y revisar visualmente portada, aperturas, cortes, márgenes, páginas casi vacías, imágenes y continuidad gráfica.
- Verificar que ninguna imagen contiene texto incrustado utilizado como título principal.
- Verificar que XI no muestra Aster, X no resuelve la plataforma y XIV–XVIII respetan los límites de exposición/respiración del canon.
- Registrar páginas, tamaño final, fuentes y limitaciones conocidas.

## Bloqueo actual

El repositorio no conserva toda la biblioteca raster de v0.2 y las ilustraciones XIV–XVIII aún no están aprobadas. Por ello, este commit fija la reconstrucción como trabajo editorial obligatorio, pero **no declara una v0.3 ya maquetada ni visualmente revisada**.

La siguiente publicación PDF debe priorizar coherencia y legibilidad sobre cobertura visual forzada.
