# Tech Readiness Checker

Online upitnik koji mjeri tehnološku zrelost startupa ili tima. Korisnik ispuni 24 pitanja u 6 sekcija i dobiva TR Score (0–100), TR Level (1–5) te personalizirane preporuke za svako problematično područje.

**Live demo:** https://tech-readiness-checker.vercel.app

---

## Što aplikacija radi

- Multi-step upitnik — 6 sekcija, 4 pitanja po sekciji, skala 1–5
- Izračun ukupnog score-a s ponderiranim težinama po sekcijama
- Dodjela TR Levela (1–5) na temelju ukupnog score-a
- Prikaz score-a po sekcijama s radial gauge vizualizacijom
- Automatske preporuke za svako pitanje s ocjenom ≤ 2, sortirane po impactu
- Print-friendly results stranica (Export PDF gumb)

---

## Tehnologije

- **Next.js 14** (App Router) + **TypeScript**
- **CSS Modules** za stilizaciju
- **localStorage** za čuvanje odgovora (bez baze podataka)
- Deploy na **Vercel**

---

## Pokretanje lokalno

### Preduvjeti

- Node.js 18+
- npm ili yarn

### Instalacija

```bash
git clone https://github.com/tvoj-username/trc-app.git
cd trc-app
npm install
npm run dev
```

Aplikacija se pokreće na [http://localhost:3000](http://localhost:3000).

### Build za produkciju

```bash
npm run build
npm start
```

---

## Struktura projekta

```
trc-app/
├── app/
│   ├── page.tsx                  # Početna stranica (/start)
│   ├── test/
│   │   └── page.tsx              # Upitnik (/test)
│   └── results/
│       └── page.tsx              # Rezultati (/results)
├── components/
│   ├── homepage/                 # Komponente početne stranice
│   ├── results/                  # OverallCard, SectionGrid, Recommendations
│   └── test/                     # QuestionCard, ProgressBar, NavigationButtons
├── config/
│   └── scoring.ts                # ⚙️ Sva pitanja, težine, impact i preporuke
├── lib/
│   ├── calculateScore.ts         # Logika izračuna score-a i levela
│   └── getRecommendation.ts      # Logika filtriranja i sortiranja preporuka
└── types/
    └── assessment.ts             # TypeScript tipovi
```

---

## Kako mijenjati pitanja i težine

Sve se mijenja u jednoj datoteci: **`config/scoring.ts`**

### Promjena pitanja

Svako pitanje ima sljedeću strukturu:

```ts
{
  id: "sec1_q1",
  text: "Tekst pitanja koje se prikazuje korisniku.",
  impact: 3,               // 1 = nizak, 2 = srednji, 3 = visok
  recommendation: "Konkretan savjet što popraviti."
}
```

### Promjena težina sekcija

Težine su definirane po sekciji i moraju zbrajati 100:

```ts
{
  id: "security",
  title: "Security & Privacy",
  weight: 20,   // postotak u ukupnom score-u
  questions: [...]
}
```

### Trenutne težine

| Sekcija                    | Težina |
|----------------------------|--------|
| Product & Requirements     | 10%    |
| Architecture & Code Quality| 20%    |
| Security & Privacy         | 20%    |
| Testing & Reliability      | 20%    |
| DevOps & Deployment        | 20%    |
| Data & Monitoring          | 10%    |

---

## TR Level skala

| Score   | Level | Naziv             |
|---------|-------|-------------------|
| 0–24    | 1     | Initial           |
| 25–44   | 2     | Developing        |
| 45–64   | 3     | Defined           |
| 65–84   | 4     | Advanced          |
| 85–100  | 5     | Optimised         |

---

## Deploy na Vercel

### Opcija 1 — CLI

```bash
npm i -g vercel
vercel
```

### Opcija 2 — GitHub integracija

1. Pusha repo na GitHub
2. Idi na [vercel.com](https://vercel.com) → New Project
3. Importaj repo — Vercel automatski detektira Next.js
4. Klikni Deploy

Nakon toga svaki `git push` na `main` automatski deploya novu verziju.

---

## Export PDF

Na stranici rezultata klikni **Print to PDF** — otvara se browser print dijalog. Stranica ima poseban `@media print` stil koji skriva navigacijske gumbe i optimizira layout za A4.

---

## Kontakt

Za pitanja, prijedloge novih pitanja ili promjene preporuka — otvori GitHub Issue ili se javi direktno.
