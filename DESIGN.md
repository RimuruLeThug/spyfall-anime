---
name: Spyfall Anime
description: A capsule machine for Spyfall rounds played over Discord; every card is one capsule, opened in private.
colors:
  machine: "#1a1a1c"
  shell: "#242426"
  seam: "#3a3a3d"
  seam-hi: "#4a4a4e"
  ink: "#f5f3ee"
  muted: "#adadb2"
  paper: "#fbfaf7"
  paper-ink: "#1b1b1d"
  paper-muted: "#5d5d63"
  lieu: "#4fb3ff"
  objet: "#ffd23f"
  objet-lit: "#ffdc66"
  groupe: "#ff6159"
  perso: "#5fd8a4"
  champion: "#b893ff"
  people: "#ff9f43"
  capsule-silver: "#c3c6cd"
  alert: "#ff958e"
typography:
  display:
    fontFamily: "Mochiy Pop One, M PLUS Rounded 1c, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  ticket:
    fontFamily: "Mochiy Pop One, M PLUS Rounded 1c, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  code:
    fontFamily: "Mochiy Pop One, M PLUS Rounded 1c, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    letterSpacing: "0.06em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Mochiy Pop One, M PLUS Rounded 1c, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Mochiy Pop One, M PLUS Rounded 1c, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "M PLUS Rounded 1c, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.55
  body-small:
    fontFamily: "M PLUS Rounded 1c, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "M PLUS Rounded 1c, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
  button:
    fontFamily: "M PLUS Rounded 1c, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
  caption:
    fontFamily: "M PLUS Rounded 1c, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.35
rounded:
  inset: "9px"
  field: "10px"
  control: "12px"
  panel: "14px"
  pill: "999px"
  round: "50%"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  panel: "22px"
  xl: "24px"
  xxl: "28px"
components:
  button-primary:
    backgroundColor: "{colors.objet}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.objet-lit}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  button-ghost-small:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "8px 12px"
  button-choice:
    backgroundColor: "{colors.machine}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  dial:
    backgroundColor: "{colors.objet}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "8px 20px 8px 8px"
  dial-hover:
    backgroundColor: "{colors.objet-lit}"
  dial-knob:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.round}"
    size: "40px"
  capsule:
    size: "200px"
    width: "200px"
    height: "300px"
  capsule-game-desktop:
    size: "260px"
  capsule-game-phone:
    size: "170px"
  capsule-verdict:
    size: "60px"
  ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.ticket}"
    rounded: "{rounded.control}"
    padding: "22px 20px"
  phase-stepper:
    backgroundColor: "{colors.machine}"
    rounded: "{rounded.control}"
    padding: "4px"
  phase-current:
    backgroundColor: "{colors.objet}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.inset}"
    padding: "8px 4px"
  phase-upcoming:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  phase-done:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  verdict-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.control}"
    padding: "18px"
  panel:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "22px"
  input:
    backgroundColor: "{colors.machine}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "11px 12px"
  tabs:
    backgroundColor: "{colors.machine}"
    rounded: "{rounded.control}"
    padding: "4px"
  tab-selected:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.ink}"
    rounded: "{rounded.inset}"
    padding: "9px 8px"
  vote-tile:
    backgroundColor: "{colors.machine}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 10px"
  status-pill:
    backgroundColor: "{colors.machine}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  code-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.code}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
---

# Design System: Spyfall Anime

## Overview

**Creative North Star: "The Capsule Machine"**

Every round is a pull from a gachapon machine. The page is the machine's body: a matte graphite shell with soft seams, and the only bright things on it are the plastic capsules and the one yellow lever you pull next. Your card is the capsule you got, twisted open in private: the two halves rotate apart and a white paper ticket slides out with the name on it. The spy pulls a clear, empty capsule.

