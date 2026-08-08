const twilio = require("twilio");
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendOrderConfirmation(toNumber, orderId) {
  return client.messages.create({
    body: `Your order ${orderId} has shipped.`,
    from: process.env.TWILIO_FROM_NUMBER,
    to: toNumber,
  });
}

module.exports = { sendOrderConfirmation };