# Velvoix Website

Publieke, tweetalige one-page website voor `velvoix.com`.

Stack:
- Astro
- Tailwind CSS
- statische build

Routes:
- `/` Nederlands
- `/en/` English

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