The system is dark, rounded and calm, built for a tab sitting next to Discord for an hour. Density is moderate: two work areas on desktop (the capsule and its ticket on the left, the round's phase on the right), one column on a phone. Color carries meaning, never decoration: three capsule plastics name the three card categories, paper white marks the thing you read, yellow marks the thing you press. The game screen shows no list of possible answers; the capsule and its ticket are the only content about the card.

**Key Characteristics:**
- Graphite machine body in two tones, separated by 1px seams rather than shadows.
- Capsule plastics as the category system: sky blue Lieu, yellow Objet, tomato Groupe, mint Personnage, violet Champion (League of Legends), orange Personnalité (French personalities), clear for the spy, silver while still closed.
- White paper surfaces with dark ink for everything that is read as an outcome: the ticket, the verdict, the game code.
- A pop rounded display face for names and headings over a rounded workhorse body at 500 and 800.
- One springy ease for every mechanical motion; nothing moves when reduced motion is requested.

## Colors

A graphite body, three saturated capsule plastics, and a warm paper white.

### Primary
- **Gacha Yellow** (`objet`): the Objet plastic and, because there is one lever on this machine, the single action color: primary buttons, the coin dial, the current phase, focus rings, text selection, caret, links, checkbox accent and step-number markers. **Lit Yellow** (`objet-lit`) is its hover state only.

### Secondary
- **Sky Plastic** (`lieu`): the Lieu capsule, category dot and capsule rim. Category only.
- **Tomato Plastic** (`groupe`): the Groupe capsule, category dot and capsule rim. Category only.
- **Closed Silver** (`capsule-silver`): the capsule before it is opened, drawn as a brushed metal gradient. It says "not yet revealed" and carries no category.

### Neutral
- **Machine Graphite** (`machine`): the page ground, and the recessed wells set into panels (inputs, tab track, phase track, vote tiles, choice buttons, the capsule shelf).
- **Shell Graphite** (`shell`): raised panels, the sticky top bar, the machine housing, the selected tab.
- **Seam** (`seam`): 1px borders on every panel, pill and well; ghost button outlines.
- **Bright Seam** (`seam-hi`): hover border on inputs and anime tiles, the capsule label outline, the choice button stroke.
- **Shell Ink** (`ink`): primary text on graphite.
- **Shell Muted** (`muted`): secondary text, hints, upcoming phases, status pill labels.
- **Ticket Paper** (`paper`): the reading surface: ticket, verdict card, code box, dial knob.
- **Paper Ink** (`paper-ink`): text on paper and on yellow.
- **Paper Muted** (`paper-muted`): secondary text on paper (category line, notes).
- **Soft Alert** (`alert`): inline form errors on graphite. The only warning color; it is not a capsule.

### Named Rules
**The Plastic Means Category Rule.** Sky blue, yellow and tomato are capsule plastics and each one names a category (Lieu, Objet, Groupe). Blue and red never appear as interface chrome; a fourth category would need a fourth plastic, not a reuse.

**The One Lever Rule.** Yellow is the only interactive color. Each phase panel has exactly one yellow action; everything else is ghost, well or link.

**The Paper Reads Rule.** What a player must read as the answer (their card, the verdict, the game code) sits on paper with dark ink. Everything else lives on graphite.

## Typography

**Display Font:** Mochiy Pop One (with M PLUS Rounded 1c, system-ui)
**Body Font:** M PLUS Rounded 1c at 500, 700 and 800 (with system-ui, -apple-system, Segoe UI, Roboto)

**Character:** A chunky, friendly pop face that reads like the lettering on a capsule toy, paired with a round-terminal sans that stays quiet at small sizes. Both are self-hosted woff files.

### Hierarchy
- **Display** (400, clamp 1.75 to 2.6rem, 1.15): the home page headline only.
- **Ticket** (400, clamp 1.75 to 2.75rem, 1.15, centered, balanced): the card name on the opened ticket; the largest type on the game screen on purpose.
- **Code** (400, 1.75rem, +0.06em, tabular): the generated game code in its paper box.
- **Headline** (400, 1.4rem, 1.2): the verdict line ("Les agents gagnent").
- **Title** (400, 1.25rem, 1.25): panel headings and the brand wordmark.
- **Body** (500, 16px, 1.55): running text; lead paragraphs at 1.05rem capped at 60ch, FAQ answers at 65ch, ticket notes at 34ch.
- **Body small** (500, 0.875rem): hints and helper lines, in muted.
- **Label** (800, 0.875rem): form labels, phase names, status values. 700 is used for pill text and errors.
- **Button** (800, 1rem): every button and the dial.
- **Caption** (500, 0.8rem, 1.35): capsule captions, vote tile sub-lines, anime counts.

### Named Rules
**The Pop Face Names Things Rule.** Mochiy Pop One is for names and headings only: the headline, panel titles, the card name, the verdict, the code, the wordmark, and the "?" inside the spy capsule. It never sets body copy, labels or buttons.

**The Two Weights Rule.** Body text runs at 500, emphasis and controls at 800. Numbers that change (player, round, score, code) are tabular.

## Layout

A centered column of 1180px max, padded 28px 20px 72px. Below 900px everything stacks in one column with 24px gaps. From 900px the page splits into two work areas: a left track of 340 to 420px and a flexible right track; on the game screen the left track (the capsule machine) is sticky at 84px from the top so the card stays beside every phase. Inside a column, blocks stack at 20px; inside a panel, at 16px.

The sticky top bar holds the wordmark and, during a game, three status pills (player, round, code). Below 520px the pills shorten their labels ("J", "M"), padding tightens to 20px 14px 56px and the game capsule shrinks to 170px. Below 640px the home capsule shelf goes from four columns to two and the how-to steps stack.

Spacing steps cluster on 4, 8, 12, 16, 20, 22 (panel padding), 24 and 28px.

## Elevation & Depth

Flat by default. Depth comes from tonal layering: graphite page, shell-tone panels on top, machine-tone wells cut back into them, each edge drawn with a 1px seam. The only cast shadow is a small lift on the selected tab (`0 1px 3px rgba(0,0,0,.4)`). The capsules carry their own material depth: a gloss highlight dot on each half, a soft vertical sheen, a colored inset rim on the top half and, when open, an inset shade at the bottom half's lip.

### Named Rules
**The Seam Not Shadow Rule.** Panels, tiles and cards separate by tone and a 1px seam, never by drop shadow. Gloss and sheen belong to capsule plastic only.

## Shapes

Everything is rounded, nothing is square. Panels take a 14px radius, controls and paper surfaces 12px, fields and small buttons 10px, the inner segments of tab and phase tracks 9px. Status chips, anime name chips, score chips, the capsule label and the dial are full pills; the knob and category dots are circles. The capsule is two half-discs whose radius equals the capsule width, joined at a band 4% wider than the body. Focus rings are 3px yellow with a 3px offset and an 8px radius.

### Named Rules
**The Round Machine Rule.** If it can be touched or read, its corners are rounded. Sharp corners do not exist in this world.

## Components

### Capsule (signature)
A sized object (`--cs`, 200px default; 260px on the desktop game screen, 170px on phones, 104 to 118px on the home shelf, 60px in the verdict), 1.5 times as tall as it is wide.
- **Category plastic:** clear tinted top (the category color at 30% over a white sheen, with a gloss dot and a 70% category rim), a solid category-colored bottom half, and a band in the category color at 80% brightness.
- **Closed:** silver brushed gradient bottom, no category, a hidden "?".
- **Spy (clear):** both halves near-transparent white with a 3px white outline and a white band; a pop-face "?" shows inside. On paper (the verdict) the outline and band switch to paper ink.
- **Open:** the top half lifts and tilts (translate -3% / -40%, rotate -10deg), the bottom half drops and tilts the other way (translate 2% / 10%, rotate 4deg). Halves move over 0.7s on the system ease.
- **Hover (closed, as a button):** the top half twists -5deg and the label pill's border turns yellow, inviting the twist.
- **Label:** a pill under the capsule ("Tourne pour ouvrir", then "Refermer ma capsule").

### Ticket
The white slip that comes out of the opened capsule. Paper surface, 12px radius, 22px 20px padding, centered: card name in the ticket face, then a category dot with "Catégorie · Animé" in paper muted 800. The spy ticket reads "Tu es l'espion" with a hollow dot, plus one note naming the category. It reveals by growing its row from 0fr to 1fr while a clip-path wipes top to bottom and the slip rises 14px into place, all over 0.6s.

### Buttons
- **Shape:** 12px radius, 12px 18px padding, 800 1rem.
- **Primary:** yellow fill, paper ink text; hover goes to lit yellow; press nudges down 1px (0.15s).
- **Ghost:** transparent with a seam border and ink text; hover brightens the border to muted and fills a hair lighter. On paper (code box) the border and hover lighten to match the paper.
- **Small:** 8px 12px, 0.875rem, 10px radius; used for round navigation and bulk toggles.
- **Choice:** a machine-tone well with a 2px bright-seam stroke that turns yellow on hover; used for the two-way "Il a trouvé / Il s'est trompé" call.
- **Link:** yellow, 800, underlined with a 4px offset.
- **Disabled:** 40% opacity, no press.

### Coin Dial
The pull lever for the next round, used only for "Manche suivante". A yellow pill (8px 20px 8px 8px) carrying a 40px paper knob with a dark horizontal slot. On hover the pill lights and the knob turns a quarter (90deg over 0.6s), like a coin dial.

### Phase Stepper
A machine-tone track (12px radius, 4px padding) split into three equal segments: Discussion, Vote, Résultat. The current phase is a yellow segment with paper ink; finished phases turn ink; upcoming phases stay muted. The current one carries `aria-current="step"`. On the home page the same phase names appear as small graphite pills above each how-to step.

### Verdict Card
A paper card (12px radius, 18px padding) with a 60px capsule on the left and text on the right: the headline in the pop face, then a muted sentence with names and the answer set in paper ink 800. Agents winning shows the open capsule in the card's category; the spy winning shows the clear capsule drawn in paper ink. Below it, two score pills (Espion, Agents), then the coin dial.

### Vote Tiles
An auto-filling grid of machine-tone wells (minimum 130px, 8px gaps, 12px radius), one per player, with an optional caption line (pseudo, "toi"). Hover turns the border yellow. A full-width muted tile closes the grid for "no majority".

### Inputs / Fields
Machine-tone well, seam border, 10px radius, 11px 12px padding, 500 1rem. Hover brightens the border; focus turns it yellow with no outline. Labels sit 6px above in 800 0.875rem. The join code field is uppercase, 800, tracked +0.12em and tabular.

### Tabs
A machine-tone track holding three equal buttons (Créer, Animés, Rejoindre). Unselected tabs are muted text; the selected one is a shell-tone segment with ink text and the system's single small shadow.

### Panels and Chips
Panels are shell-tone, seam-bordered, 14px radius, 22px padding (18px on phones), stacking content at 16px. Status, score and anime chips are seam-bordered pills (4px 12px) with 700 text and 800 values.

### Motion
One ease for everything mechanical: `cubic-bezier(.16,1,.3,1)`, a fast start with a soft landing. Durations: capsule halves 0.7s, ticket reveal and dial knob 0.6s, the spy "?" fades in over 0.4s after 0.15s, button feedback 0.15s. Under `prefers-reduced-motion: reduce`, every transition on every element and pseudo-element is removed, so states switch instantly.

## Do's and Don'ts

### Do:
- **Do** give every card category its plastic: Lieu sky blue, Objet yellow, Groupe tomato, and draw the spy as a clear capsule with a white outline.
- **Do** keep the closed capsule silver until the player opens it; category color appears only after the twist.
- **Do** put the card name, the verdict and the game code on paper with paper ink.
- **Do** keep one yellow action per phase panel; round navigation and quit stay small ghost buttons.
- **Do** use the coin dial for the next-round pull and nothing else.
- **Do** run every mechanical motion on the one ease (`cubic-bezier(.16,1,.3,1)`) and honor reduced motion by dropping transitions.
- **Do** separate surfaces by graphite tone and 1px seams.

### Don't:
- **Don't** show a list of possible answers on the game screen; the user removed it because it made the spy's guess too easy.
- **Don't** draw or embed anime artwork, logos or characters; anime and card names are text only.
- **Don't** use blue or red for buttons, links, focus or status; they are capsule plastics.
- **Don't** add drop shadows to panels, tiles or cards.
- **Don't** set body copy, labels or buttons in Mochiy Pop One.
- **Don't** reveal a card's category color on the closed capsule.
