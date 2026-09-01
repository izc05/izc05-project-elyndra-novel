# ELYNDRAN — WORLD PRODUCTION VALIDATION V1

Estado: **DISEÑO VALIDADO CONTRA CANON**

Propósito: comprobar que `WORLD_PRODUCTION_RULES.md` funciona sobre casos reales antes de convertir la biblia de mundo en datos reutilizables para novela, imagen y juego.

Autoridad:

1. `CONTINUITY.md` — CANON.
2. Manuscrito vigente — evidencia narrativa.
3. `ELYNDRAN_WORLD_BIBLE_V1.md` — lógica de mundo.
4. Documentos de expansión — DISEÑO controlado.
5. Este archivo — validación, nunca fuente primaria de canon.

Semáforo obligatorio: **CANON / DISEÑO / RESERVA / MISTERIO**.

---

# CASO A — SECTOR DE LA CÁPSULA

## Estado

**CANON**

- La cápsula está encajada en una gran raíz.
- Es el único refugio seguro conocido.
- La ruta cápsula ↔ bifurcación es reproducible de memoria.
- Desde la bifurcación existen ramas descendente, horizontal y ascendente parcialmente exploradas.
- No existe esclusa.
- El exterior introduce partículas y obliga a procedimientos de limpieza y recirculación.
- El mapa local puede cambiar: un apoyo habitual descendió unos centímetros y dejó de tratarse como geometría fija.
- No se ha visto suelo planetario.

**DISEÑO**

- El nodo debe tratarse como centro logístico de baja movilidad y alto valor de retirada, no como “base segura absoluta”.
- La seguridad es funcional: refugio, equipo, agua terrestre, comunicaciones y control parcial de contaminación.
- La ruta de salida debe almacenar estado de superficie y estabilidad, porque regresar puede no equivaler a repetir exactamente el trayecto anterior.

**RESERVA**

- Cualquier expansión física permanente de la cápsula hacia una base exterior.
- Cualquier sistema de esclusa improvisada que todavía no aparezca en manuscrito.
- Cualquier asentamiento humano adicional.

**MISTERIO**

- Por qué la cápsula terminó exactamente en esa raíz.
- Si el sector tiene propiedades especiales respecto a otras regiones.
- Si alguna anomalía de entrada tuvo relación con el lugar de impacto.

## Validación visual

Una imagen canónica del sector puede mostrar cápsula, raíz, vacío, niebla, marcas de uso, equipo y modificaciones ya narradas en su punto temporal.

No puede mostrar:

- suelo lejano como certeza;
- red planetaria completa;
- estructuras tecnológicas no observadas;
- fauna añadida solo para dar vida a la escena;
- casco abierto durante una salida actual.

## Validación jugable

El nodo funciona si cambia al menos:

- **movimiento**: salida/retirada por rutas tridimensionales;
- **recursos**: reparación, agua terrestre, batería, filtros;
- **información**: centro de comparación de muestras y registros;
- **riesgo**: contaminación de entrada y deterioro acumulado.

Resultado: **APROBADO**.

---

# CASO B — CRIATURA TERRESTRE DE SEIS APOYOS

## Estado

**CANON**

- Es pequeña.
- Tiene seis apoyos.
- Presenta cuerpo bajo y placas cobrizas dorsales.
- Posee una estructura tubular inferior.
- No se ha observado agresión.
- Ha interactuado físicamente con una película/material de superficie.

**DISEÑO**

- Debe modelarse inicialmente como organismo de función ecológica abierta.
- Su locomoción debe resolver adherencia y estabilidad en superficies no equivalentes a suelo terrestre.
- El motor de juego puede necesitar parámetros privados de agarre, velocidad o respuesta ambiental, pero esos valores pertenecen a `world_state`.

**RESERVA**

- Dieta.
- Reproducción.
- Organización social.
- Distribución planetaria.
- Relación taxonómica con otros organismos.

**MISTERIO**

- Qué función cumple la estructura tubular.
- Si la película/material tocado es alimento, depósito, tejido, secreción o interfaz de otro tipo.
- Qué detecta del entorno y cómo.

## Prueba contra errores de producción

Falla si una imagen muestra claramente que “come” la película.

Falla si una ficha de juego la clasifica como herbívora, carroñera o domesticable.

Falla si una animación de luz/gesto se presenta como lenguaje.

Pasa si el juego registra únicamente observaciones del personaje y mantiene función/dieta como desconocidas.

Resultado: **APROBADO CON BLOQUEO EXPLÍCITO DE DIETA**.

---

# CASO C — ESTRUCTURA DE TRES BRAZOS

## Estado

**CANON**

- Existe una geometría regular en la ruta horizontal.
- Presenta tres brazos.
- Se han observado materiales y respuestas físicas que no encajan de forma simple con las raíces conocidas.
- Hay vibración/tono asociados a una secuencia física parcialmente observable.
- La zona comparte proximidad con otras regularidades y con la plataforma, pero equivalencia funcional u origen común no están demostrados.

**DISEÑO**

- Debe almacenarse como anomalía estructural con interfaces medibles, no como edificio ni máquina.
- La producción puede modelar relaciones de vibración, material y contacto para conservar coherencia entre escenas.
- El juego puede simular respuestas consistentes antes de que el jugador conozca su causa.

**RESERVA**

- Función original.
- Antigüedad absoluta.
- Relación con una civilización.
- Relación con la plataforma como parte de un sistema común.
- Uso deliberado por inteligencia.

**MISTERIO**

- Origen.
- Propósito, si existe.
- Relación temporal con la biología circundante.
- Si la regularidad es natural, biológica, construida o híbrida.

## Escalera de revelación aplicada

La producción solo puede avanzar en este orden:

1. regularidad observada;
2. material diferenciado;
3. mecanismo parcial;
4. interfaces con raíz/aire/vibración;
5. cronología relativa;
6. repetición regional;
7. función parcial;
8. origen restringido;
9. historia profunda.

El caso actual se encuentra entre **3 y 4**. Concept art o gameplay no pueden saltar a 7–9.

Resultado: **APROBADO**.

---

# VALIDACIÓN TRANSVERSAL

## Novela

Las fichas sirven si cada descubrimiento nuevo produce una consecuencia posterior: ruta, coste, preparación, hipótesis o forma de medir.

## Imágenes

Cada brief debe indicar capítulo/fase y aplicar `must_show / may_show / must_not_show`. Una imagen cuenta como evidencia y puede canonizar accidentalmente una respuesta.

## Juego

Se valida la separación:

- `world_state`: verdad interna necesaria para simulación;
- `observed_state`: evidencia obtenida;
- `ui_state`: información legítimamente mostrable.

La UI nunca expone `world_state` por comodidad.

## Cartografía

Una conexión necesita altura relativa, soporte, dependencias climáticas/visuales y simetría de retorno. Un grafo plano sin esos atributos no representa Elyndran.

---

# RESULTADO V1

Los tres casos cubren las tres familias más sensibles del sistema:

- **localización** — sector de la cápsula;
- **organismo** — criatura de seis apoyos;
- **estructura/anomalía** — estructura de tres brazos.

`WORLD_PRODUCTION_RULES.md` supera la validación V1 sin exigir cambios de canon.

Siguiente paso técnico autorizado: crear una **vista estructurada derivada** del mundo conocido, con IDs estables y separación explícita entre CANON, DISEÑO, RESERVA y MISTERIO.

Regla final:

> Los datos estructurados describen el canon; nunca lo sustituyen.