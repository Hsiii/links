# Design QA

- Source visual truth: `/tmp/links-qr-design-qa/00-source-desktop.png` (the
  committed page before this change).
- Implementation screenshot: `/tmp/links-qr-final/02-desktop-dialog.png`.
- Closed-state evidence: `/tmp/links-qr-final/03-desktop-trigger.png`.
- Mobile evidence: `/tmp/links-qr-final/01-mobile-dialog.png`.
- Viewports: 1357 × 987 desktop and 390 × 844 mobile.
- States: default page, open dialog, copied confirmation, presentation query,
  keyboard dismissal, and backdrop dismissal.

## Findings

No actionable P0, P1, or P2 issues remain.

- Fonts and typography: the existing IBM Plex Sans stack, heading hierarchy,
  weights, line heights, and social-link copy are unchanged. Dialog typography
  uses the same font tokens and remains legible at both tested viewports.
- Spacing and layout rhythm: the source and implementation retain identical
  identity and social-list geometry. At 800px, the identity starts at 64px and
  the social list at 297.758px in both versions. The 32px QR trigger is removed
  from grid flow with fixed viewport positioning. The mobile page has no
  horizontal overflow.
- Colors and visual tokens: the dialog extends the existing beige, teal, blue,
  and ink palette through tokens. The QR applies one continuous gradient to its
  rounded dots and all three locator eyes.
- Image quality and asset fidelity: the QR renders as uninterrupted SVG dots at
  264px without a center image or a separate frame. Its transparent quiet area
  sits directly on the dialog surface. The captured QR was decoded successfully
  as `https://links.hsichen.dev`.
- Copy and content: the dialog states the scan action once, exposes the
  destination URL, and keeps its secondary copy action compact beside the URL.

## Focused Region Comparison

The dialog was inspected separately because it has no pre-existing source state.
The desktop and mobile captures confirm that the QR remains square and sharp,
its quiet area sits directly on the dialog surface, the heading and close control
share a vertically centered row, and the centered URL remains independent of its
adjacent copy icon. A separate crop was not needed because the dialog occupies
most of each captured viewport and all details are readable.

## Interaction And Accessibility Checks

- The native modal has an accessible name.
- Focus moves into the dialog and returns to the QR trigger after dismissal.
- Close button, backdrop click, and Escape all dismiss the dialog.
- `?qr=1` opens presentation mode automatically after hydration.
- The copy action changes to an `aria-live` “Copied” confirmation after the
  Clipboard API resolves.
- Reduced-motion users do not receive the entry animation.
- Browser console errors checked: none.

## Comparison History

- Earlier P2: automated keyboard testing did not dismiss the dialog with Escape.
  Fix: added explicit Escape handling on the dialog while retaining native modal
  behavior. Post-fix evidence: `dialogOpen: false` and focus restored to
  `Show QR code`.

## Follow-up Polish

No remaining P3 items were identified in the tested states.

final result: passed
