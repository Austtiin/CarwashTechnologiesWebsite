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

### Careers resume submission (DECISION: email attachment via backend)
- [ ] Add multipart/form-data endpoint (e.g. `/api/careers`) — current API is JSON-only
- [ ] `EmailService.cs`: support file attachment; email application + resume to office inbox
- [x] **Interim**: `CareersForm` now submits text-based fields to `/api/contact` with `contactType:'careers'`; resume is optional (applicant told to email it to `careers@carwashtechnologies.com`). Replace with dedicated endpoint once backend supports file uploads. ([CareersForm.tsx](web/src/app/components/careers/CareersForm.tsx))
- [ ] Server-side validation: file type/size, required license + acknowledgment, honeypot
- [ ] Decide resume destination inbox / email (placeholder copy says `careers@carwashtechnologies.com`)

### Contact form areas-of-interest — ✅ DONE
- [x] Backend: `areasOfInterest` added to `ContactFormData.cs` model + rendered (HtmlEncoded) in both customer + business email templates. API compiles clean. Home quick form (`ConsultationCTA`) verified end-to-end.

---

## 🚧 "Who We Serve" — rename + segment pages (NEW, larger effort)
Rename the **Types of Washes** nav/page to **"Who We Serve"** and build out audience/segment pages.

- [ ] Rename `/wash-types` → "Who We Serve" (nav label in [Navigation.tsx](web/src/app/components/Navigation.tsx) desktop + mobile; update page `<h1>`/metadata; add redirect or new route `/who-we-serve`)
- [ ] Turn it into a hub linking to dedicated segment pages:
  - [ ] Retail chains / c-stores & gas stations
  - [ ] Municipalities & government fleets
  - [ ] Heavy-duty truck washes
  - [ ] Semi / fleet washes
  - [ ] Specialized / custom projects
  - [ ] Dedicated wash businesses (express/tunnel chains)
- [ ] Each segment page: GenericHero + tailored copy + relevant projects + CTA (reuse shared components + StatsBand)
- [ ] Add segment pages to [sitemap.ts](web/src/app/sitemap.ts) + internal links
- [ ] SEO: per-segment metadata/keywords

### "World's Longest Carwash" — featured in-construction page
- [ ] New page (e.g. `/projects/worlds-longest-carwash`) — flagship build currently underway
- [ ] "Under Construction" treatment: nice construction-style sign/banner, brief teaser copy, "coming soon" + contact CTA
- [ ] Link from projects + who-we-serve hub once live

---

## 💡 Optional / later
- [ ] Brand strip: link logos out to OPW/VWS PDQ + Belanger product pages
- [ ] Curate hero imagery per page (GenericHero uses the former `leftImage` as the single bg — review each page's image choice)
- [ ] Add real open-roles list to careers once roles are defined
- [ ] Canonical-class lint warning in Navigation.tsx (`lg:h-[4.25rem]` → `lg:h-17`) — pre-existing, cosmetic
