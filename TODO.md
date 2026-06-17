# Carwash Technologies — Upgrade TODO

Working list for the current round of upgrades. Frontend pass is done; remaining items are backend.

Stack reference: Next.js 16 (App Router) · React 19 · Tailwind 4 · accent `#f0da11` on slate. Contact form POSTs JSON to `/api/contact` (.NET → Azure Storage Queue).

---

## ✅ DONE — Frontend pass
- [x] Homepage hero redesigned — full-bleed dark treatment, carwash/construction framing, trust chips, SEO H1 ([HeroSectionNew.tsx](web/src/app/components/home/sections/HeroSectionNew.tsx))
- [x] Homepage equipment-brands logo strip (PDQ, Belanger, Sonny's, PECO, AVW) ([EquipmentBrandsStrip.tsx](web/src/app/components/home/sections/EquipmentBrandsStrip.tsx))
- [x] Inner-page heros cleaned up — `GenericHero` now renders a single clean full-bleed image instead of the sloppy two-image split (all 11 pages, no per-page edits) ([GenericHero.tsx](web/src/app/components/ui/GenericHero.tsx))
- [x] Contact form: multi-select "Areas of interest" checkboxes ([ContactForm.tsx](web/src/app/components/contact/components/ContactForm.tsx)); `areasOfInterest` added to `ContactFormData` type
- [x] Careers page scaffolded ([/careers](web/src/app/careers/page.tsx)) — about/why-work-here, requirements, application form with area-of-interest, **valid driver's license** + **at-will/EEO acknowledgment** checkboxes, resume file input (PDF/Word, 5MB validated)
- [x] Careers nav link (desktop + mobile) ([Navigation.tsx](web/src/app/components/Navigation.tsx)) + sitemap entry
- [x] Removed dead `HeroClient.tsx`
- [x] `tsc --noEmit` clean · `next build` passes (20 routes prerender)

---

## ✅ DONE — Section revamp + image perf pass
- [x] Compressed 6 oversized images in place (1.8MB/1.3MB → 170–336KB; ~4MB total saved) via sharp
- [x] Added `sizes` to section images (services cards, why-choose-us, services grid) to stop pop-in
- [x] Revamped homepage Services cards — image-top, gradient overlay, floating icon badge, cohesive ([ServicesSectionNew.tsx](web/src/app/components/home/sections/ServicesSectionNew.tsx))
- [x] Rebuilt Why Choose Us — two-column featured image + reasons grid with icons, dropped messy 3-image strip ([WhyChooseUsSection.tsx](web/src/app/components/home/sections/WhyChooseUsSection.tsx))
- [x] Revamped Contact "How Can We Help" option cards — clean white cards, accent bar, check-list ([ContactOptionCard.tsx](web/src/app/components/contact/components/ContactOptionCard.tsx))
- [x] Revamped shared `GenericServicesGrid` cards (chemical-sales categories/benefits + other pages) + tightened `TrustedChemicalPartners`

## ⏳ BACKEND PHASE (next session)

### Careers resume submission (DECISION: email attachment via backend) — ✅ DONE
- [x] Added multipart/form-data endpoint `/api/careers` ([CareersHttpTrigger.cs](api/Functions/CareersHttpTrigger.cs)) — resume uploaded to Blob Storage (too big for the 64KB queue), form data enqueued; same queue as contact, routed by `Type`
- [x] `ResumeBlobService.cs` uploads/downloads/deletes resumes (container `RESUME_BLOB_CONTAINER`, default `resumes`, on AzureWebJobsStorage)
- [x] `EmailService.SendCareersNotificationAsync` attaches the resume to the application email; routes to `EMAIL_TO_CAREERS` (falls back to `EMAIL_TO_DEFAULT`); new `EmailTemplates.CareersNotification`
- [x] Queue processor downloads blob → attaches → sends → best-effort deletes blob ([ContactFormQueueProcessor.cs](api/Functions/ContactFormQueueProcessor.cs))
- [x] `CareersForm` now POSTs multipart to `/api/careers` with the actual resume file ([CareersForm.tsx](web/src/app/components/careers/CareersForm.tsx)); success copy updated (no longer asks applicant to email separately)
- [x] Server-side validation: file type/size (5MB, PDF/Word), required license + acknowledgment, honeypot, rate limit (7/hr)
- [ ] **Deploy config**: set `EMAIL_TO_CAREERS` in the Azure Function App settings (resume destination inbox). `RESUME_BLOB_CONTAINER` optional.

### Contact form areas-of-interest — ✅ DONE
- [x] Backend: `areasOfInterest` added to `ContactFormData.cs` model + rendered (HtmlEncoded) in both customer + business email templates. API compiles clean. Home quick form (`ConsultationCTA`) verified end-to-end.

---

## ✅ DONE — "Who We Serve" — rename + segment pages
Renamed the **Types of Washes** nav/page to **"Who We Serve"** and built out audience/segment pages.

- [x] Nav now "Who We Serve" → `/who-we-serve` (desktop + mobile, [Navigation.tsx](web/src/app/components/Navigation.tsx)); `/wash-types` 301-redirects to `/who-we-serve` via [staticwebapp.config.json](web/staticwebapp.config.json)
- [x] `/who-we-serve` hub ([who-we-serve/page.tsx](web/src/app/who-we-serve/page.tsx)) — GenericHero + StatsBand + cards linking to all 5 segment pages
- [x] Segment pages (data-driven via [SegmentPage.tsx](web/src/app/components/segments/SegmentPage.tsx) + [segmentData.ts](web/src/app/components/segments/segmentData.ts)):
  - [x] Retail / c-stores & gas stations (`/retail-cstore-carwash`)
  - [x] Municipalities & government fleets (`/municipal-fleet-wash`)
  - [x] Heavy-duty / semi truck washes (`/truck-wash`)
  - [x] Dedicated wash businesses / express-tunnel chains (`/dedicated-wash-business`)
  - [x] Specialized / custom projects (`/specialized-wash`)
- [x] Each segment page: GenericHero + tailored copy + StatsBand + "what we deliver" grid + CTA
- [x] Added `/who-we-serve` + all 5 segments to [sitemap.ts](web/src/app/sitemap.ts) (removed dead `/wash-types`)
- [x] Internal links: homepage `WhoWeServeSectionNew` now links to `/who-we-serve`; hub ↔ segments cross-link
- [x] SEO: per-segment metadata/keywords/canonical on every page

### ✅ DONE — "World's Longest Carwash" — featured in-construction page
- [x] New page [`/projects/worlds-longest-carwash`](web/src/app/projects/worlds-longest-carwash/page.tsx) — flagship build, GenericHero + StatsBand + jobsite gallery (uses `/imgs/WLC/*`)
- [x] "Under Construction" treatment: hazard-stripe banner, "Coming Soon" badge, teaser copy (specs/location withheld), contact CTA
- [x] Linked from projects (featured card) + who-we-serve hub (callout); added to [sitemap.ts](web/src/app/sitemap.ts) (weekly)

---

## 💡 Optional / later
- [x] Careers applicant confirmation email — branded "thank you" sent to the applicant in addition to the internal notification ([EmailService.cs](api/Services/EmailService.cs) `SendCareersConfirmationToApplicantAsync` + `EmailTemplates.CareersConfirmation`); both sent concurrently from the queue processor
- [ ] Brand strip: link logos out to manufacturer product pages — **deferred** (manufacturers rebranded under OPW VWS; need confirmed URLs before wiring)
- [x] Curate hero imagery per page — reviewed all `leftImage` choices; targeted swaps: **about** → branded company van (`IMG_20260313_101859`, was unused; shows logo/phone/brands), **services** → striking PDQ rainbow-LED bay (showcase, differentiates from projects), **sds** → clean neutral tunnel (`IMG_5387`, calmer for a docs page than the flashy bay). Other pages already had fitting images. Unused standout still available: `IMG_E0035` (SUDZ storefront), `Kondor_Flight` (red-LED touchless).
- [ ] Add real open-roles list to careers once roles are defined — **blocked**: needs roles defined
- [x] Canonical-class lint warning in Navigation.tsx — already resolved (`lg:h-17` in place)
