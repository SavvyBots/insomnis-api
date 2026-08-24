# Estrategia SEO — Listing Stream (insomnis.dev)

Enfoque: **nicho, no volumen**. El objetivo no es tráfico masivo, sino que los pocos desarrolladores que buscan esto exacto te encuentren en la primera posición. Con 10-20 páginas indexadas bien optimizadas es más que suficiente.

---

## 1. Keywords objetivo

### Primarias (intención de compra/integración, poco volumen, poca competencia)
- `api vinted tiempo real`
- `websocket vinted wallapop`
- `api wallapop`
- `api milanuncios`
- `feed anuncios segunda mano api`
- `webhook nuevos anuncios vinted`

### Secundarias (long-tail, capturan a devs que están investigando)
- `como scrapear vinted`
- `alternativa scraping vinted api`
- `vinted api no oficial`
- `wallapop api no oficial python`
- `websocket marketplace segunda mano españa`
- `detectar anuncios nuevos vinted automatico`

### Nota
No hay volumen de búsqueda alto en ninguna de estas — es intencionado. Optimiza para que aparezcas en el 100% de esas búsquedas, no para competir por palabras genéricas tipo "api segunda mano" (demasiado ambiguas, atraerán tráfico que no convierte).

---

## 2. Metadatos

**Home (`/`)**
- Title: `Listing Stream — WebSocket en tiempo real para Vinted, Wallapop, Milanuncios y Todocolección`
- Meta description (ya la tienes, está bien): mantenla, es concisa y usa el keyword principal.

**Recomendación:** el title actual del `<title>` HTML puede no coincidir exactamente con el H1 visible ("Un WebSocket. Cada anuncio nuevo, al instante."). Para SEO, el H1 debería incluir al menos una keyword literal (ej. "vinted", "wallapop") — el H1 actual es muy abstracto y no aporta señal semántica a Google.

Sugerencia de H1 alternativo (sin perder el tono):
> `WebSocket en tiempo real para Vinted, Wallapop, Milanuncios y Todocolección`

---

## 3. Estructura de contenido (mínima, no sobrecargues el proyecto)

Dado que quieres simplicidad, no hace falta un blog completo. Con 3-4 páginas adicionales basta:

1. **`/docs` o `/api`** — documentación técnica pública (lo que ya tienes en la home, pero como página propia indexable). Los desarrolladores buscan "api reference" y esto also sirve como landing para long-tail técnico.
2. **`/vinted-api`** (o similar, una página por plataforma si quieres capturar búsquedas específicas) — "¿Cómo obtener anuncios nuevos de Vinted en tiempo real?" con el ejemplo de código embebido.
3. **`/wallapop-api`** — mismo patrón.
4. Opcional: **`/changelog`** — señal de que el proyecto está vivo y mantenido, algo que los devs valoran antes de pagar 49€/mes.

Cada página específica de plataforma = 300-500 palabras, un ejemplo de código, y enlace a la home para contratar. No fuerces contenido de relleno.

---

## 4. Datos estructurados (Schema.org)

Añade JSON-LD tipo `SoftwareApplication` u `Offer` en la home. Ayuda a que Google entienda que es un producto/servicio con precio, y puede generar rich snippets:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Listing Stream",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31"
  },
  "description": "WebSocket en tiempo real para anuncios nuevos de Vinted, Wallapop, Milanuncios y Todocolección."
}
```

---

## 5. Técnico (checklist rápido)

- [ ] `sitemap.xml` generado (Astro lo hace fácil con `@astrojs/sitemap`)
- [ ] `robots.txt` permitiendo indexación completa (no hay nada sensible que ocultar)
- [ ] Canonical tags en cada página
- [ ] Open Graph + Twitter Card (para que se vea bien si alguien lo comparte en Twitter/X o Reddit, canal probable de descubrimiento)
- [ ] Velocidad: Astro ya es rápido de base, solo revisa que no cargues fuentes/JS innecesario
- [ ] Versión `/en/` (ya la tienes con el selector ES/EN) — asegúrate de que tiene su propio `hreflang` para no competir contigo mismo en Google

---

## 6. Off-page (donde están tus 20 desarrolladores)

El SEO orgánico puro tardará meses en traer resultados para un nicho tan pequeño. Complementa con presencia puntual (una vez, bien hecha, no spam) en:

- **GitHub**: un repo de ejemplo/wrapper open-source (aunque el servicio sea de pago) que enlace a la web. Los devs buscan en GitHub antes que en Google.
- **Foros/comunidades**: r/webdev, r/SideProject, foros de scraping/automatización — post técnico explicando el problema que resuelve, no un anuncio.
- **Hacker News "Show HN"**: encaja perfectamente con el perfil de "herramienta nicho para developers".

Estos canales generan backlinks + tráfico cualificado de golpe, algo que el SEO orgánico solo no te va a dar a corto plazo con tan poco volumen de búsqueda.

---

## Resumen de prioridades

1. Ajustar H1 + añadir Schema.org (1 hora de trabajo, impacto inmediato)
2. Crear 2 páginas específicas por plataforma (Vinted, Wallapop) — capturan el long-tail técnico
3. Un post en GitHub/HN — más efectivo que 3 meses de SEO orgánico para este volumen de audiencia
