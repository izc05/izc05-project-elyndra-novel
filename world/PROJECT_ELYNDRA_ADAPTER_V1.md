# ELYNDRAN — PROJECT ELYNDRA ADAPTER V1

Estado: **DISEÑO / DERIVADO TÉCNICO**

Este documento define el contrato de salida entre la biblia del mundo de la novela y un consumidor jugable como `project-elyndra`.

No es canon. No sustituye `CONTINUITY.md`, `ELYNDRAN_WORLD_BIBLE_V1.md` ni `WORLD_PRODUCTION_RULES.md`.

## Jerarquía obligatoria

1. `CONTINUITY.md` — autoridad canónica.
2. Manuscrito vigente — evidencia narrativa.
3. `ELYNDRAN_WORLD_BIBLE_V1.md` — lógica de mundo.
4. `WORLD_PRODUCTION_RULES.md` — contrato de producción.
5. `world/ELY_KNOWN_WORLD_STATE_V1.yaml` — vista estructurada derivada.
6. Este adapter — traducción técnica para juego.

Si aparece una contradicción, el flujo se detiene en el nivel superior y el derivado debe corregirse.

---

# 1. PRINCIPIO

`project-elyndra` consume una **vista limitada y versionada** del mundo.

Nunca recibe permiso para convertir un campo interno en canon ni para deducir una respuesta no establecida.

La regla central es:

> El juego puede simular más de lo que enseña, pero no puede afirmar más de lo que el personaje ha ganado mediante observación.

---

# 2. CAPAS DE ESTADO

Cada entidad exportable puede contener tres niveles distintos.

## `world_state`

Estado privado de simulación.

Puede incluir variables necesarias para persistencia, costes, clima, estabilidad o comportamiento.

Restricciones:

- no se presenta directamente en UI;
- no se convierte en texto factual del códice;
- no se reutiliza en briefs visuales canónicos;
- puede contener `unknown` cuando la verdad interna todavía no está fijada por diseño.

## `observed_state`

Información que el personaje ha observado, medido o comparado.

Debe poder rastrearse a una fuente canónica o a una futura acción jugable explícita.

## `ui_state`

Vista segura para el jugador.

Se genera a partir de `observed_state` y del nivel de conocimiento alcanzado.

Nunca puede ampliar una afirmación.

Ejemplo permitido:

- observado: `aggression_observed: false`
- UI: “No mostró agresión durante el encuentro.”

Ejemplo prohibido:

- UI: “Es una especie pacífica.”

---

# 3. ESTADOS SEMÁNTICOS

Los únicos estados editoriales válidos son:

- `CANON`
- `DISEÑO`
- `RESERVA`
- `MISTERIO`

Además, `unknown` es un valor técnico válido.

`unknown` no equivale a `MISTERIO`.

- `unknown`: el dato no está fijado o no se conoce.
- `MISTERIO`: existe evidencia relevante y su explicación permanece abierta deliberadamente.

---

# 4. ENTIDADES EXPORTABLES

## Localización

Campos mínimos:

- `id`
- `kind: location`
- `status`
- `working_name`
- `observed_state`
- `ui_safe_claims`
- `knowledge_level`
- `links`

Campos opcionales privados:

- `world_state`
- `dynamic_rules`
- `reserve`
- `mysteries`

## Organismo

Campos mínimos:

- `id`
- `kind: organism`
- `status`
- `working_name`
- `observed_state`
- `production_forbidden`

Nunca se obliga a proporcionar dieta, reproducción, taxonomía o peligrosidad.

## Estructura / anomalía

Campos mínimos:

- `id`
- `kind: anomaly`
- `status`
- `canon_observation`
- `reveal_stage`
- `forbidden_conclusions`

Una hipótesis compatible no se exporta como verdad jugable.

---

# 5. EDGES TRIDIMENSIONALES

El mapa exportado es un grafo 3D aunque la interfaz posterior use hexágonos, cartas, nodos o una proyección 2D.

Cada edge debe declarar:

- `edge_id`
- `from`
- `to`
- `status`
- `vertical_relation`
- `traversal_state`
- `return_model`

## `vertical_relation`

Valores iniciales permitidos:

- `level_or_mixed`
- `ascending`
- `descending`
- `variable`
- `unknown`

