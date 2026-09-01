# ELYNDRAN — WORLD PRODUCTION RULES V1

Estado: **CANON DE PRODUCCIÓN / DISEÑO CONTROLADO**

Este documento traduce la biblia de mundo a un sistema reutilizable para **novela, imágenes, mapa y juego** sin duplicar ni degradar el canon.

No sustituye a ninguna autoridad superior.

## Jerarquía obligatoria

1. `CONTINUITY.md` — canon operativo del manuscrito.
2. Manuscrito vigente — evidencia narrativa concreta.
3. `ELYNDRAN_WORLD_BIBLE_V1.md` — lógica de mundo.
4. Documentos de expansión (`KNOWN_WORLD_MAP.md`, `PLANETARY_LAYERS.md`, `ECOLOGY_NETWORK.md`, `CLIMATE.md`, `REGIONS.md`, `STRUCTURES_AND_ANOMALIES.md`, `DEEP_HISTORY.md`, `MYSTERY_37S.md`, `FAUNA.md`, `FLORA.md`).
5. Este documento — reglas para producir contenido coherente.
6. Prompts visuales, niveles, cartas, encuentros, UI y assets derivados.

Una capa inferior nunca puede corregir por conveniencia una capa superior.

---

# 1. PRINCIPIO CENTRAL

Elyndran puede tener una verdad interna más amplia que la conocida por el protagonista, pero **ningún medio puede revelar esa verdad antes de que corresponda**.

Se distinguen cuatro capas de conocimiento:

- **MUNDO** — lo que podría ser cierto en la realidad interna del planeta.
- **EQUIPO CREATIVO** — lo que se usa para diseñar coherencia futura.
- **PERSONAJE** — lo que el protagonista ha observado, medido o inferido.
- **LECTOR / JUGADOR** — lo que el medio le ha mostrado de forma legítima.

Regla:

> Diseñar con más información no autoriza a mostrar más información.

---

# 2. SEMÁFORO DE PRODUCCIÓN

Toda pieza nueva debe etiquetar sus afirmaciones relevantes.

## CANON

Hecho establecido por `CONTINUITY.md` o por el manuscrito vigente.

Puede mostrarse directamente si el punto temporal de la obra ya lo permite.

Ejemplos:

- no se ha visto suelo;
- la cápsula es el único refugio seguro conocido;
- existen animales planos en los discos;
- existen golpes profundos de causa desconocida;
- la atmósfera no está declarada segura;
- una emisión desplazada produjo una recepción anómala 36,91 s antes.

## DISEÑO

Modelo interno construido para que el mundo funcione.

Puede orientar escenas, iluminación, distribución ecológica, rutas y comportamiento sistémico, pero no presentarse como verdad confirmada al personaje.

Ejemplo: una familia de filtradores necesaria para cerrar un flujo ecológico puede existir como diseño antes de aparecer en el manuscrito.

## RESERVA

Idea prometedora todavía no validada o deliberadamente aplazada.

No debe aparecer en una imagen canónica, una escena narrativa factual o una ficha jugable presentada como realidad establecida.

Puede usarse en exploración interna, concept art claramente marcado o prototipos no canónicos.

## MISTERIO

Pregunta o explicación abierta cuya ambigüedad tiene valor narrativo.

No puede resolverse accidentalmente mediante:

- una ilustración demasiado explícita;
- una etiqueta de mapa;
- un texto de UI;
- una descripción de objeto;
- estadísticas de juego;
- un nombre taxonómico;
- una animación que muestre función no observada.

Regla:

> La producción también puede hacer spoilers de ontología.

---

# 3. FICHA UNIVERSAL DE LOCALIZACIÓN

Toda localización narrativa, visual o jugable debe disponer de esta ficha antes de considerarse lista.

