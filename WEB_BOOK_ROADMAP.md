# ELYNDRAN — ROADMAP LIBRO WEB

Objetivo: convertir el manuscrito canónico de ELYNDRAN en una edición web completa, ilustrada, coherente y preparada para lectura en escritorio y móvil mediante GitHub Pages.

## Estado global

- Manuscrito: Prólogo + capítulos I–XXV disponibles.
- Lector HTML: operativo en GitHub Pages.
- Navegación: capítulos, anterior/siguiente, continuar lectura y progreso disponibles.
- Temas: negro, blanco y papel.
- Mapas: Mapa A tras XII y Mapa B tras XXV.
- Ilustraciones: contrato de nombres y posiciones preparado; producción raster pendiente.
- Biblia visual: `art/VISUAL_BIBLE_WEB_V1.md` canónica.

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

## FASE 2 — Arquitectura de ilustración — COMPLETADA

- [x] Definir `art/masters/` como ubicación canónica de raster finales.
- [x] Definir IDs de ilustración por capítulo.
- [x] Insertar ilustraciones dentro del flujo narrativo.
- [x] Ocultar de forma segura imágenes inexistentes.
- [x] Mantener Atlas como índice visual secundario.
- [x] Integrar mapas en el punto narrativo correspondiente.

Masters iniciales: `PROLOGO-A`, `I-A`, `I-I1`, `II-A`, `IV-A`, `V-A`, `X-A`, `XIV-A`, `XV-A`, `XVI-A`, `XXV-A`, `XXV-I2`.

## FASE 3 — Biblia visual y continuidad — COMPLETADA

- [x] Fijar identidad visual de Aster.
- [x] Fijar traje EVA Mark-I y desgaste acumulativo.
- [x] Fijar cápsula y continuidad de daños.
- [x] Fijar lenguaje visual de Elyndran.
- [x] Fijar reglas de fauna y flora.
- [x] Fijar fotografía/composición cinematográfica.
- [x] Fijar relaciones de continuidad críticas I↔XXV, IV↔posteriores y X↔XXIV.
- [x] Fijar regla anti-spoiler visual.
- [x] Fijar criterios de aprobación de masters.

Contrato: `art/VISUAL_BIBLE_WEB_V1.md`.

## FASE 4 — Oleada visual prioritaria X / XIV / XV / XVI — ACTIVA

- [ ] `X-A.webp`
- [ ] `XIV-A.webp`
- [ ] `XV-A.webp`
- [ ] `XVI-A.webp`
- [ ] QA de anatomía, escala, spoilers y continuidad.
- [ ] Comprobar cada imagen dentro del texto real en móvil y escritorio.

Bloqueo actual: producción raster final. Los masters no se marcarán completos hasta existir físicamente en GitHub y verse correctamente en Pages.

## FASE 5 — Prólogo y primera exploración — PENDIENTE

- [ ] `PROLOGO-A.webp`
- [ ] `I-A.webp`
- [ ] `I-I1.webp`
- [ ] `II-A.webp`
- [ ] `IV-A.webp`
- [ ] `V-A.webp`
- [ ] Revisar posición exacta entre párrafos.
- [ ] Revisar spoilers.

## FASE 6 — Cierre visual XXV — PENDIENTE

- [ ] `XXV-A.webp`
- [ ] `XXV-I2.webp`
- [ ] Revisar continuidad visual con I y mapas.
- [ ] Validar ausencia de spoilers.

## FASE 7 — Cobertura visual completa I–XXV — PENDIENTE

- [ ] Auditoría capítulo por capítulo.
- [ ] Crear nuevos IDs solo cuando aporten una escena narrativa importante.
- [ ] Evitar saturación visual.
- [ ] Numerar ilustraciones y registrar ancla narrativa.

## FASE 8 — Maquetación premium — PENDIENTE

- [ ] Portada real.
- [ ] Página de entrada / comenzar a leer.
- [ ] Separadores narrativos si el canon los admite.
- [ ] Capitulares y jerarquía editorial.
- [ ] Pies de ilustración discretos.
- [ ] Tratamiento de comunicaciones/instrumentación.
- [ ] Ritmo vertical texto/imagen.
- [ ] Modo lectura sin distracciones.
- [ ] Índice móvil desplegable.

## FASE 9 — Experiencia móvil y accesibilidad — PENDIENTE

- [ ] QA 360–430 px.
- [ ] QA tablet.
- [ ] Sin sidebar permanente en móvil.
- [ ] Imágenes sin recortes destructivos.
- [ ] Texto legible sin zoom manual.
- [ ] Contraste AA donde aplique.
- [ ] Navegación por teclado.
- [ ] `alt` narrativo.
- [ ] `prefers-reduced-motion`.

## FASE 10 — Rendimiento y publicación — PENDIENTE

- [ ] WebP/AVIF optimizados.
- [ ] Lazy loading.
- [ ] Dimensiones declaradas para reducir CLS.
- [ ] Revisar estrategia de carga de capítulos/assets.
- [ ] Caché/versionado.
- [ ] Comprobar 404/rutas relativas.
- [ ] Validar desde móvil real.

## FASE 11 — QA editorial completo — PENDIENTE

- [ ] Leer Prólogo–XXV desde la web.
- [ ] Comprobar orden/títulos.
- [ ] Comprobar continuidad narrativa.
- [ ] Comprobar imágenes contra texto inmediato.
- [ ] Comprobar mapas/geografía.
- [ ] Detectar spoilers visuales.
- [ ] Detectar inconsistencias/repeticiones.
- [ ] Corregir presentación sin alterar canon.

## FASE 12 — Edición web 1.0 — PENDIENTE

- [ ] Prólogo + I–XXV completos y navegables.
- [ ] Ilustraciones aprobadas versionadas.
- [ ] Imágenes en posición canónica dentro del texto.
- [ ] Mapas correctos.
- [ ] Portada e índice terminados.
- [ ] Escritorio/tablet/móvil validados.
- [ ] Sin imágenes rotas, 404 ni errores relevantes.
- [ ] Lectura completa independiente de GitHub.com.

---

## Regla de trabajo

Una ilustración solo cuenta como terminada cuando existe como archivo final en el repositorio, tiene ID canónico, está colocada en su ancla narrativa, se comprueba en GitHub Pages y supera continuidad/spoiler/calidad. No avanzar por cantidad a costa de coherencia.