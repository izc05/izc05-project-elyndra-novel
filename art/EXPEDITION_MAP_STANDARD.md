# ELYNDRAN — Estándar del mapa de expedición v0.9

## Función

El mapa de expedición es un recurso **diegético y editorial**. Existe porque el protagonista necesita volver, comparar rutas y registrar incertidumbre; en el libro ayuda al lector a comprender escala sin convertir Elyndran en un tablero.

Regla principal:

> **Lo cartografiado debe parecer pequeño. Lo no cartografiado debe parecer inmenso.**

Este estándar está alineado con el manuscrito vigente: **Prólogo + I–XXV**. Las especificaciones de producción son:

- `art/maps/MAP_A_LOCAL_SPEC.md`
- `art/maps/MAP_B_XXV_EXPANSION_SPEC.md`

## Jerarquía vigente

La edición v0.4 utiliza únicamente dos mapas editoriales completos.

### Mapa A — Sector local

Momento recomendado: después de XII o como lámina de transición antes de XIII.

Debe mostrar:

- cápsula;
- primera ruta y primer mirador;
- depresiones y paso variable;
- bifurcación;
- rama descendente: fibras, discos, fauna acuática y continuidad desconocida;
- rama horizontal: estructura de tres brazos, borde roto y cara inferior parcial de plataforma;
- rama ascendente: bóveda, placas cobrizas, criatura de seis apoyos y terraza;
- verticalidad y niveles de niebla.

No debe revelar la superficie superior de la plataforma ni una ruta exterior que el protagonista aún no haya recorrido.

### Mapa B — Ampliación tras XXV

Momento: inmediatamente después de XXV — `La escala que faltaba`.

Debe conservar el Mapa A como un sector pequeño y reconocible y añadir:

- primer mirador como punto de salida del sector local;
- tramo de raíz ensanchada;
- `NODO EXTERIOR 1`;
- dos continuidades del nodo todavía sin explorar;
- ruta izquierda recorrida;
- región elevada sobre la niebla;
- región de cascadas;
- masa de raíces entrelazadas;
- cascada doble y arco oscuro como referencias;
- avistamientos neutros de fauna planeadora;
- ruptura provisional;
- niveles inferiores visibles sin suelo planetario.

El Mapa B sigue siendo **regional**, no planetario.

## Escala

No usar kilómetros, coordenadas globales ni porcentajes de planeta explorado si el texto no los sostiene.

Se permiten:

- distancias estimadas de recorrido cuando están en canon;
- cotas relativas `SUBE` / `BAJA`;
- escala operativa variable;
- abanicos de incertidumbre para referencias lejanas.

El dato de XXV según el cual el sector explorado ocupa menos de una quinta parte de la pantalla en la nueva escala describe únicamente la **pantalla operativa del protagonista**. Nunca debe convertirse en `20 % de Elyndran`.

## Lenguaje gráfico

- master vectorial o raster con fondo transparente; el papel marfil pertenece a la maqueta;
- tinta gris carbón / grafito;
- acentos mínimos y funcionales;
- dibujo técnico-orgánico, no mapa fantástico;
- ruta recorrida = línea continua;
- observado/no recorrido = línea discontinua;
- dirección estimada = línea fina o abanico de incertidumbre;
- límite no accesible = final explícito sin rellenar lo desconocido;
- niebla y cortes laterales para expresar niveles verticales;
- etiquetas sobrias, legibles a 6×9.

Prohibidos: pergamino medieval, rosa de los vientos ornamental, runas, neón, radar, HUD, minimapa circular, iconos de misión, enemigos, tesoros o porcentaje explorado.

## Regla de conocimiento

El mapa solo contiene información disponible para el protagonista en el punto narrativo donde aparece.

No introducir:

- topónimos no usados por él;
- accesos no recorridos;
- estructuras ocultas;
- ruta completa a la cascada;
- superficie superior de la plataforma;
- ciudades, ruinas o asentamientos;
- señales de habitantes;
- topografía global inventada.

Una hipótesis se representa como incertidumbre, nunca como icono factual.

## Espacio desconocido

### Mapa A

Al menos 45–55 % de la lámina debe quedar sin cartografiar, disolverse en niebla o terminar en límites abiertos.

### Mapa B

La red local debe reducirse visualmente. La zona realmente recorrida debe ocupar aproximadamente un tercio o menos de la lámina útil; el resto son márgenes sin datos, raíces observadas a distancia y niveles no recorridos.

No dibujar el contorno del planeta.

## Integración editorial

Los mapas son láminas editoriales y no cuentan como una de las 1–2 imágenes interiores habituales de un capítulo.

Pueden aparecer:

- a página completa;
- a doble página cuando la verticalidad lo exija;
- como lámina de transición entre bloques.

No superponerlos sobre una ilustración cinematográfica ni presentarlos como interfaz flotante.

## Continuidad entre A y B

La geometría relativa de cápsula, primera ruta, bifurcación y primer mirador debe permanecer idéntica.

El Mapa B **escala y extiende** el A; no lo rediseña.

El primer mirador debe quedar en un borde útil del Mapa A para permitir que en B la nueva ruta salga de él hacia `NODO EXTERIOR 1`.

## Evolución futura

No crear un tercer mapa completo solo porque exista un capítulo nuevo.

Actualizar la cartografía cuando cambie de verdad la comprensión espacial. La jerarquía futura será:

1. mapa local para navegación concreta;
2. mapa regional cuando varias rutas locales queden conectadas;
3. mapa de Elyndran conocido solo cuando exista evidencia suficiente para sostener una escala mayor.

Nunca rellenar un mapa global por deseo editorial.

## Gate 10/10

Un mapa se aprueba únicamente si cumple simultáneamente:

1. orientación útil para el lector;
2. verticalidad comprensible;
3. zona explorada claramente menor que el mundo visible;
4. ningún spoiler;
5. coherencia exacta con `CONTINUITY.md` y las specs A/B;
6. apariencia de documento funcional de expedición, no interfaz de juego;
7. legibilidad en 6×9 y, si procede, a doble página;
8. capacidad de ampliarse sin redibujar la geografía ya establecida.

**El mapa debe ampliar la sensación de mundo, no reducirla.**
