# ShiftChef marketing website

Public marketing and lead-generation site for ShiftChef, a hospitality scheduling and service-operations product. The website is separate from the Expo/React Native mobile app and does not connect to private product APIs.

## Setup

Requirements: Node.js 22.13 or newer and npm. The production deployment uses
Node.js 22 on AWS Amplify.

```sh
npm install
cp .env.example .env.local
npm run dev
```

The local site runs at `http://localhost:3000` with the native Next.js server.

## Scripts

- `npm run dev`: development server
- `npm run build`: production build
- `npm run typecheck`: strict TypeScript check
- `npm run lint`: ESLint and Next.js rules
- `npm run test` / `npm run test:unit`: unit and component-contract tests
- `npm run test:e2e`: Playwright smoke, interaction, responsive, and accessibility checks
- `npm run verify`: typecheck, lint, unit tests, and production build

Install the Playwright browser once when needed:

```sh
npx playwright install chromium
```

## Content and components

- `app/`: route layouts, page metadata, sitemap, robots, and the custom not-found page
- `components/`: shared layout, product visual, interaction, matrix, timeline, and form components
- `content/site.ts`: navigation, roles, features, FAQ, workflows, and capability data
- `content/legal.ts`: deliberately non-authoritative privacy and terms draft structures
- `lib/site-config.ts`: canonical URL and shared metadata helpers
- `lib/demo.ts`: Zod schema and typed demo-submission adapter

Legal pages are visibly marked as drafts and must be replaced with approved text before a public launch.

## Configuration

`NEXT_PUBLIC_SITE_URL` sets canonical, Open Graph, sitemap, and robots URLs. It should be the verified production origin without a trailing slash.

`NEXT_PUBLIC_DEMO_ENDPOINT` is the only demo-form delivery setting. Leave it empty to keep the form in honest preview mode: validation still works, but the UI says nothing was sent. Configure only an approved HTTPS endpoint that accepts the typed JSON payload. The website never logs personal form values.

`NEXT_PUBLIC_SUPPORT_EMAIL` adds a direct support email link to `/support`. Leave it empty to show self-service guidance without inventing an inbox or sending support details through the demo form.

## Assets

Official logo and app-icon files are copied from the ShiftChef mobile repository into `public/brand/`. Public product images in `public/screenshots/` are limited to the privacy-safe demonstration screenshots documented in the mobile user guide. Their source aspect ratios are preserved with `next/image`; the homepage LCP candidate alone receives priority loading.

The generated social-sharing card is `public/social/shiftchef-social.png` (1200×630).

## Product boundary

ShiftChef coordinates scheduling and the work around service. It is not presented as a clock-in/out, attendance, break, timesheet, worked-hours verification, payroll, or attendance-reporting product. Availability is not an assignment, and assignment acknowledgment is not proof of attendance.

## Deployment checklist

AWS Amplify reads the committed `amplify.yml`, builds with native Next.js, and
deploys the `.next` output through Amplify Hosting compute.

1. Set the verified `NEXT_PUBLIC_SITE_URL` in the Amplify environment variables.
2. Connect and approve the form endpoint, or leave the form in preview mode.
3. Add a verified `NEXT_PUBLIC_SUPPORT_EMAIL`, or retain the self-service support page without direct email contact.
4. Replace the privacy, terms, and consent drafts with approved copy.
5. Run `npm run verify` and `npm run test:e2e`.
6. Review every route at 360, 390, 768, 1024, and 1440 CSS pixels.