```yaml
location_id: EL-XXX
working_name: ""
production_status: CANON | DISEÑO | RESERVA | MISTERIO
first_allowed_reveal: "capítulo / fase / condición"

spatial:
  layer_regime: ""
  dominant_region: ""
  secondary_regions: []
  relative_height: "known / bounded / unknown"
  verticality_role: "path / wall / ceiling / void / mixed"
  known_connections: []
  possible_connections: []
  fall_risk: "low / medium / high / lethal-unknown"

survival:
  filter_cost_base: "relative only unless measured"
  current_filter_modifiers: []
  water_sources: []
  safe_water_status: "none unless canon proves otherwise"
  adhesion_surface: ""
  shelter_value: ""
  retreat_difficulty: ""

climate:
  baseline: ""
  current_state: ""
  visibility_effect: ""
  route_effect: ""
  particle_effect: ""

biology:
  observed_fauna: []
  observed_flora_modules: []
  indirect_signs: []
  ecological_flows: []

structures:
  observed_structures: []
  materials: []
  interfaces_with_biology: []
  interpretation_limits: []

history:
  visible_traces: []
  relative_chronology_supported: []
  forbidden_global_conclusions: []

narrative:
  protagonist_knows: []
  protagonist_suspects: []
  protagonist_does_not_know: []
  emotional_function: ""
  discovery_or_change: ""

visual:
  must_show: []
  may_show: []
  must_not_show: []
  scale_reference: ""

play:
  traversal_decisions: []
  resource_decisions: []
  information_rewards: []
  persistent_changes: []
```

## Regla de aceptación de localización

Una localización no está terminada si solo responde “qué aspecto tiene”.

Debe cambiar al menos **dos** de estas cinco dimensiones:

1. movimiento;
2. coste de supervivencia;
3. acceso a recursos;
4. información;
5. riesgo.

Y una de esas dimensiones debe derivar de procesos propios de Elyndran, no de una trampa colocada para el protagonista.

---

# 4. FICHA UNIVERSAL DE ORGANISMO

```yaml
organism_id: ELY-BIO-XXX
working_name: ""
production_status: CANON | DISEÑO | RESERVA | MISTERIO
classification_confidence: "morphological / functional / unknown"

habitat:
  layer_regimes: []
  regions: []
  substrate_or_medium: ""

function:
  energy_or_food_source: "unknown allowed"
  environmental_flow_modified: "water / particles / biomass / structure / gas / unknown"
  waste_or_byproducts: []
  ecosystem_relationships: []

behavior:
  confirmed: []
  inferred: []
  forbidden_assumptions: []

survival:
  movement: ""
  attachment: ""
  hazard_avoidance: ""
  climate_response: ""

reproduction:
  status: "unknown by default"
  evidence: []

human_interaction:
  observed_effects: []
  danger_status: "unknown unless evidenced"
  edible_status: "never inferred"
  communicative_status: "never inferred from signal alone"

visual:
  invariant_traits: []
  variable_traits: []
  terrestrial_analogies_to_avoid: []
```

## Reglas biológicas

- Un individuo no define una especie.
- Contacto con materia no demuestra ingestión.
- Ingestión no demuestra dieta principal.
- Luz no demuestra comunicación.
- Comunicación no demuestra lenguaje.
- Peligro no demuestra depredación.
- Respuesta previa a clima no demuestra predicción consciente.
- Semejanza vegetal no demuestra planta en sentido terrestre.
- Reproducción queda desconocida salvo evidencia específica.

---

# 5. FICHA UNIVERSAL DE ESTRUCTURA / ANOMALÍA

```yaml
anomaly_id: ELY-ANOM-XXX
working_name: ""
production_status: CANON | DISEÑO | RESERVA | MISTERIO

observation:
  geometry: []
  materials: []
  motion: []
  sound_or_signal: []
  environmental_context: []

interfaces:
  with_roots: []
  with_water: []
  with_air: []
  with_fauna_flora: []

chronology:
  superposition_evidence: []
  wear_evidence: []
  deformation_evidence: []
  only_supported_relative_order: []

hypotheses:
  compatible: []
  weakened: []
  excluded: []

reveal_control:
  protagonist_can_state: []
  protagonist_may_suspect: []
  production_must_not_imply: []

future_tests: []
```

## Regla estructural

La escalera de revelación es:

**regularidad → material → mecanismo parcial → interfaz → cronología relativa → repetición regional → función parcial → origen restringido → historia profunda**.

No se puede saltar escalones mediante concept art o gameplay.

---

# 6. REGLAS PARA NOVELA

La novela es la principal vía de canonización de nuevos hechos del mundo.

## 6.1 Descubrimiento antes que explicación

Una escena debe preferir:

- observar;
- medir;
- comparar;
- probar;
- fallar;
- repetir;
- cambiar conducta;

