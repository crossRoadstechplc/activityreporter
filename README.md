# B Agro Farm Records Demo

A small bilingual (Amharic/English) Next.js demo for daily coffee collection and farm operations. No database or backend required.

## Run

Requires Node.js 20.9+ (Node.js 22 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use the EN / አማ button to switch languages.

## Data

Sample records are in `src/data/coffee.json` and `src/data/operations.json`. On first visit they load into the app. Changes are stored in **localStorage**, separately for each module, on that browser. Editing the seed JSON later will not replace already-saved browser records. To reset the demo, remove localStorage keys `b-agro-coffee` and `b-agro-operations` in browser developer tools.

## Features

- Two pages, Amharic and English UI
- Add, edit, delete, search, date filter
- Automatic coffee difference (`picked - delivered`)
- Excel export of filtered rows, print-friendly table
- Responsive design, no authentication or server

## Limitations

- This is a meeting demo, not multi-user software. Data is not shared across devices or browsers.
- Signature fields are represented by names; no digital signatures.
- Print uses the currently filtered table, not an exact replica of the paper forms.
- Google Fonts needs an internet connection on first load; browser fallback fonts are provided.
