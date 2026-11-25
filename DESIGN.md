---
name: Claude Daigan · Social Media & Marketing
description: A one-page marketing site built as a night-mode Messenger thread between a Bohol business owner and Claude.
colors:
  gold: "#f2c14e"
  cream: "#faf6ee"
  night: "#0d1b2b"
  navy: "#122438"
  rail: "#1b324b"
  rail-2: "#24405e"
  ink: "#122438"
  mist: "#a9b8c9"
  line: "rgba(250, 246, 238, 0.14)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 7.2vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 4.2vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 2.4vw, 1.25rem)"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  price:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 2.8vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
  micro:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  bubble: "1.4rem"
  tail: "0.4rem"
  card: "1.5rem"
  composer: "1.75rem"
  media: "1rem"
  pill: "999px"
  circle: "50%"
spacing:
  gap: "clamp(0.5rem, 1.4vw, 0.75rem)"
  bubble-pad: "0.8rem 1.1rem"
  turn: "clamp(4.5rem, 11vw, 8rem)"
  gutter: "clamp(1rem, 4vw, 2rem)"
  card-pad: "clamp(1rem, 3vw, 1.75rem)"
components:
  bubble-them:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    padding: "0.8rem 1.1rem"
  bubble-me:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    padding: "0.8rem 1.1rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.15rem"
    height: "3rem"
  chip-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.15rem"
    height: "3rem"
  tab:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.85rem"
  pinned-bill:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "clamp(1rem, 3vw, 1.75rem)"
  composer-input:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
    height: "3.25rem"
  send-button:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.2rem"
    height: "3rem"
---

# Design System: Claude Daigan

## Overview

**Creative North Star: "The Pinned Conversation"**

The page is a night-mode message thread, not a website that happens to mention chatting. A Bohol business owner's question sits in a cream bubble on the left; Claude's answer sits in a gold bubble on the right, set at headline size because in this world the answer *is* the headline. Prices are not a table but a pinned message. The testimonials section does not exist because testimonials do not exist; the closest thing is six labelled concept posts arriving as photos, the way an owner would actually receive them.

Everything follows from that one premise. Rhythm is turn-taking, not sectioning: each exchange is separated by a large turn gap and nothing else. Type splits by who is talking — Bricolage Grotesque for every voiced statement (the answer, the questions, the plan names, the prices) and the phone's own system sans for the connective prose, which keeps the page feeling native and light on the mid-range Android that carries most of this traffic. Colour is grammar, not decoration: cream means the owner, gold means Claude, navy is the room. The world is dense with small true details — timestamps, a "Seen" mark, a green dot, an "Add-ons" disclosure — and quiet everywhere else: no office photography, no icon triad, no gradient, no stock face. The one photograph of a person is the real one.

**Key Characteristics:**
- Two-voice chat: cream bubbles left, gold bubbles right, navy ground.
- The h1 lives inside a gold bubble, not above the thread.
- One pinned bill carries every price; rows open in place.
- A composer at the foot, with radio chips and three send targets, is the only conversion surface.
- One authored motion: the opening exchange arrives, then stops.

## Colors

A four-step night, two voices, and a mist for everything said quietly.

