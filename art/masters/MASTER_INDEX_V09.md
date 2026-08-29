# ELYNDRAN — Índice canónico de masters v0.9

Este directorio es la ubicación única de los raster finales que consume `reader.html`.

Convención: `<SECCION>-<POSICION>.webp`, sin texto incrustado. La posición se refiere al orden editorial, no a una numeración antigua.

## Oleadas prioritarias

| Orden | Archivo final | Sección | Posición narrativa | Función |
|---:|---|---|---|---|
| 01 | `X-A.webp` | X | apertura / tras revelarse la cara inferior | fijar la cara inferior parcial que debe repetirse en XXIV |
| 02 | `XIV-A.webp` | XIV | apertura / tras entrar en la bóveda | benchmark bóveda húmeda + partículas ordinarias en luz lateral |
| 03 | `XV-A.webp` | XV | apertura / interior de cápsula | cápsula estrecha, prefiltro y cinta de organización |
| 04 | `XVI-A.webp` | XVI | tras preparar la prueba | dorso de mano y muñeca izquierdas; casco cerrado; cápsula próxima |
| 05 | `PROLOGO-A.webp` | Prólogo | después de establecer el descenso | cápsula pequeña descendiendo hacia la red de raíces |
| 06 | `I-A.webp` | I | tras salir de la cápsula | protagonista pequeño sobre la primera raíz |
| 07 | `I-I1.webp` | I | al descubrir el primer mirador | primer mirador y destellos lejanos sin convertirlos en inteligencia |
| 08 | `II-A.webp` | II | tras revelar el nivel inferior | discos y escala vertical; fauna pequeña/ecológica si corresponde |
| 09 | `IV-A.webp` | IV | tras distinguir la geometría | estructura exacta de tres brazos, referencia para XVII |
| 10 | `V-A.webp` | V | al abrirse el micro-bioma | bóveda densa, filamentos y cambio ambiental |
| 11 | `XXV-A.webp` | XXV | regreso al mirador | mismo mirador de I + cascada muy distante, reflejo físico |
| 12 | `XXV-I2.webp` | XXV | tras ganar escala regional | ≥7 cascadas irregulares, raíces multinivel y 1–2 planeadores distantes |

## Cartografía

- `art/maps/MAP_A_LOCAL_MASTER.svg`: mapa local, conocimiento estrictamente ≤ XII.
- `art/maps/MAP_B_XXV_EXPANSION_MASTER.svg`: ampliación regional tras XXV; nunca mapa global.

## Reglas de continuidad visual

- Un único protagonista humano respecto a su expedición; Aster no visible/localizada.
- EVA blanco/gris usado, juntas oscuras y mochila rectangular coherente.
- Casco cerrado en exterior; única piel exterior deliberada: mano/muñeca izquierdas en XVI.
- Cápsula pequeña, accidentada y progresivamente reparada; nunca laboratorio amplio.
- Sin ciudades, runas, puertas, ventanas o civilización confirmada antes de que el manuscrito lo gane.
- Fauna ecológica, no monstruosa; sin bioluminiscencia gratuita.
- Los regresos I↔XXV, IV↔XVII, X↔XXIV, XIII↔XIX↔XXII e IX↔XXIII conservan geografía y objetos.

## Integración web

`reader.html` intenta cargar cada master en `art/masters/` como `.webp`, `.png` o `.jpg` y solo lo muestra cuando el archivo existe. Por tanto, este índice puede crecer sin crear huecos rotos en la edición web.