antes que explicar.

## 6.2 Regla de consecuencia

Un descubrimiento útil debe cambiar después algo real:

- ruta;
- consumo;
- preparación;
- confianza;
- hipótesis;
- riesgo asumido;
- forma de medir.

Si no cambia nada, probablemente es decoración de lore.

## 6.3 Lenguaje del protagonista

El protagonista puede usar comparaciones terrestres como instrumento mental, pero la narración no debe convertir esas comparaciones en clasificación objetiva.

Preferir:

- “parecía una membrana”
- “placas del color del cobre”
- “algo parecido a…”

sobre:

- “era una planta de…”
- “era una máquina…”
- “era un lenguaje…”

sin evidencia.

## 6.4 Misterios

Una nueva aparición de un misterio debe aportar al menos una de estas cosas:

- eliminar una hipótesis;
- separar dos causas antes confundidas;
- establecer un límite;
- demostrar repetibilidad parcial;
- demostrar no repetibilidad bajo una condición;
- permitir una prueba mejor.

Repetir rareza sin discriminación no cuenta como avance.

---

# 7. REGLAS PARA IMÁGENES CANÓNICAS

Las imágenes son evidencia para el lector aunque no contengan texto.

Por tanto se tratan como una forma de narración.

## 7.1 Punto temporal obligatorio

Cada brief visual debe declarar:

- capítulo o fase temporal;
- qué sabe el protagonista en ese momento;
- qué elementos son CANON visibles;
- qué elementos están prohibidos aunque sean DISEÑO interno.

## 7.2 No revelar función desconocida

Una imagen no puede mostrar:

- una estructura operando con propósito no observado;
- una criatura alimentándose si solo se ha visto contacto;
- una señal luminosa como conversación;
- una ciudad o arquitectura legible donde solo existe geometría regular;
- un “suelo planetario” si no se ha observado;
- una red global conectada si solo conocemos sectores locales;
- Aster destruida o intacta si su estado es desconocido;
- el origen de los 37 segundos.

## 7.3 Coherencia física

Todo asset debe respetar:

- verticalidad;
- riesgo de caída;
- humedad y partículas cuando correspondan;
- escala demostrada mediante referencias;
- casco cerrado en las exploraciones canónicas actuales;
- transformación acumulada de la cápsula y del equipo;
- ausencia de arquitectura humana disfrazada en estructuras ambiguas.

## 7.4 RESERVA VISUAL

Una reserva visual puede explorarse en concept art interno, pero debe llevar marca inequívoca de **NO CANÓNICO / RESERVA** y no entrar en:

- edición del libro;
- reader oficial;
- portada factual;
- ficha de mundo pública;
- mapa canónico;
- screenshot oficial del juego que parezca revelar el mundo definitivo.

---

# 8. REGLAS PARA JUEGO

El juego puede necesitar sistemas más explícitos que la novela, pero no puede convertir la base de diseño en verdad conocida por el personaje.

## 8.1 Tres capas de datos

Cada nodo o entidad jugable debe separar:

### `world_state`
Lo que el motor necesita para funcionar.

Ejemplo: una corriente vertical tiene intensidad interna suficiente para calcular planeo.

### `observed_state`
Lo que el personaje ha medido o experimentado.

Ejemplo: “corriente ascendente fuerte cerca de cascada”.

### `ui_state`
Lo que se puede mostrar al jugador.

Ejemplo inicial: `VIENTO: DESCONOCIDO`; después de medir: `ASCENDENTE / FUERTE`.

Nunca exponer directamente `world_state` por comodidad de UI.

## 8.2 Fog of knowledge

Además de niebla espacial, Elyndran requiere **niebla de conocimiento**.

Un nodo puede estar:

- no descubierto;
- visto desde lejos;
- alcanzado;
- recorrido;
- medido;
- comparado;
- comprendido parcialmente.

Estas categorías no son equivalentes.

## 8.3 Mapa tridimensional

La integración con `project-elyndra` no debe reducir Elyndran a una cuadrícula plana.

Aunque la UI utilice nodos o hexágonos para interacción, cada conexión necesita propiedades verticales:

