const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

async function chargeCustomer(customerId, amount) {
  return stripe.charges.create({
    amount,
    currency: "usd",
    customer: customerId,
  });
}

module.exports = { chargeCustomer };