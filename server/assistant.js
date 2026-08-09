const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function summarizeOrder(orderDetails) {
  return openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: `Summarize this order: ${orderDetails}` }],
  });
}

module.exports = { summarizeOrder };