```yaml
edge:
  from: EL-001
  to: EL-002
  delta_height: "up / down / lateral / mixed / unknown"
  support_type: "root / fiber / structure / glide / void-crossing"
  visibility_dependency: []
  climate_dependency: []
  return_symmetry: "same / harder / easier / impossible / unknown"
```

Ir de A a B no implica que volver de B a A tenga el mismo coste.

## 8.4 Información como recompensa

Las recompensas no deben ser solo objetos.

Pueden ser:

- una ruta alternativa;
- una medición fiable;
- una correlación climática;
- una fuente descartada;
- un patrón de filtro;
- una ventana segura;
- una hipótesis eliminada;
- una forma mejor de volver.

## 8.5 Persistencia

El mundo puede cambiar sin jugador:

- rutas deformadas;
- niebla desplazada;
- membranas tensas;
- agua acumulada o vaciada;
- superficies cubiertas o expuestas;
- fauna movida por condiciones;
- soportes debilitados.

Esto debe sentirse sistémico, no como castigo aleatorio.

---

# 9. CONTRATO DE PUENTE CON `project-elyndra`

El repositorio de novela/worldbuilding sigue siendo la autoridad narrativa del mundo.

`project-elyndra` consume una **vista derivada**, no una copia editorial libre.

## 9.1 Datos que sí pueden exportarse

- IDs estables de localización;
- relaciones espaciales;
- estados de conocimiento;
- costes relativos ya permitidos;
- rasgos visuales canónicos;
- eventos o condiciones autorizadas;
- organismos y estructuras con sus límites de revelación.

## 9.2 Datos que no deben duplicarse como verdad independiente

- explicación final de los 37 segundos;
- origen real de estructuras;
- historia profunda definitiva;
- taxonomías no canonizadas;
- estado de Aster no confirmado;
- detalles futuros del manuscrito.

## 9.3 Identidad estable

Las entidades deben recibir IDs técnicos antes que nombres diegéticos definitivos.

Ejemplo:

- `ELY-LOC-CAPSULE-001`
- `ELY-BIO-DISC-FLAT-001`
- `ELY-ANOM-THREEARM-001`

Así el juego puede referenciarlas aunque el protagonista aún las llame mediante descripciones provisionales.

## 9.4 Regla de sincronización

Cuando el canon cambie:

1. actualizar `CONTINUITY.md`;
2. comprobar documentos de mundo afectados;
3. actualizar la vista derivada de producción;
4. solo entonces actualizar el juego o las imágenes.

Nunca a la inversa.

---

# 10. MATRIZ DE REVELACIÓN POR MEDIO

| Contenido | Novela | Imagen canónica | Juego / UI | Documento interno |
|---|---|---|---|---|
| CANON ya observado | sí | sí | sí | sí |
| CANON futuro | solo en su momento | no antes | no antes | sí con control |
| DISEÑO | como efecto, no verdad | solo si no revela interpretación | motor interno sí; UI no automática | sí |
| RESERVA | no | no | prototipo no canónico únicamente | sí |
| MISTERIO | evidencia parcial | solo evidencia observable | estado observado, no solución | hipótesis controladas |

---

# 11. CHECKLIST DE ESCENA / ASSET

Antes de aprobar una escena, ilustración, localización o mecánica:

1. ¿Qué capítulo o estado temporal representa?
2. ¿Qué sabe realmente el protagonista?
3. ¿Qué parte es CANON?
4. ¿Qué parte es DISEÑO?
5. ¿Hay alguna RESERVA presentada accidentalmente como hecho?
6. ¿Se está resolviendo un MISTERIO por imagen, UI o nomenclatura?
7. ¿La verticalidad cambia la escena?
8. ¿Existe referencia comprensible de escala?
9. ¿El clima afecta algo más que el color?
10. ¿La biología cumple una función ecológica?
11. ¿Una estructura deja evidencia antes que interpretación?
12. ¿El coste de ida y vuelta puede ser distinto?
13. ¿El aire/filtro importa cuando corresponde?
14. ¿El agua tiene historial físico antes de considerarse recurso?
15. ¿El cambio descubierto tendrá consecuencia posterior?
16. ¿La cápsula/equipo muestran el desgaste acumulado correcto?
17. ¿El asset enseña algo que el personaje no podría haber visto desde esa posición?
18. ¿El juego está mostrando datos de `world_state` que deberían seguir ocultos?
19. ¿La escena funcionaría aunque el protagonista no existiera?
20. ¿La pieza sigue pareciendo Elyndran y no fantasía/bioma terrestre genérico?

