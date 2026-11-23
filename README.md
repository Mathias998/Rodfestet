# Rodfestet – hjemmeside

Next.js 15 hjemmeside for Rodfestet Catering (rodfestet.dk).

## Krav

- **Node.js 24.x** (se `.nvmrc`). Installer via [nvm](https://github.com/nvm-sh/nvm) eller [nvm-windows](https://github.com/coreybutler/nvm-windows).
- **npm** (følger med Node).

## Kom i gang

```bash
# 1. Klonér repoet (kun første gang)
git clone https://github.com/Mathias998/Rodfestet.git
cd Rodfestet

# 2. Installer afhængigheder
npm install

# 3. Opret miljøvariabel-fil
cp .env.example .env.local
# Åbn .env.local og indsæt din RESEND_API_KEY

# 4. Start udviklingsserveren
npm run dev
# → http://localhost:3000
```

## Miljøvariabler

| Variabel         | Påkrævet | Beskrivelse                                   |
|------------------|----------|-----------------------------------------------|
| `RESEND_API_KEY` | Ja (prod) | API-nøgle til e-maillevering via Resend.com  |

Uden `RESEND_API_KEY` virker alt undtagen kontaktformularen. Vercel Production-miljøet har nøglen sat; Preview-miljøer har den ikke (forventet adfærd).

## Udrulning

Projektet hostes på **Vercel** og er koblet til dette GitHub-repo.

- Push til `main` → udrulles automatisk til **rodfestet.dk** (produktion).
- Push til anden gren → Vercel bygger en preview-URL.

```bash
git add .
git commit -m "Kort beskrivelse af ændringen"
git push
```

## Arbejdsgang på flere pc'er

Husk altid at hente seneste version **inden** du begynder at arbejde:

```bash
git pull
```

Og installer eventuelle nye pakker, hvis `package.json` er ændret:

```bash
npm install
```

## Teknologi

- **Next.js 15** – App Router, TypeScript
- **Tailwind CSS 3**
- **Resend** – e-maillevering
- **Vercel** – hosting og CI/CD

## Projektstruktur

```
app/            Sider og API-ruter (App Router)
components/     Genbrugelige React-komponenter
  layout/       Header og Footer
  sections/     Sektions-komponenter (hero, process, …)
  ui/           Generelle UI-elementer (PageHero, CookieBanner, …)
data/           Statiske datafiler (navigation, inspiration, …)
public/         Statiske filer (billeder, logoer, SVG)
```
