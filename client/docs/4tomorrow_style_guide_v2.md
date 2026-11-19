# 4tomorrow Style Guide v2

The 4tomorrow design system for every digital output: website, platform and dashboard, emails, documents and presentations. It replaces the v1 style guide.

**Status:** Final. All values have been checked against Figma and are confirmed for build (18 November 2026).

---

## 1. Colour

### Primitives

| Group | Name | Hex | Notes |
| :--- | :--- | :--- | :--- |
| Neutral | Black | `#000000` | |
| Neutral | White | `#ffffff` | |
| Gray | gray/50 | `#fdfdfd` | Surface |
| Gray | gray/100 | `#f1f6f8` | Secondary background |
| Gray | gray/200 | `#edf4fa` | Borders, icon tiles |
| Gray | gray/400 | `#8a9392` | Muted text |
| Gray | gray/500 | `#4c5564` | Secondary text |
| Green | green/100 | `#9daea8` | Muted accent (sage) |
| Green | green/400 | `#eedc36` | Yellow accent, call-to-action buttons |
| Green | green/700 | `#85ac4e` | Lime-green accent |
| Green | green/900 | `#12302d` | Dark green surface |
| Navy | navy (3 tones) | `#131ald`, `#15262e`, `#111924` | Overlays, surfaces, deep backgrounds. `#111924` is navy/900 |

### Semantic Tokens

| Token | Maps to | Value |
| :--- | :--- | :--- |
| `background/primary` | white | `#ffffff` |
| `background/secondary` | gray/100 | `#f1f6f8` |
| `background/surface` | gray/50 | `#fdfdfd` |
| `text/primary` | navy/900 | `#111924` |
| `text/secondary` | gray/500 | `#4c5564` |
| `text/muted` | gray/400 | `#8a9392` |
| `text/on-dark` | white | `#ffffff` |
| `text/muted-black` | black at 60% | `rgba(0, 0, 0, 0.6)` |
| `border/default` | gray/200 | `#edf4fa` |
| `accent/primary` | green/700 | `#85ac4e` |
| `accent/secondary` | green/400 | `#eedc36` |
| `accent/muted` | green/100 | `#9daea8` |
| `surface/dark` | green/900 | `#12302d` |
| `surface/navy` | navy/900 | `#111924` |
| `overlay/image` | black at 15% | `rgba(0, 0, 0, 0.15)` |
| `overlay/dark` | `#15262E` at 50% | `rgba(21, 38, 46, 0.5)` |
| `overlay/card` | `#131A1D` at 55% | `rgba(19, 26, 29, 0.55)` |
| `overlay/glass` | `#FDFDFD` at 15% | `rgba(253, 253, 253, 0.15)` |

### Colour Use

* Navy `#111924` is the default text colour and the main dark background.
* Dark green `#12302d` is for primary buttons and dark panels.
* Lime-green `#85ac4e` highlights key words in headings and marks accents. Don't use it for body text.
* Yellow `#eedc36` is for the main call to action only, with black text. Use one per view.
* Text on photos or dark surfaces is white.

---

## 2. Typography

| Style | Font | Size | Line height | Letter spacing | Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | Helvetica Neue Regular | 48px | 120% | -0.8px | — |
| **H2** | Helvetica Neue Medium | 36px | 125% | -0.5px | — |
| **H3** | Space Grotesk Regular | 22px | 135% | -0.2px | — |
| **H4** | Space Grotesk Regular | 20px | 155% | -0.2px | — |
| **Body** | Helvetica Neue Regular | 16px | 155% | -0.1px | — |
| **Button** | Space Grotesk Regular | 16px | 155% | -0.1px | — |
| **Body Small** | Helvetica Neue Regular | 14px | 150% | 0 | — |
| **Nav Link** | Space Grotesk Regular | 14px | 155% | -0.1px | — |
| **Label Uppercase** | Space Grotesk Light | 14px | Auto | 2px | Upper |
| **Footer Heading** | Inter Bold | 16px | Auto | 0 | — |
| **Caption** | Helvetica Neue Regular | 12px | 145% | 0.2px | — |

