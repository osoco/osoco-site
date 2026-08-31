# osoco-site

Sitio web de OSOCO (https://osoco.es), generado como sitio estático con
[Hugo](https://gohugo.io/) y un tema propio (`site/themes/hugo-osoco-theme`).
Cada push a `master` dispara la construcción y publicación en Netlify.

## Requisito: Hugo 0.30.2 (exactamente)

El sitio y el tema son de la era de Hugo 0.30 (2017) y **no compilan con
versiones modernas de Hugo** (cambios en plantillas, taxonomías y motor de
Markdown). Hay que usar el binario 0.30.2, el mismo que usa Netlify.

Instalación en Linux (una sola vez):

```bash
curl -sSL -o /tmp/hugo.tgz https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.tar.gz
tar -xzf /tmp/hugo.tgz -C /tmp hugo
install -m 755 /tmp/hugo ~/.local/bin/hugo-0.30
```

Se instala como `hugo-0.30` para no interferir con un Hugo moderno que
pueda haber en el sistema.

## Desarrollo en local

```bash
cd site
hugo-0.30 server
```

Y abrir http://localhost:1313. El servidor recarga el navegador
automáticamente al editar contenido o plantillas. Opciones útiles:

- `hugo-0.30 server --buildDrafts --buildFuture` — ver borradores y posts con fecha futura.
- `hugo-0.30 -s site -d dist` (desde la raíz) — solo generar el sitio estático.

## Añadir un post

1. Crear `site/content/thoughts/<slug>.md` con front matter TOML (ver
   cualquier post existente como plantilla: `title`, `subtitle`, `date`,
   `months`, `authors`/`authorPhotos`, `tags`, `summary`, `background`,
   `backgroundSummary`).
2. Las imágenes van en `site/static/images/thoughts/` y se insertan con
   `{{< figure src="/images/thoughts/..." >}}`. Los campos `background` y
   `backgroundSummary` (banner y miniatura del listado) también se sirven
   desde ese directorio.
3. Las URLs siguen el patrón `/thoughts/:year/:month/:title/`, derivado del
   **título**. Si dos posts comparten título (p. ej. versiones en dos
   idiomas), fijar la URL con `url = "..."` en el front matter para evitar
   colisiones.
4. Referencias bibliográficas: notas al pie `[^n]` en el texto y sección
   final `# Referencias` (ver `amiga-smalltalk.md` o
   `as-we-may-think-software.md` como ejemplo, este último también del
   patrón bilingüe con enlaces cruzados entre idiomas).

## Despliegue (Netlify)

Configurado en `netlify.toml`: ejecuta `scripts/netlify-build.sh`, que
descarga el binario de Hugo 0.30.2 y construye `site/` → `dist/`.

No se puede usar la variable `HUGO_VERSION` de Netlify: su sistema de
instalación actual (mise) solo conoce la variante *hugo-extended*, que no
existe para versiones tan antiguas, y falla con un 404.

## Nota histórica: pipeline npm/gulp

El repo nació del boilerplate "Victor Hugo" (Hugo + Gulp + Webpack). Ese
pipeline (`package.json`, `gulpfile.js`, `src/`) es **vestigial**: nada del
sitio publicado referencia su salida (`app.js`, `dist/css/*`). Los CSS y JS
reales viven en `site/themes/hugo-osoco-theme/static/`. No hace falta Node
ni `npm install` para trabajar con el sitio.
