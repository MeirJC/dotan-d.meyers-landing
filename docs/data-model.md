---
status: stable
updated: 2026-06-23
read_when: Touching src/data/*, types, or the blog content collection
---
# Data Model

> Source of truth: `src/data/types.ts` (UI data) and `src/content.config.ts` (blog). Compact notation below.
> Dossier 2 modernizes these to be future-ready (services, testimonials, locations, certificates).

## UI data types — `src/data/types.ts`
```
ImageTagType = "before" | "after"

CarouselItem  { img: ImageMetadata, title: string, tag?: ImageTagType, tmpTag?: string }
              // tmpTag = dev-only file-path label for sorting before/after; strip for prod

FeatureCardItem { id, title, description, list: string[], image: ImageMetadata,
                  alt, reverse: boolean, message }

ProjectCardItem { id, title, subTitle, description, images: CarouselItem[],
                  items?: string[], location?, date?, tags?: string[] }

HeroSectionData { brandName, brandDescription, description,
                  button?{text,href}, learnMore?{text,href}, images: CarouselItem[] }
FeaturesSectionData { title, description, cards: FeatureCardItem[] }
ProjectSectionData  { title, description, cards: ProjectCardItem[] }
```
Data instances: `src/data/heroData.ts`, `featuresData.ts`, `projectsData.ts`.

## Blog content collection — `src/content.config.ts` (Zod)
```
blog (glob: src/content/blog/**/*.{md,mdx}) {
  title, description, pubDate: Date, updatedDate?: Date,
  heroImage?, heroImageAlt?, category?, tags?: string[],
  draft = false, featured = false, author = "דותן מאיר", relatedPosts?: string[]
}
```

## Project image assets — `src/assets/images/project-page/<project>/{before,after}/`
Projects: afek, beit-itzhak, carmochrome, liq-recycle, yma. **Note:** several `after/` folders are
placeholders (`temp.txt`) — after-photos are missing for most projects (asset gap for Dossier 4).

## Dossier 2 — modernization intent (not yet built)
- Make schemas extensible for: structured **services**, **testimonials/reviews**, **service-area/locations**,
  **certificates/credentials**, and richer project metadata (outcome, problem, methods) feeding both UI and JSON-LD.
- Single source of truth for **NAP** (name/address/phone) reused by footer + schema (SEO dossier).
- Reconsider `tmpTag` dev-mechanism. Keep changes additive and typed.
