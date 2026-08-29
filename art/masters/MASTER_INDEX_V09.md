# ELYNDRAN — Índice canónico de masters v0.9

Este directorio es la ubicación única de los raster finales que consume la edición web vigente.

Convención: `<SECCION>-<POSICION>.webp`, sin texto incrustado. La posición se refiere al orden editorial, no a una numeración antigua.

## Estado verificado de producción

Verificado sobre `main` tras `e12cbacb4987c0c91eb219a75969e4792858ff28`.

### Raster finales físicamente versionados

- `PROLOGO-A.webp` — presente.
- `I-A.webp` — presente.
- `II-A.webp` — presente.
- `IV-A.webp` — presente.

Estos cuatro archivos son raster reales dentro de `art/masters/`; no dependen de un enlace externo para que GitHub Pages pueda servirlos.

### Masters prioritarios todavía pendientes

- `X-A.webp`
- `XIV-A.webp`
- `XV-A.webp`
- `XVI-A.webp`
- `I-I1.webp`
- `V-A.webp`
- `XXV-A.webp`
- `XXV-I2.webp`

No considerar ninguno de estos ocho como terminado hasta que exista físicamente en este directorio y supere QA de continuidad.

## Oleadas prioritarias

| Orden | Archivo final | Estado real | Sección | Posición narrativa | Función |
|---:|---|---|---|---|---|
| 01 | `X-A.webp` | pendiente | X | apertura / tras revelarse la cara inferior | fijar la cara inferior parcial que debe repetirse en XXIV |
| 02 | `XIV-A.webp` | pendiente | XIV | apertura / tras entrar en la bóveda | benchmark bóveda húmeda + partículas ordinarias en luz lateral |
| 03 | `XV-A.webp` | pendiente | XV | apertura / interior de cápsula | cápsula estrecha, prefiltro y cinta de organización |
| 04 | `XVI-A.webp` | pendiente | XVI | tras preparar la prueba | dorso de mano y muñeca izquierdas; casco cerrado; cápsula próxima |
| 05 | `PROLOGO-A.webp` | **versionado** | Prólogo | después de establecer el descenso | cápsula pequeña descendiendo hacia la red de raíces |
| 06 | `I-A.webp` | **versionado** | I | tras salir de la cápsula | protagonista pequeño sobre la primera raíz |
| 07 | `I-I1.webp` | pendiente | I | al descubrir el primer mirador | primer mirador y destellos lejanos sin convertirlos en inteligencia |
| 08 | `II-A.webp` | **versionado** | II | tras revelar el nivel inferior | discos y escala vertical; fauna pequeña/ecológica si corresponde |
| 09 | `IV-A.webp` | **versionado** | IV | tras distinguir la geometría | estructura exacta de tres brazos, referencia para XVII |
| 10 | `V-A.webp` | pendiente | V | al abrirse el micro-bioma | bóveda densa, filamentos y cambio ambiental |
| 11 | `XXV-A.webp` | pendiente | XXV | regreso al mirador | mismo mirador de I + cascada muy distante, reflejo físico |
| 12 | `XXV-I2.webp` | pendiente | XXV | tras ganar escala regional | ≥7 cascadas irregulares, raíces multinivel y 1–2 planeadores distantes |

## Cartografía

Los dos masters cartográficos exigidos por v0.9 ya existen físicamente:

- `art/maps/MAP_A_LOCAL_MASTER.svg`: mapa local, conocimiento estrictamente ≤ XII.
- `art/maps/MAP_B_XXV_EXPANSION_MASTER.svg`: ampliación regional tras XXV; nunca mapa global.

Su existencia no sustituye el QA editorial: Mapa A debe seguir congelado en conocimiento ≤ XII y Mapa B puede incorporar los cambios conocidos hasta XXV.

## Reglas de continuidad visual

- Un único protagonista humano respecto a su expedición; Aster no visible/localizada.
- EVA blanco/gris usado, juntas oscuras y mochila rectangular coherente.
- Casco cerrado en exterior; única piel exterior deliberada: mano/muñeca izquierdas en XVI.
- Cápsula pequeña, accidentada y progresivamente reparada; nunca laboratorio amplio.
- Sin ciudades, runas, puertas, ventanas o civilización confirmada antes de que el manuscrito lo gane.
- Fauna ecológica, no monstruosa; sin bioluminiscencia gratuita.
- Los regresos I↔XXV, IV↔XVII, X↔XXIV, XIII↔XIX↔XXII e IX↔XXIII conservan geografía y objetos.

## Integración web

La edición pública vigente entra por `index.html` y redirige a `book.html`. `book.html` intenta cargar cada master desde `art/masters/`, priorizando `.webp` antes que formatos de respaldo, y solo muestra la figura cuando el archivo existe.

Por tanto:

1. el estado de producción se determina por archivos reales versionados, no por briefs o SVG puente;
2. un master pendiente no debe producir una imagen rota en el libro;
3. cualquier master nuevo debe entrar como raster local antes de considerarse aprobado para Pages.

## Gate previo a XXVI

No escribir XXVI todavía. Antes deben quedar cerrados los huecos editoriales reales definidos por v0.9: continuidad final, cartografía regional y un conjunto visual suficientemente sólido para evitar reconstrucciones inmediatas del libro/PDF. La primera prioridad sigue siendo la oleada `X-A → XIV-A → XV-A → XVI-A`.