* Helvetica Neue carries headings and reading text; Space Grotesk carries interface text (buttons, navigation, labels, card titles).
* On screens, step H1 and H2 down at 1024px and 600px widths.
* Where Helvetica Neue isn't available (for example Word or Google Slides), use Arial.
* Inter must be loaded wherever footer headings are used.

---

## 3. Spacing (8px grid)

All spacing is a multiple of 8px.

| Token | Value | Use |
| :--- | :--- | :--- |
| `spacing/micro` | 8px | Icon and text pairs, badge internals |
| `spacing/small` | 16px | Button and input padding, related-element gaps |
| `spacing/medium` | 24px | Card padding, form field gaps, nav spacing |
| `spacing/large` | 32px | Card internal padding (most used) |
| `spacing/xl` | 40px | Gap between component groups |
| `spacing/2xl` | 48px | Gap between a section heading and its content |
| `spacing/3xl` | 56px | Block-level gap |
| `spacing/4xl` | 64px | Page padding, footer gap |
| `spacing/section` | 80px | Section horizontal padding |
| `spacing/sectionlg-` | 96px | Section vertical padding |
| `spacing/page` | 104px | Feature section padding |
| `spacing/pagelg-` | 152px | Large banner padding |
| `spacing/page-xl` | 320px | Major section divider |

---

## 4. Border Radius

| Token | Value | Use |
| :--- | :--- | :--- |
| `radius-xs` | 4px | Small helper elements, nested frames |
| `radius-sm` | 6px | Icon containers |
| `radius-md` | 8px | Cards, containers, main content blocks (the main radius) |
| `radius-lg` | 16px | Feature cards, large containers |
| `radius-xl` | 20px | Visual elements, badges |
| `radius-2xl` | 24px | Navigation elements |
| `radius-3xl` | 28px | Avatars, fully rounded wrappers |

---

## 5. Effects

| Token | Value | Use |
| :--- | :--- | :--- |
| `shadow-soft` | `0 12px 24px rgba(0, 0, 0, 0.03)` | Content cards |
| `shadow-green` | `0 16px 32px rgba(30, 107, 101, 0.07)` | Navigation elements |
| `blur-light` | 4px background blur | Navigation, overlays |
| `blur-strong` | 8px background blur | Content cards over images |

---

## 6. Buttons

Three variants in Large and Small sizes. Primary and Ghost have Default, Hover, Pressed and Disabled states; Accent is static.

| Variant | Default | Hover | Pressed | Disabled | Text |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary** | dark green `#12302d` | lighter green `#1e4438` | darker green `#0e241d` | grey-sage `#9daea8` | white |
| **Accent** | yellow `#eedc36` | static, no change | static, no change | static, no change | black |
| **Ghost (on dark)** | translucent white, `#354f4c` on `#12302d` | `#4d6360` | `#26403d` | `#1f3c38` | white, thin lighter border |

All buttons use Space Grotesk Regular 16px (Small is smaller).

---

## 7. Component Patterns

* **Content card:** white, `radius-md`, `shadow-soft`, `spacing/large` padding. Title in Space Grotesk, body in Helvetica Neue.
* **Glass card:** `overlay/glass` or `overlay/card` fill with `blur-strong`, white text. Use only over photos or dark surfaces.
* **Icon tile:** `gray/200` square, `radius-sm`, icon centred.
* **Numbered step card:** large grey number, icon tile, Space Grotesk title and short body text.
* **Statistic card:** a large figure with a short label beneath.
* **Testimonial card:** photo, quote and name, with carousel arrows when there are several.
* **Image card:** photo with a dark gradient at the base, icon, uppercase label and one line of white text.
* **Dark band:** navy or photo with `overlay/dark`, white heading, an uppercase label above and white vertical dividers between items.
* **Gradient band:** full width, dark green on the left to light sage-lime on the right, white text and a ghost button.
* **Header and footer:** header floats over content on `overlay/dark` with `blur-light`; footer is solid navy `#111924` with grey-green secondary text.