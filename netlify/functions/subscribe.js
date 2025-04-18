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
  
    const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
    const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;
    const LIST_ID = process.env.MAILJET_LIST_ID;
  
    try {
      const res = await fetch(`https://api.mailjet.com/v3/REST/contactslist/${LIST_ID}/managecontact`, {
        method: "POST",
        headers: {
          Authorization: "Basic " + Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString("base64"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Action: "addforce" // 👈 forces re-add even if previously unsubscribed
        }),
      });
  
      const data = await res.json();
      console.log("Mailjet response:", data); // 🪵 Log for debugging
  
      if (!res.ok) {
        return {
          statusCode: res.status,
          body: JSON.stringify({ message: data.ErrorMessage || "Mailjet error" }),
        };
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Successfully subscribed to the_scrambler!" }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Server error", error: err.message }),
      };
    }
  }
  