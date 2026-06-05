# KMFootball — strona szkółki piłkarskiej

Strona-wizytówka dla trenera **Krzysztofa Możdżonka** prowadzącego szkółkę piłkarską
dla dzieci od 6 lat w Warszawie (Orlik przy SP nr 92, ul. Przasnyska 18A, Żoliborz).

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** (konfiguracja przez `@theme` w `src/app/globals.css`)
- Hosting: **Vercel** (auto-deploy z brancha `master`)
- Repo: `github.com/norbbert/kmfootball`
- Domena docelowa: `kmfootball.pl` (kupiona na nazwa.pl, DNS jeszcze do podpięcia)
- **Vercel Analytics** zainstalowany (`@vercel/analytics`)

## Struktura

Jednostronicowy landing (`src/app/page.tsx`) złożony z sekcji w `src/components/`:

| Komponent | Sekcja |
|-----------|--------|
| `Navbar.tsx` | Nawigacja (client — menu mobilne z hamburgerem) |
| `Hero.tsx` | Ekran powitalny |
| `About.tsx` | O trenerze + statystyki + kariera zawodnicza |
| `Offer.tsx` | Treningi (jedna grupa 6+) |
| `VideoGallery.tsx` | Galeria nagrań |
| `ZapisyForm.tsx` | Jak się zapisać (3 kroki + telefon/Instagram) |
| `Kontakt.tsx` | Telefon, lokalizacja, social media, mapa Google |
| `Footer.tsx` | Stopka |

- Motyw: **czarno-złoty**. Kolory złota w `globals.css` (`--color-gold`,
  `--color-gold-light`, `--color-gold-dark`) + utility `.bg-gold-gradient`
  i `.text-gold-gradient`.
- SEO/OG: `src/app/layout.tsx` (metadata), `src/app/opengraph-image.tsx`
  (dynamiczna grafika podglądu), `src/app/icon.svg` (favicon — monogram KM).

## Uruchomienie

> **Uwaga (środowisko Windows):** `node`/`npm` nie są w PATH domyślnie.
> Przed komendami:
> `$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")`

```
npm run dev     # localhost:3000
npm run build   # build produkcyjny
```

Deploy: `git push` na `master` → Vercel buduje automatycznie.

---

## ⏳ DO ZROBIENIA (projekt zawieszony)

### Czeka na materiały od trenera
- [ ] **Nagrania z treningów** — zastąpić placeholdery w `VideoGallery.tsx`
      (obecnie WSZYSTKIE 4 to `dQw4w9WgXcQ` = Rick Roll, widoczne na produkcji!).
      Kierunek: surowe, nieobrobione klipy z telefonu — słychać trenera i dzieci,
      ma oddać klimat. **Decyzja do podjęcia:** native `<video>` (lepszy do surowego
      vibe'u, ale uwaga na rozmiar plików) vs YouTube unlisted (obecna implementacja).
- [ ] **Zdjęcie trenera** — zastąpić placeholder SVG w `About.tsx` (lewa kolumna, aspect-[4/5]).
- [ ] **Zdjęcie certyfikatu** (licencja trenerska) — nowy element w `About.tsx`
      lub mini-sekcja budująca wiarygodność.

### Dane do uzupełnienia
- [ ] **Harmonogram treningów** — w `Offer.tsx` jest "ustalany indywidualnie".
      Podmienić na realne dni/godziny gdy ustalone.
- [ ] **Statystyki w `About.tsx`** — zweryfikować z trenerem (10+ lat kariery,
      U19, 8 klubów). Są oparte na historii transferowej, warto potwierdzić.

### Konfiguracja / deployment
- [ ] **Podpiąć domenę kmfootball.pl** — w Vercel (Settings → Domains) dodać
      `kmfootball.pl` + `www`, potem ustawić rekordy DNS na nazwa.pl
      (A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com` — zweryfikować
      z tym co pokaże Vercel).
- [ ] **Włączyć Vercel Analytics** w panelu (zakładka Analytics → Enable).

### Opcjonalne — podbicie konwersji (omówione, nie wdrożone)
- [ ] **Przycisk WhatsApp** — rodzice wolą napisać niż dzwonić.
- [ ] **Sekcja / hook "Pierwszy trening gratis"** — mocny CTA na landingu.
- [ ] **Vercel Speed Insights** — drugi darmowy moduł (wydajność u realnych userów).

### Marketing (poza kodem — do zrobienia przez właściciela)
- [ ] Google Business Profile (najważniejsze dla lokalnego SEO).
- [ ] Regularne Reelsy/TikToki z surowych nagrań → link w bio do strony.
- [ ] Posty w lokalnych grupach FB (Żoliborz/rodzice), ew. test Meta Ads (geo 5 km).