### Primary
- **Harvest Gold** (#f2c14e): Claude's voice and the page's only accent — his bubbles, outlined quick replies, every price, the recommendation tag, link text, focus rings, the "Seen" glyph. Always carries `ink` text, never cream.

### Secondary
- **Warm Cream** (#faf6ee): the owner's voice, body text, and the bill's top rule. A cream bubble is always something the visitor would say; never use it as a page background.

### Neutral
- **Night Deck** (#0d1b2b): the fixed chat header, footer, and composer shell — everything that sits "chrome-like" above the thread.
- **Deep Navy** (#122438): the page ground; the same value, tokenised as `ink`, is the text colour on gold and cream (two names, one value, by design).
- **Rail** (#1b324b): raised surfaces — the pinned bill, tab pills, the composer input, hover fills.
- **Upper Rail** (#24405e): input borders, radio-chip borders, the scrollbar thumb.
- **Sea Mist** (#a9b8c9): metadata only — header status, recipe meta, terms, timestamps' neighbours, the direct-contact line.
- **Hairline** (rgba(250, 246, 238, 0.14)): 1px dividers between rows and under the header.

### Named Rules
**The Two Voices Rule.** Cream is what the visitor says, gold is what Claude says, navy is the room. A colour never decorates — it attributes. If a new element cannot be assigned to a speaker, it is chrome and belongs in night or rail.

**The Gold Is Spoken Rule.** Gold appears as a bubble, a chip, a price, a tag, or a ring. It never fills a band, a section background, or a gradient; there is no gold wash anywhere on the page.

**The Mist Is Meta Rule.** Mist never carries a message. It is legal to use it only for status, timestamps, units, terms and helper text at 0.75–0.9375rem.

## Typography

**Display Font:** Bricolage Grotesque (self-hosted variable woff2, 200–800, with ui-sans-serif, system-ui)
**Body Font:** system UI sans (system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial)

**Character:** A quirky grotesque does the talking and the phone's own face does the paperwork. The pairing is deliberately lopsided: the display face is loud, tight and human; the body face is invisible, free, and instant on a phone on mobile data.

### Hierarchy
- **Display** (700, clamp(2.15rem, 7.2vw, 4rem), 1.02, −0.035em): the hero answer only, inside its gold bubble. Balanced wrapping.
- **Headline** (700, clamp(1.5rem, 4.2vw, 2.25rem), 1.12, −0.02em): each section's question, in a cream bubble — the question is the section heading.
- **Title** (650–700, 1.125–1.25rem, 1.25–1.3, −0.01em): plan names, sample business names, the header's name.
- **Price** (700, clamp(1.15rem, 2.8vw, 1.5rem), 1, tabular numerals): right-aligned in every bill row; the unit ("a month", "one time") drops to 0.75rem body face beneath it.
- **Body** (400, 1.0625rem, 1.55; 1.5 inside bubbles): every message. Long prose caps at 60–65ch.
- **Small** (400, 0.9375rem): secondary messages, recipe meta, add-on lines, the direct-contact line.
- **Label** (400–650, 0.8125rem–0.875rem): header status, tab pills, the "Pinned" label, terms.
- **Micro** (700, 0.75rem, 0.02em): timestamps and "Seen" — the only stamps in the system.

### Named Rules
**The Two Faces Rule.** Bricolage carries anything with a voice or a number; the system sans carries everything that explains it. Never set a paragraph in the display face, and never set a headline, plan name, or price in the system sans.

**The Tightening Rule.** Display tracking is negative and grows tighter as the type grows (−0.01em at title, −0.035em at display). Never letter-space display type; the only positive tracking in the system is 0.02em on micro stamps.

**The 17px Floor Rule.** Message text never goes below 1.0625rem (17px), and metadata never below 0.75rem (12px). The page is read between customers on a phone.

## Layout

One centred column, `--col` 46rem (736px), holding every spoken line; the header caps at 50rem so the avatar and the tabs share the thread's optical edge. Vertical rhythm comes from a single unit, `--turn` clamp(4.5rem, 11vw, 8rem), applied as the gap between exchanges; inside an exchange, bubbles stack at `--gap` clamp(0.5rem, 1.4vw, 0.75rem). Gutters are clamp(1rem, 4vw, 2rem). The one wide surface is the sample shelf, which opens the turn to 72rem so six posts sit three across, while its question and its closing note stay pinned to the 46rem column via asymmetric auto margins.

Two breakpoints. At 52rem the shelf drops to two columns. At 30rem bubbles widen to 92% of the column, chips and send buttons stretch to fill their row, the phone icon leaves the header (the Viber icon stays), the about bubble stacks portrait over text, and the header status wraps to two lines instead of truncating. Every control keeps a ≥2.75rem hit area, and the composer input is 3.25rem.

### Named Rules
**The Turn Rule.** Separation is a turn, never a section padding. Nothing gets a top border, a band, or a background change to mark a new section — only a gap.

**The One Column Rule.** Speech lives in 46rem. The shelf is the single sanctioned exception; do not widen another block to full bleed.

## Elevation & Depth

Depth is tonal, not cast. Four navy steps — night, navy, rail, upper rail — stack the page like a chat window at night: chrome darkest, thread in the middle, raised objects on rail. Shadows exist only under things a hand could pick up (the pinned bill, a sample photo, the primary chip) and are wide, downward, negative-spread ambience, never a border or a glow. Avatars get a ring instead of a shadow: 2px gold around the header face, 3px navy around the portrait inside a gold bubble, so the real face reads as a pinned contact rather than a card.

### Shadow Vocabulary
- **Pinned lift** (`0 1.5rem 3rem -1.5rem rgba(0, 0, 0, 0.5)`): the pinned price bill, the only card-like object on the page.
- **Photo lift** (`0 1.25rem 2.5rem -1.25rem rgba(0, 0, 0, 0.6)`): each sample post on the shelf.
- **Send lift** (`0 0.5rem 1.25rem -0.5rem rgba(0, 0, 0, 0.55)`): the primary quick-reply chip only.
- **Contact ring** (`0 0 0 2px gold` / `0 0 0 3px navy`): the header avatar and the about portrait.

### Named Rules
**The Pick-Up Rule.** If it cannot be picked up — a section, a headline, a divider — it gets no shadow. Tonal steps carry depth everywhere else.

## Shapes

The form language is the messaging bubble and nothing else. Bubbles are 1.4rem with the speaker's own bottom corner cut to 0.4rem; consecutive bubbles from the same speaker cut the tail too, so a run reads as one utterance. Everything pressable is a pill (999px): chips, tabs, the composer field, radio chips, send buttons, the recommendation tag. Cards round at 1.5rem (the pinned bill) and 1.75rem (the composer shell); images round at 1rem. Circles are reserved for faces and the header icon buttons. Strokes are hairlines — 1px at 14% cream for dividers, 1.5px gold on outlined chips and send buttons, 2px cream as the bill's ledger top rule.

### Named Rules
**The Tail Rule.** 1.4rem corners, 0.4rem on the speaker's bottom corner. A bubble without a tail is not a speaker; a bubble with two tails is a shape error.

**The Pill Rule.** If it is pressed, it is a pill or a circle. Rectangles are content (rows, photos, cards), never controls.

## Components

### Chat Header (signature)
A sticky night bar, 50rem wide, holding the real headshot at 3rem with a 2px gold ring, the name in 1.125rem display, and a status line with a 0.5rem green dot: "Tagbilaran, Bohol · replies within a day". Three circular icon buttons (2.75rem) for Viber, phone, email sit right, gold on hover rail fill. Beneath it, a horizontally scrolling row of tab pills with a mask fade at 88%, the active tab gold with ink text, driven by an IntersectionObserver that sets `aria-current`.

### Bubbles (signature)
The page's only text container. `.msg--them` is cream, left, `ink` text, tail bottom-left; `.msg--me` is gold, right, tail bottom-right. Padding 0.8rem × 1.1rem, max-width min(85%, 34rem). Variants: **display** (the h1; padding grows to clamp(1.1rem, 3vw, 1.9rem) × clamp(1.2rem, 3.6vw, 2.3rem), `em` renders as an underline at 0.09em thick, offset 0.12em); **question** (a cream h2 at headline scale, 1rem × 1.3rem); **photo** (a gold shell, 0.35rem padding, two 4:5 images at 0.35rem gap with a 0.8125rem caption inside the gold); **about** (portrait + paragraph in a two-column grid); **small** (0.9375rem, for the concept-work disclaimer).

### Quick-Reply Chips
Outline pills, 1.5px gold border, gold label, 3rem tall, 1rem text at weight 650, icon at 1.25rem. Hover fills rail; active scales to 0.97. `chip--primary` inverts to gold fill with ink text, sits first in the row, and is the only chip with a shadow — it is the free check-up.

### Sample Shelf
A three-column grid (two at ≤52rem) of 4:5 photos at 1rem radius with a hover scale to 1.03 over 0.6s. Under each photo, a "recipe card" definition list: the fictional business in 1.125rem display cream, the category and town in 0.9375rem mist, the goal in cream. The shelf is the only wide element; it is closed by a small gold bubble stating that the businesses are made up and the photos are AI-generated.

### Pinned Price Bill
The page's one card: rail ground, 1px hairline, 1.5rem radius, clamp(1rem, 3vw, 1.75rem) padding, capped by a "Pinned" label with a pin icon and a 2px cream ledger rule. Each plan is a `<details>` row: plan name in display at weight 650 with a 0.55rem chevron drawn from two borders (rotating −45° → 45° over 0.25s), price in tabular display gold at the right, 1px hairline between rows, ≥3rem summary height. Recommended is a gold `.tag` (0.75rem, 700, 999px) inside the plan name; that row's name turns gold and the row ships open. Add-ons are a single disclosure of dashed-hairline lines with right-aligned gold prices; terms close the card at 0.875rem mist, 65ch.

### Steps
Ordered list of gold bubbles, each led by a timestamp in 0.75rem/700 with 0.02em tracking at 72% ink. The turn closes with a "Seen" mark at 0.75rem mist beside a gold double-check glyph.

### Composer
Night shell, 1.75rem radius, 1px hairline, 0.75rem padding, three stacked parts: a pill text field (rail ground, upper-rail border, gold border on focus, 0.9375rem placeholder, 3.25rem) with a hidden label; a fieldset of radio chips (outline pills, cream fill and ink text when checked, gold focus ring) for free check-up / free sample / a plan; and a send row where the primary "Send on Viber" is gold and flexes, with quieter "Text" and "Email" outlines. Invalid input swaps the border to a coral tone and reveals an inline alert; the direct phone/email line sits beneath in 0.9375rem mist, right-aligned.

### Footer
Night ground, hairline top, centred: the gold CD monogram at 4.5rem, the name line, and 0.8125rem fine print that names the concept work and holds the copyright; it carries no links and no second call to action.

## Do's and Don'ts

### Do:
- **Do** put every spoken line in a bubble with a speaker: cream left for the visitor, gold right for Claude, `ink` text on both.
- **Do** keep the h1 inside the opening gold bubble and the free check-up line directly beneath it, before the chips.
- **Do** keep every price inside the one pinned bill, `<details>` rows, Plan B open and tagged.
- **Do** make the footer of the page a composer whose submit opens Viber, SMS or email with a prefilled message.
- **Do** label concept work in the thread itself, in the same voice, and keep the real headshot and CD monogram as the only identity marks.
- **Do** hold message text at ≥1.0625rem and controls at ≥2.75rem.

### Don't:
- **Don't** add a hero headline block, eyebrow, or kicker above the thread, or a light section, gold band, or gradient to break up the scroll — the first thing in the body is the visitor's question, and separation is a turn gap.
- **Don't** rebuild the prices as a comparison table or three-column cards; the bill's rows are the pattern.
- **Don't** add testimonials, client logos, star ratings, or follower counts; none exist, and the page never fakes them.
- **Don't** set prose in Bricolage or a headline/price in the system sans.
- **Don't** add a second animation or a scroll reveal; the opening exchange is the only authored motion, and it disappears under reduced-motion.
- **Don't** use hard offset shadows, bevels, or inner glows; depth is the four navy steps plus a soft downward lift.
