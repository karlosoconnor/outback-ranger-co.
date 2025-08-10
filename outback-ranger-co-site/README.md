# Outback Ranger Co. — Static Site

This is a fast, no-dependency static site you can host **free** on GitHub Pages.

## Deploy (GitHub Pages)
1. Create a new GitHub repo (public is fine), e.g. `outback-ranger-site`.
2. Upload all files in this folder to the repo root.
3. In **Settings → Pages**, set **Source** to `Deploy from a branch`, pick branch `main`, folder `/root`.
4. Wait ~1 minute. Your site will be live at:
   - `https://<your-username>.github.io/outback-ranger-site/`

## Custom Domain
- Add your domain in **Settings → Pages → Custom domain** (e.g. `outbackrangerco.com`).
- Create DNS records at your registrar:
  - For apex (root) domain: `A` records to GitHub Pages IPs (see GitHub docs).
  - For `www`: `CNAME` to `<your-username>.github.io`.
- Commit a file named `CNAME` at the repo root containing only your domain.

## Edit Products
- Update `products.json` with real items, prices, and image paths.
- Product images: put JPG/PNG files in `assets/` and reference them from `products.json`.

## Payments (Optional)
- Replace each product's `link` with your PayPal button URL or Stripe payment link.
- Or embed a simple checkout flow — the site is plain HTML/JS so you have full control.

## Local Preview
Just open `index.html` and `catalog.html` in your browser. No build step required.
