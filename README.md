# Velvoix Website

Publieke, meertalige one-page website voor `velvoix.com`.

Stack:
- Astro
- Tailwind CSS
- statische build

Routes:
- `/` Nederlands
- `/en/` English
- `/de/` Deutsch
- `/es/` Español

## Lokaal starten

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

De statische output staat daarna in:

```text
dist/
```

## Locale route smoke-check

Om snel te detecteren of een locale-route per ongeluk de verkeerde taalvariant serveert, staat er een kleine smoke-check op de build-output.

Deze check valideert voor:
- `/`
- `/en/`
- `/de/`
- `/es/`

Per route controleert de smoke-check:
- `html lang`
- `<title>`
- hero `<h1>`
- stabiele locale-markers in de navigatie

Lokaal draaien:

```sh
npm run verify:locales
```

Alleen de guard draaien op bestaande build-output:

```sh
npm run smoke:locales
```

De check faalt expliciet als bijvoorbeeld `/de/` Nederlandse hero-content of andere locale-markers bevat.

## cPanel deployment

Deze site is bedoeld voor eenvoudige deployment via cPanel Git Version Control.

Gebruik in cPanel:
- clone een aparte repository-map
- deploy daarna `dist/` naar de live domeinmap

De deploy-config staat in:

```text
.cpanel.yml
```

Live doelmap:

```text
/home/msntjkfwsr/velvoix.com/
```

## Contactformulier

Het contactformulier gebruikt nu een nette mock submit-flow met validatie en success/error state.

Later kan dit eenvoudig worden aangesloten op:
- Formspree
- een eenvoudige mail endpoint
- een cPanel form handler

De koppeling zit logisch geconcentreerd in:

```text
src/components/ContactForm.astro
```
