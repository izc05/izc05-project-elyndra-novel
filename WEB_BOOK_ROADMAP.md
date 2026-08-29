# ELYNDRAN — ROADMAP LIBRO WEB

Objetivo: convertir el manuscrito canónico de ELYNDRAN en una edición web completa, ilustrada, coherente y preparada para lectura en escritorio y móvil mediante GitHub Pages.

## Estado global

- Manuscrito: Prólogo + capítulos I–XXV disponibles.
- Lector HTML: operativo en GitHub Pages.
- Navegación: capítulos, anterior/siguiente, continuar lectura y progreso disponibles.
- Temas: negro, blanco y papel.
- Mapas: Mapa A tras XII y Mapa B tras XXV.
- Ilustraciones: contrato de nombres y posiciones preparado; producción raster pendiente.

---

## FASE 1 — Base del libro web — COMPLETADA

- [x] Publicar GitHub Pages.
- [x] Crear lector HTML único.
- [x] Cargar Prólogo + I–XXV desde `manuscript/`.
- [x] Índice de capítulos.
- [x] Navegación anterior/siguiente.
- [x] Guardar capítulo de lectura.
- [x] Barra de progreso.
- [x] Tamaño de texto configurable.
- [x] Temas negro / blanco / papel.
- [x] Diseño responsive básico.

Criterio de cierre: todo el manuscrito actual puede leerse de principio a fin desde Pages.

## FASE 2 — Arquitectura de ilustración — COMPLETADA

- [x] Definir `art/masters/` como ubicación canónica de raster finales.
- [x] Definir IDs de ilustración por capítulo.
- [x] Insertar ilustraciones dentro del flujo narrativo, no solo en un Atlas.
- [x] Ocultar de forma segura imágenes todavía inexistentes.
- [x] Mantener Atlas como índice visual secundario.
- [x] Integrar mapas en el punto narrativo correspondiente.

Masters iniciales previstos:

1. `PROLOGO-A.webp`
2. `I-A.webp`
3. `I-I1.webp`
4. `II-A.webp`
5. `IV-A.webp`
6. `V-A.webp`
7. `X-A.webp`
8. `XIV-A.webp`
9. `XV-A.webp`
10. `XVI-A.webp`
11. `XXV-A.webp`
12. `XXV-I2.webp`

## FASE 3 — Biblia visual y continuidad — ACTIVA

Objetivo: impedir que cada ilustración parezca pertenecer a una película diferente.

- [ ] Fijar aspecto definitivo de Aster.
- [ ] Fijar traje EVA Mark-I: materiales, casco, mochila, luces, desgaste y evolución.
- [ ] Fijar cápsula: geometría, materiales, daños y envejecimiento acumulado.
- [ ] Fijar lenguaje de Elyndran: niebla, humedad, raíces, roca, cielo, escala y luz.
- [ ] Fijar fauna y flora sin revelar información que Aster todavía no conoce.
- [ ] Crear hoja de continuidad visual por capítulo.
- [ ] Aprobar una imagen de referencia maestra antes de producir toda la serie.

Criterio de cierre: Aster, traje, cápsula y planeta son reconocibles y coherentes entre escenas.

## FASE 4 — Oleada visual prioritaria X / XIV / XV / XVI — PENDIENTE

- [ ] `X-A.webp`
- [ ] `XIV-A.webp`
- [ ] `XV-A.webp`
- [ ] `XVI-A.webp`
- [ ] QA de anatomía, escala, spoilers y continuidad.
- [ ] Comprobar cada imagen dentro del texto real en móvil y escritorio.

Criterio de cierre: las cuatro imágenes críticas quedan aprobadas dentro del libro, no de forma aislada.

## FASE 5 — Prólogo y primera exploración — PENDIENTE

- [ ] `PROLOGO-A.webp`
- [ ] `I-A.webp`
- [ ] `I-I1.webp`
- [ ] `II-A.webp`
- [ ] `IV-A.webp`
- [ ] `V-A.webp`
- [ ] Revisar posición exacta entre párrafos.
- [ ] Revisar que ninguna imagen adelante descubrimientos posteriores.

Criterio de cierre: Prólogo–V tienen una identidad visual consistente y cinematográfica.

## FASE 6 — Cierre visual XXV — PENDIENTE

