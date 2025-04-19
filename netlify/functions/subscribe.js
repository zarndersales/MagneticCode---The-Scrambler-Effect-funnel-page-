// Netlify Function: subscribe.js
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { email } = JSON.parse(event.body);

  const API_KEY = process.env.BREVO_API_KEY;

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "api-key": API_KEY,
    },
    body: JSON.stringify({
      email,
      listIds: [3], // your magneticfunnels list ID
      updateEnabled: true,
      attributes: {
        SOURCE: "MagneticLanding",
      },
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      statusCode: res.status,
      body: JSON.stringify({ message: data.message || "Brevo error" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Subscribed successfully!" }),
  };
};