Una respuesta negativa en 3, 5, 6, 10, 11, 17 o 18 bloquea producción canónica.

---

# 12. REGLAS DE CAMBIO DE CANON

## Ascenso de DISEÑO a CANON

Requiere:

1. aparición explícita en manuscrito;
2. evidencia compatible con `CONTINUITY.md`;
3. ausencia de contradicción con capítulos anteriores;
4. consecuencia narrativa o científica suficiente;
5. actualización de `CONTINUITY.md`.

## Ascenso de RESERVA a DISEÑO

Requiere que la idea responda al menos:

- dónde puede existir;
- qué flujo ecológico/físico modifica;
- qué coste o decisión genera;
- qué contradicción potencial introduce;
- qué señales dejaría aunque no esté visible.

## Cierre de MISTERIO

No se cierra por una explicación elegante.

Debe existir convergencia de evidencias y la solución debe explicar los datos previos sin retcon significativo.

---

# 13. PRIMER PAQUETE DE IDs DE PRODUCCIÓN

Estos IDs son **técnicos**, no nuevos nombres canónicos.

## Localizaciones

- `ELY-LOC-CAPSULE-001` — sector inmediato de cápsula.
- `ELY-LOC-FORK-001` — bifurcación principal.
- `ELY-LOC-DESC-DISCS-001` — sector de discos de agua.
- `ELY-LOC-HORIZ-THREEARM-001` — sector de estructura de tres brazos.
- `ELY-LOC-HORIZ-PLATFORM-001` — sector accesible/observado de plataforma.
- `ELY-LOC-ASC-VAULT-001` — bóveda de ruta ascendente.
- `ELY-LOC-ASC-TERRACE-001` — terraza/mirador.
- `ELY-LOC-OUTER-001` — `NODO EXTERIOR 1` / primera apertura fuera del mapa local.

## Biología

- `ELY-BIO-MEMBRANE-001` — membranas transparentes.
- `ELY-BIO-DISC-FLAT-001` — fauna plana de discos.
- `ELY-BIO-SIXSUPPORT-001` — criatura de seis apoyos.
- `ELY-BIO-GLIDER-001` — fauna planeadora observada.
- `ELY-BIO-ROOTNET-001` — red de raíces como categoría funcional abierta, no organismo único confirmado.

## Estructuras / anomalías

- `ELY-ANOM-37S-001` — familia de anomalías temporales/señal asociadas a ~37 s.
- `ELY-ANOM-THREEARM-001` — estructura de tres brazos.
- `ELY-ANOM-PLATFORM-001` — plataforma/geometría asociada.
- `ELY-ANOM-DEEPKNOCK-001` — golpes profundos, causa no determinada.
- `ELY-ANOM-DISCLINE-001` — línea oscura del disco vacío.

Los IDs no implican identidad causal entre entidades.

---

# 14. DECISIONES CENTRALES V1

1. **Una verdad de diseño no es automáticamente una verdad narrativa.**
2. **Una imagen canónica cuenta como evidencia y puede revelar demasiado.**
3. **El juego separará estado real, estado observado y estado mostrado.**
4. **El mapa será una red tridimensional aunque la interfaz utilice nodos o hexágonos.**
5. **La información puede ser una recompensa tan importante como un objeto.**
6. **Los IDs técnicos permiten sincronizar medios sin forzar nombres diegéticos prematuros.**
7. **`project-elyndra` consume canon; no lo redefine.**
8. **Todo cambio de canon fluye desde manuscrito/continuidad hacia producción, nunca al revés.**

---

# 15. SIGUIENTE PASO RECOMENDADO

Con esta capa ya puede construirse una primera **vista derivada estructurada del mundo** para consumo por herramientas y por `project-elyndra`, probablemente en YAML/JSON, empezando solo por entidades actualmente canónicas.

Esa vista no deberá contener soluciones internas de misterios.

Antes de ampliar nuevas especies o regiones, conviene validar estas fichas con tres casos reales:

1. sector de la cápsula;
2. criatura de seis apoyos;
3. estructura de tres brazos.

Si los tres pueden representarse sin perder ambigüedad, el sistema estará listo para escalar.