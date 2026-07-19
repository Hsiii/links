# Design QA

- Source visual truth: `/tmp/links-qr-design-qa/00-source-desktop.png` (the
  committed page before this change).
- Implementation screenshot:
  `/tmp/links-qr-design-qa/09-open-desktop-final.png`.
- Closed-state comparison:
  `/tmp/links-qr-design-qa/08-closed-comparison-final.png`.
- Mobile evidence: `/tmp/links-qr-design-qa/03-closed-mobile.png` and
  `/tmp/links-qr-design-qa/04-open-mobile.png`.
- Viewports: 800 × 900 desktop and 390 × 844 mobile.
- States: default page, open dialog, copied confirmation, presentation query,
  keyboard dismissal, and backdrop dismissal.

## Findings

No actionable P0, P1, or P2 issues remain.

- Fonts and typography: the existing IBM Plex Sans stack, heading hierarchy,
  weights, line heights, and social-link copy are unchanged. Dialog typography
  uses the same font tokens and remains legible at both tested viewports.
- Spacing and layout rhythm: the source and implementation retain identical
  identity and social-list geometry. At 800px, the identity starts at 64px and
  the social list at 297.758px in both versions. The 40px QR trigger is removed
  from grid flow with absolute positioning. The mobile page has no horizontal
  overflow.
- Colors and visual tokens: the dialog extends the existing beige, teal, blue,
  and ink palette through tokens. The QR borrows the rounded-dot and gradient
  treatment of Instagram profile codes while keeping its locator eyes dark for
  contrast.
- Image quality and asset fidelity: the QR renders as SVG at 264px with the
  existing favicon as its center mark. The captured QR was decoded successfully
  as `https://links.hsichen.dev`.
- Copy and content: the dialog clearly states the scan action, exposes the
  destination URL, and provides a secondary copy action.

## Focused Region Comparison

The dialog was inspected separately because it has no pre-existing source state.
The desktop and mobile captures confirm that the QR remains square and sharp,
the white quiet field is preserved, the heading and close control do not collide,
and the primary action stays fully visible. A separate crop was not needed because
the dialog occupies most of each captured viewport and all details are readable.

## Interaction And Accessibility Checks

- The native modal has an accessible name and description.
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
