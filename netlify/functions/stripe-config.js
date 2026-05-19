exports.handler = async () => {
  if (!process.env.STRIPE_PUBLISHABLE_KEY) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Stripe publishable key is not configured.' })
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY })
  };
};
