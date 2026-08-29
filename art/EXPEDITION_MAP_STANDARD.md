# ELYNDRAN — Estándar del mapa de expedición v1.0

## Función

El mapa de expedición es un recurso **diegético y editorial**. Existe porque el protagonista necesita volver, comparar rutas y registrar incertidumbre; en el libro ayuda al lector a comprender escala sin convertir Elyndran en un tablero.

Regla principal:

> **Lo cartografiado debe parecer pequeño. Lo no cartografiado debe parecer inmenso.**

El estándar está alineado con **Prólogo + I–XXV** y con:

- `art/maps/MAP_A_LOCAL_SPEC.md`
- `art/maps/MAP_B_XXV_EXPANSION_SPEC.md`

## Regla temporal

Cada mapa queda congelado en el conocimiento disponible en el punto editorial donde aparece. Un dato verdadero en XXV sigue siendo un **spoiler** si se imprime en una lámina situada tras XII.

## Mapa A — Sector local · conocimiento ≤ XII

Momento: después de XII o como transición antes de XIII.

Debe mostrar:

- cápsula;
- primera ruta y primer mirador;
- depresiones, arañazos y depresión pequeña conocidos hasta XII;
- bifurcación;
- rama descendente: fibras, discos, fauna acuática y continuidad desconocida;
- rama horizontal: tres brazos, borde roto y plataforma parcial, incluida la aproximación inferior conocida;
- rama ascendente: bóveda, placas cobrizas, criatura de seis apoyos y terraza;
- verticalidad y niebla.

No puede mostrar descubrimientos posteriores a XII. En particular: **no `PASO VARIABLE`, no raíz inferior desplazada, no alternativa superior habitual, no `NODO EXTERIOR 1`, no región de cascadas, no planeadores.**

## Mapa B — Ampliación tras XXV

Momento: inmediatamente después de XXV — `La escala que faltaba`.

Puede actualizar el sector local con conocimiento acumulado hasta XXV y debe añadir:

- primer mirador como salida del sector local;
- tramo de raíz ensanchada;
- `NODO EXTERIOR 1`;
- dos continuidades del nodo sin explorar;
- ruta izquierda recorrida;
- región elevada sobre la niebla;
- región de cascadas;
- masa de raíces entrelazadas;
- cascada doble y arco oscuro como referencias;
- avistamientos neutros de fauna planeadora;
- ruptura provisional;
- niveles inferiores visibles sin suelo planetario.

Mapa B sigue siendo **regional**, no planetario.

## Escala

No usar kilómetros, coordenadas globales ni porcentajes del planeta si el texto no los sostiene. Se permiten distancias de recorrido canónicas, cotas relativas `SUBE` / `BAJA`, escala operativa variable y abanicos de incertidumbre.

El dato de XXV de que el sector explorado ocupa menos de una quinta parte de la pantalla describe solo la pantalla operativa del protagonista; nunca `20 % de Elyndran`.

## Lenguaje gráfico

- master vectorial o raster con fondo transparente cuando sea viable; el papel marfil pertenece a la maqueta;
- tinta gris carbón/grafito;
- acentos mínimos;
- dibujo técnico-orgánico, no mapa fantástico;
- recorrido = línea continua;
- observado/no recorrido = línea discontinua;
- dirección estimada = línea fina o abanico;
- límite no accesible = final explícito;
- niebla/cortes laterales para niveles verticales;
- etiquetas legibles en 6×9.

Prohibidos: pergamino medieval, rosa ornamental, runas, neón, radar, HUD, minimapa circular, iconos de misión, enemigos, tesoros y porcentaje explorado.

## Regla de conocimiento

No introducir topónimos no usados, accesos no recorridos, estructuras ocultas, ruta completa a la cascada, superficie superior de plataforma, ciudades, ruinas, asentamientos o señales de habitantes no demostradas. Una hipótesis se representa como incertidumbre, nunca como hecho.

## Espacio desconocido

### Mapa A

Al menos 45–55 % sin cartografiar o disuelto en niebla/márgenes.

### Mapa B

La red local se reduce visualmente. La zona realmente recorrida ocupa aproximadamente un tercio o menos de la lámina útil; el resto son márgenes sin datos, raíces observadas a distancia y niveles no recorridos.

No dibujar contorno planetario.

## Integración editorial

Los mapas son láminas y no cuentan como una de las 1–2 imágenes interiores habituales. Pueden ir a página completa, doble página o transición. No superponer sobre ilustración cinematográfica ni convertirlos en interfaz flotante.

## Continuidad A → B

Cápsula, primera ruta, bifurcación y primer mirador mantienen geometría relativa. B escala y extiende A, pero también puede registrar **cambios posteriores** del sector local si se distinguen claramente del estado mostrado en A.

El primer mirador queda en un borde útil de A para que B prolongue desde allí hacia `NODO EXTERIOR 1`.

## Evolución futura

No crear un tercer mapa completo por existir un capítulo nuevo. Actualizar cartografía solo cuando cambie de verdad la comprensión espacial: local → regional → Elyndran conocido cuando exista evidencia suficiente. Nunca rellenar un mapa global por deseo editorial.

## Gate 10/10

Un mapa se aprueba únicamente si cumple:

1. frontera temporal correcta para su ubicación editorial;
2. orientación útil;
3. verticalidad comprensible;
4. zona explorada claramente menor que el mundo visible;
5. ningún spoiler;
6. coherencia con `CONTINUITY.md` y spec correspondiente;
7. apariencia de documento funcional de expedición;
8. legibilidad en 6×9;
9. capacidad de ampliarse sin redibujar geografía establecida.

**El mapa debe ampliar la sensación de mundo, no reducirla.**
