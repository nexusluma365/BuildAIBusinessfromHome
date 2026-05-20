# Build AI Business From Home

Static AI offer funnel with a Netlify Functions backend for Stripe PaymentIntent checkout.

## Local Development

Install dependencies:

```bash
npm install
```

Create `.env` from `.env.example`:

```bash
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

Run with Netlify Dev:

```bash
npm run dev
```

Open:

```text
http://localhost:8888
```

## Stripe

The checkout modal charges `$47` through Stripe using:

- `netlify/functions/stripe-config.js`
- `netlify/functions/create-payment-intent.js`
- `netlify/functions/verify-payment.js`

Set these Netlify environment variables before deployment:

- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `PRODUCT_DOWNLOAD_URL`

Use test keys for testing and live keys only when ready to accept real payments.

`PRODUCT_DOWNLOAD_URL` should be the Cloudflare-hosted product file URL. After Stripe confirms a payment, the page stores the successful PaymentIntent in the buyer's browser. On refresh or return, the page verifies that PaymentIntent with Stripe before showing the download button again.

## Netlify

Build settings:

- Build command: none
- Publish directory: `.`
- Functions directory: `netlify/functions`

`netlify.toml` already contains the required settings.

## Files

- `index.html` is the production entry point.
- `Funnel Template.html` is a working copy of the same page.
- `voice-ai-offer-hero.mp4` is the optimized hero video.
- `ai-product-bundle.png` is the product bundle image.