Estos valores son relativos al sentido `from -> to`, no cotas planetarias absolutas.

## `traversal_state`

Puede registrar de forma cualitativa:

- soporte conocido;
- humedad;
- niebla;
- exposición a caída;
- coste de filtro observado;
- estabilidad conocida;
- necesidad de referencias visuales o corporales.

No se inventan números de metros, energía, oxígeno o probabilidad si el canon no los proporciona.

## `return_model`

Debe declarar explícitamente si la vuelta es:

- `observed_equivalent`
- `observed_different`
- `not_established`

Cuando sea distinta, se registra el motivo observado o de DISEÑO sin convertirlo en ley física global.

---

# 6. COSTES ASIMÉTRICOS

La asimetría es estructural en Elyndran.

Puede provenir de:

- gravedad y trepa;
- adherencia distinta al subir o bajar;
- visibilidad;
- necesidad de asegurar un paso;
- carga de filtro;
- clima móvil;
- geometría modificada;
- uso de una alternativa más segura al regreso.

Regla:

> La ausencia de coste numérico no autoriza a asumir simetría.

Por eso `return_model: not_established` es preferible a copiar automáticamente el coste de ida.

---

# 7. FOG OF KNOWLEDGE

Niveles iniciales:

1. `undiscovered`
2. `observed_from_distance`
3. `reached`
4. `traversed`
5. `measured`
6. `compared`
7. `partially_understood`

No representan XP ni dominio absoluto.

Una localización puede estar `traversed` y seguir siendo físicamente poco comprendida.

Una anomalía puede estar `measured` y seguir en `MISTERIO`.

---

# 8. PERSISTENCIA

El adapter debe permitir que el estado cambie sin reescribir el canon base.

Ejemplos de estado persistente jugable compatible:

- ruta temporalmente bloqueada por niebla;
- soporte conocido desplazado;
- colector marcado como contaminado;
- referencia visual perdida;
- organismo ya observado en una localización;
- agua recogida pero todavía no declarada segura.

Estos son estados de sesión/campaña hasta que el manuscrito los canonice de manera independiente.

---

# 9. PROHIBICIONES DE EXPORTACIÓN

El adapter no puede producir por inferencia automática:

- suelo planetario;
- respirabilidad segura;
- potabilidad definitiva;
- dieta de fauna no observada;
- lenguaje a partir de luces o tonos;
- tecnología a partir de geometría regular;
- civilización a partir de estructuras;
- inteligencia planetaria;
- explicación de los 37 segundos;
- estado final de Aster;
- cronología absoluta de estructuras.

---

# 10. VERSIONADO

Toda exportación debe incluir:

- `schema_version`
- `source_status: DERIVED_VIEW`
- `canonical_authority`
- `world_logic`
- `production_contract`
- `adapter_contract`

Una nueva versión del adapter no invalida una partida previa automáticamente. Los cambios deben clasificarse como:

- `compatible`
- `requires_migration`
- `invalidates_derived_assumption`

Nunca se migra un dato derivado hacia una verdad canónica por simple compatibilidad técnica.

---

# 11. PRIMERA VALIDACIÓN DEL ADAPTER

La V1 se considera válida si puede representar sin inventar:

1. cápsula → bifurcación;
2. bifurcación → ruta descendente;
3. bifurcación → ruta horizontal;
4. bifurcación → bóveda ascendente;
5. una ruta cuya geometría cambia entre visitas;
6. una anomalía medida sin función conocida;
7. un organismo observado sin dieta establecida.

La vista `world/ELY_KNOWN_WORLD_STATE_V1.yaml` debe ser capaz de implementar esos casos usando `unknown` y `not_established` cuando corresponda.

---

# 12. DECISIONES V1

- El grafo jugable conserva dirección y verticalidad.
- La vuelta nunca se copia automáticamente de la ida.
- La topología puede conocerse mejor que la física del lugar.
- Los costes permanecen cualitativos hasta disponer de evidencia o diseño jugable aprobado.
- Un campo privado de simulación no es una revelación narrativa.
- El adapter es desechable y regenerable; el canon no.

Decisión central:

> La fidelidad a Elyndran no consiste en exportar todos los datos, sino en conservar correctamente lo que todavía no sabemos.
