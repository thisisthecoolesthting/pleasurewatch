# SITE_SPEC.md — pleasurewatch.org

**Archetype:** affiliate  
**Live URL:** https://pleasurewatch.org  
**Stack:** Astro 4 + Tailwind + ui-ux-pro-max spine (RefillWatch layout)  
**Repo:** https://github.com/thisisthecoolesthting/pleasurewatch  
**Last audited:** 2026-06-01

Master contract: https://github.com/thisisthecoolesthting/rickys-control-center/blob/main/SITE_SPEC.md

## Status snapshot

| Area | Status |
|------|--------|
| Domain + TLS + VPS cron | live |
| Homepage (HeroCompact spine) | live — niche copy + hero image |
| Articles (published) | 18 |
| Pillars | 1 (buyers-guide) |
| Products (Keepa) | 44 published |
| Together FLUX heroes | skipped — no TOGETHER_API_KEY; Unsplash editorial pool assigned |
| GA4 | pending |
| Newsletter | pending (embed URL) |

## Launch checklist

- [x] DNS A @ + www → VPS
- [x] Caddy vhost → `/var/www/pleasurewatch/dist`
- [x] GitHub `main` + minute cron pull/build
- [x] 18+ published articles
- [x] Product pages with affiliate tag `pleasurewatch-20`
- [x] `/methodology` `/disclosure` `/how-we-test`
- [ ] GA4 measurement ID wired
- [ ] Buttondown / newsletter embed
- [ ] Together heroes (optional upgrade)
