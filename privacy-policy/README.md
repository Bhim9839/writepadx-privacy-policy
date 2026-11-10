# Privacy Policies

A responsive privacy policy website with separate pages for the Writepad X and
Smart Player Android apps, plus PDFusion, Doclyst, and Resumora policies:

- `/` — Writepad X notes, sharing, widgets, and advertising.
- `/smart-player/` — Smart Player local media access, playback, and internet
  connectivity.
- `/app-policy/` — PDFusion advanced PDF editor policy covering PDF files,
  file access, and internet access, with an About section at the bottom.
- `/doclyst/` — Doclyst document editor policy covering on-device documents,
  internet access for ads, and an About section.
- `/resumora/` — Resumora resume builder policy covering 50+ templates,
  resume import and saving, storage access, internet access for ads, and an
  About section.

The Smart Player policy is based on the app details provided and avoids
unverified claims about online services, uploads, or data retention. Verify it
against the released app's behavior and integrations before relying on it as a
formal privacy notice.

The `/app-policy/` route describes PDFusion's PDFs and edits as staying on the
device, with internet access used only for ads, based on the details provided.
Verify the ad provider, local storage and retention behavior, and remaining
policy details before publication.

The `/doclyst/` route describes documents as staying on the device, with
internet access used to display ads and no developer-operated server. Verify
the released app's file handling, ad provider, and data practices before
relying on the policy as a formal privacy notice.

The `/resumora/` route covers resume creation, importing and saving files,
storage access, and advertising. Verify the released app's data handling,
file access scope, ad provider, and policy details before relying on it as a
formal privacy notice.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
NEXT_PUBLIC_BASE_PATH=/writepadx-privacy-policy npm run build
```

The Writepad X policy is based on the Android manifest supplied for that app.
Verify each policy against the behavior of its released app and obtain
appropriate legal review before relying on it as a formal privacy notice.
