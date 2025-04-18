// netlify/functions/subscribe.js

export async function handler(event) {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method Not Allowed" }),
      };
    }
  
    const { email } = JSON.parse(event.body);
  
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email is required" }),
      };
    }
  
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
  
    try {
      const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": "912773400e106c5a163fd938b9dab0c7",
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        return {
          statusCode: res.status,
          body: JSON.stringify({ message: data.error.message || "MailerLite error" }),
        };
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Successfully subscribed!" }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Server error", error: error.message }),
      };
    }
  }
  