# Salix — Analisi Strutturale
**Source:** https://salix.framer.website/
**Tipo:** Multi-layout SaaS & Startup Framer Template
**Data analisi:** 2026-02-26

---

## Sezioni

### 1. Gradient Bar Superiore
- **Ordine:** 1 / prima di tutto
- **Layout:** Full-width, altezza fissa 8px
- **Componenti UI:** Nessuno — divisore puramente decorativo
- **Spacing:** Ultra-compatto
- **Animazioni:** Nessuna
- **Palette:** Gradiente orizzontale ciano `#21ccee` → blu `#1470ef` → viola `#6927da` → rosa `#f23d94`

---

### 2. Navigation / Header
- **Ordine:** 2
- **Layout:** Centrato, max-width 1200px, sticky top, z-index alto
- **Componenti UI:** Logo (aspect-ratio 2.57), link nav orizzontali (6–8 voci, gap 56px), 2 CTA button a destra, hamburger mobile
- **Spacing:** Generoso — padding verticale 15–21px, gap tra link 56px desktop / ridotto tablet
- **Animazioni:** Dropdown reveal su hover con elevation z-index; hamburger icon flip su mobile
- **Palette:** Sfondo bianco puro, testo `#181818`, accent CTA in blu/ciano

---

### 3. Dropdown Menu
- **Ordine:** 3 (overlay sopra header)
- **Layout:** Assoluto sotto header (top 65px mobile), colonna su mobile / riga su desktop
- **Componenti UI:** Menu items con tooltip hover
- **Spacing:** Compatto mobile (padding 10px), generoso desktop
- **Animazioni:** Slide-down / fade-in su hover
- **Palette:** Eredita da header — bianco bg, testo scuro

---

### 4. Hero Section
- **Ordine:** 4
- **Layout:** Centrato, max-width 1060px, colonna unica, testo centrato
- **Componenti UI:** Badge pill (label categoria), H1 large, sottotitolo body, 2 CTA button (primario + secondario ghost), eventuale mockup/visual sotto
- **Spacing:** Molto generoso — padding top 160px, padding bottom 110px, gap interno tra blocchi 90px, microspacing 24px
- **Animazioni:** Fade-in + leggero slide-up all'entrata; badge con shimmer/glow possibile
- **Palette:** Background bianco, H1 `#181818`, body `#46484d`, accent sui button in gradiente ciano→blu

---

### 5. Social Proof / Logo Strip
- **Ordine:** 5
- **Layout:** Full-width o centrato, flex row con wrap, spaziatura uniforme
- **Componenti UI:** Loghi partner/clienti in scala di grigi, eventuale label "trusted by"
- **Spacing:** Compatto — altezza sezione contenuta, loghi equidistanti
- **Animazioni:** Marquee scroll orizzontale infinito (possibile)
- **Palette:** Loghi monocromatici grigi, sfondo bianco o grigio chiarissimo `#f5f5f5`

---

### 6. Features / Product Highlights
- **Ordine:** 6
- **Layout:** Grid 2–3 colonne desktop, stack colonna su mobile; possibile layout asimmetrico con visual grande + lista feature laterale
- **Componenti UI:** Card con icona + titolo + descrizione, badge "New" o highlight, eventuale screenshot/mockup dashboard
- **Spacing:** Generoso — gap tra card 24–32px, padding interno card 28–36px
- **Animazioni:** Fade-in staggered per ogni card all'ingresso nel viewport
- **Palette:** Card su sfondo bianco con bordo sottile `#e8e8e8` o `#f5f5f5`; icone in accent ciano/blu

---

### 7. Dashboard / Product Screenshot
- **Ordine:** 7
- **Layout:** Full-width o centrato con max-width ampio, immagine/mockup dominante
- **Componenti UI:** Immagine browser mockup o device frame, eventuale caption o bullet list laterale
- **Spacing:** Generoso — sezione breathing ampia, isolamento visivo del mockup
- **Animazioni:** Parallax leggero sullo scroll, o scale-up on-enter
- **Palette:** Sfondo leggermente off-white o gradiente molto tenue, mockup in dark mode per contrasto

---

### 8. CTA / Banner Intermedio
- **Ordine:** 8
- **Layout:** Full-width centrato, testo centrato, 1–2 button
- **Componenti UI:** Titolo medio, sottotesto, button primario + secondario
- **Spacing:** Compatto verticalmente — sezione snella di interruzione ritmica
- **Animazioni:** Fade-in semplice
- **Palette:** Sfondo scuro `#181818` o gradiente viola→ciano come inversione rispetto al resto

---