- [ ] `XXV-A.webp`
- [ ] `XXV-I2.webp`
- [ ] Revisar continuidad visual con I y con los mapas.
- [ ] Validar que el cierre visual no revele más que el texto.

## FASE 7 — Cobertura visual completa I–XXV — PENDIENTE

Objetivo: revisar capítulos sin master inicial y decidir si necesitan ilustración adicional.

- [ ] Auditoría capítulo por capítulo.
- [ ] Máximo de imágenes definido por necesidad narrativa, no por rellenar.
- [ ] Crear nuevos IDs `III-A`, `VI-A`, etc. solo cuando aporten una escena importante.
- [ ] Evitar saturar el libro: alternar respiración textual e imagen.
- [ ] Numerar todas las ilustraciones y registrar capítulo + ancla narrativa.

Criterio de cierre: ningún capítulo importante carece de apoyo visual y ninguna ilustración es decorativa sin función narrativa.

## FASE 8 — Maquetación premium — PENDIENTE

- [ ] Portada real del libro.
- [ ] Página de entrada / comenzar a leer.
- [ ] Separadores de actos o bloques narrativos si el canon los admite.
- [ ] Capitulares y jerarquía tipográfica editorial.
- [ ] Pies de ilustración discretos.
- [ ] Tratamiento especial para comunicaciones, lecturas de instrumentos y registros.
- [ ] Mejorar ritmo vertical entre texto e imagen.
- [ ] Modo lectura sin distracciones.
- [ ] Índice móvil desplegable.

## FASE 9 — Experiencia móvil y accesibilidad — PENDIENTE

- [ ] QA 360–430 px.
- [ ] QA tablet.
- [ ] Evitar sidebar permanente en móvil.
- [ ] Imágenes sin recortes destructivos.
- [ ] Texto legible sin zoom manual.
- [ ] Contraste AA donde aplique.
- [ ] Navegación por teclado.
- [ ] `alt` narrativo para imágenes.
- [ ] `prefers-reduced-motion`.

## FASE 10 — Rendimiento y publicación — PENDIENTE

- [ ] WebP/AVIF optimizados y masters originales conservados fuera del payload cuando proceda.
- [ ] Lazy loading de ilustraciones no visibles.
- [ ] Dimensiones declaradas para reducir CLS.
- [ ] Evitar cargar los 26 capítulos y todas las imágenes innecesariamente si el peso final lo desaconseja.
- [ ] Caché/versionado de assets.
- [ ] Comprobar 404 y rutas relativas en GitHub Pages.
- [ ] Validar desde móvil real.

## FASE 11 — QA editorial completo — PENDIENTE

- [ ] Leer Prólogo–XXV desde la propia web.
- [ ] Comprobar orden y títulos.
- [ ] Comprobar continuidad narrativa.
- [ ] Comprobar imágenes contra el texto que las rodea.
- [ ] Comprobar mapas y referencias geográficas.
- [ ] Detectar spoilers visuales.
- [ ] Detectar imágenes repetitivas o inconsistentes.
- [ ] Corregir erratas de presentación sin alterar canon accidentalmente.

## FASE 12 — Edición web 1.0 — PENDIENTE

Se considera ELYNDRAN Web 1.0 cuando:

- [ ] Prólogo + I–XXV están completos y navegables.
- [ ] Todas las ilustraciones aprobadas están versionadas en el repositorio.
- [ ] Cada imagen aparece dentro del texto en su posición canónica.
- [ ] Los dos mapas aparecen correctamente.
- [ ] Portada e índice están terminados.
- [ ] Escritorio, tablet y móvil están validados.
- [ ] No hay imágenes rotas, 404 ni errores de consola relevantes.
- [ ] El libro puede leerse de principio a fin sin depender de GitHub.com.

---

## Regla de trabajo

No marcar una fase visual como completada porque exista un prompt o una imagen en una conversación. Una ilustración solo cuenta como terminada cuando:

1. existe como archivo final versionado en el repositorio;
2. tiene ID canónico;
3. está colocada en su ancla narrativa;
4. se ha comprobado en GitHub Pages;
5. supera continuidad, spoiler y calidad visual.

No avanzar por cantidad a costa de coherencia. El objetivo es una edición web de libro, no una galería de imágenes.