# Golf Club Website (Next.js)

This project is a modern Next.js app with integrated Stripe payments.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your `.env.local` in the root:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/app/` — Main app pages and layout
- `src/app/api/` — API routes (Stripe, etc.)
- `public/` — Static assets
- `.env.local` — Environment variables

## Stripe Integration
- The payment button on the homepage creates a Stripe Checkout session via the API route.
- All backend logic is handled by Next.js API routes.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