### 9. Pricing / Plans
- **Ordine:** 9
- **Layout:** Grid 3 colonne desktop (Free / Pro / Enterprise), centrato, card equidimensionali con evidenza sul piano consigliato
- **Componenti UI:** Card con toggle mensile/annuale, badge "Most Popular", lista feature con checkmark, button CTA per piano, eventuale tooltip su feature
- **Spacing:** Generoso — card padding 32–40px, gap tra card 20–24px
- **Animazioni:** Scale-up leggero sulla card highlighted; hover lift sulle altre
- **Palette:** Card bianche con bordo; card highlighted con bordo accent blu o gradiente; checkmark in ciano

---

### 10. Testimonials
- **Ordine:** 10
- **Layout:** Grid 2–3 colonne o carosello, card quote
- **Componenti UI:** Card con avatar, nome, ruolo, testo citazione, stelle rating
- **Spacing:** Generoso — card padding 28px, gap 20px
- **Animazioni:** Fade-in staggered o scroll orizzontale slider
- **Palette:** Card su `#f5f5f5` o bianco con bordo sottile; stelle in giallo/ciano

---

### 11. FAQ
- **Ordine:** 11
- **Layout:** Colonna centrata, max-width 720–800px, accordion
- **Componenti UI:** Item accordion con titolo domanda + chevron, espansione risposta, separatori sottili
- **Spacing:** Compatto tra item (8–12px), padding interno generoso (16–20px)
- **Animazioni:** Expand/collapse con height transition; chevron rotate 180°
- **Palette:** Sfondo bianco, bordo `#e8e8e8`, testo `#181818` / `#46484d`

---

### 12. Footer
- **Ordine:** 12
- **Layout:** Grid 4–5 colonne desktop (logo + nav groups), stack su mobile
- **Componenti UI:** Logo, colonne link per categoria, social icons, copyright, eventuale newsletter input
- **Spacing:** Generoso — padding top 80px, padding bottom 40px, gap colonne 40–60px
- **Animazioni:** Nessuna — area statica
- **Palette:** Sfondo scuro `#181818` o bianco con separatore top; testo grigio chiaro su dark / grigio medio su light

---

### 13. Gradient Bar Inferiore
- **Ordine:** 13 / ultimo
- **Layout:** Full-width, altezza 8px
- **Componenti UI:** Nessuno — specchio del bar superiore
- **Animazioni:** Nessuna
- **Palette:** Identica alla bar superiore — ciano → blu → viola → rosa

---

## Design Principles

### 1. Ritmo metronomico basato su multipli di 8
Tutta la geometria della pagina segue un sistema di spacing basato su 8px (microspacing 8, componenti 16–24, gap sezione 32–48, respiro macro 80–160px). Il risultato è un ritmo visivo uniforme e mai caotico anche nelle sezioni più dense.

### 2. Bianco come protagonista, non come sfondo passivo
L'80% della superficie è bianca ma non vuota: il bianco viene usato attivamente per isolare elementi, amplificare i pochi accenti cromatici e garantire leggibilità AAA. Le rare sezioni scure (`#181818`) creano inversioni di ritmo ad alto impatto.

### 3. Gerarchia tipografica a tre livelli netti
Il sistema tipografico distingue chiaramente tre strati — H1/display in Geist 700 (peso visivo dominante), body in Inter 400/500 (lettura fluida), label/badge in Outfit 600/900 (accento identitario). Non ci sono livelli ambigui: ogni testo sa esattamente dove si trova nella gerarchia.

### 4. Gradiente come firma, non come riempimento
Il gradiente ciano→blu→viola→rosa appare esclusivamente come elemento identitario (le due bar decorative) e negli accent CTA. Non viene mai usato come sfondo di sezione intera, il che ne preserva il valore semantico e impedisce l'effetto "gradient soup" tipico di certi SaaS template.

### 5. Animazioni al servizio della leggibilità, non dell'effetto
Le animazioni on-scroll (fade-in, slide-up staggered) hanno il solo scopo di guidare l'attenzione progressivamente senza mai sovrastare il contenuto. La durata è breve (200–400ms stimati), il che mantiene la percezione di velocità e performance.

### 6. Hover come feedback tattico, non decorativo
Gli stati hover sono precisi e funzionali: lift su card, cambio colore su link, border-highlight su input. Non ci sono effetti spettacolari — ogni hover comunica "questo elemento è interagibile" senza distrarre dal contenuto circostante.

### 7. Inversione dark come punto di climax visivo
Le sezioni su sfondo scuro (CTA banner, potenzialmente footer) non sono casuali: si trovano in posizioni strategiche di interruzione del ritmo per creare una sensazione di "cambio atto" nella narrazione della pagina. Questo uso parsimonioso del dark massimizza il suo impatto drammatico.
