# Eljones Digital Website

Static React + Vite website for Eljones Digital, built for SEO and GEO visibility.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build writes prerendered static files to `dist/`.

## What Is Included

- Seven routes: home, services, how it works, about, contact, blog and a GEO SEO article.
- Prerendered HTML for every route using `vite-react-ssg`.
- Unique titles, descriptions, canonical URLs and Open Graph tags.
- JSON-LD schema for Organization, WebSite, Service ItemList, FAQPage, HowTo, ProfilePage, Article and BreadcrumbList.
- `robots.txt`, `llms.txt`, `sitemap.xml`, `.htaccess` and Open Graph image.

## Deploy To Hostinger File Manager

1. Run `npm run build`.
2. Open the `dist` folder.
3. Select the contents of `dist`, not the folder itself.
4. Zip those files.
5. Log into Hostinger hPanel.
6. Open File Manager.
7. Open `public_html`.
8. Delete the old site files in `public_html` after backing up anything you still need.
9. Upload the zip file.
10. Extract the zip inside `public_html`.
11. Confirm `index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` and `.htaccess` are directly inside `public_html`.
12. Visit `https://eljonesdigital.com` and test the main pages.

The included `.htaccess` supports direct route visits such as `/services` and `/blog/what-is-geo-seo` on Hostinger Apache hosting.
