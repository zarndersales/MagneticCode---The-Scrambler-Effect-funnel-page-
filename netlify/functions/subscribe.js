exports.handler = async (event) => {

  const { email } = JSON.parse(event.body);
  
  const API_KEY = process.env.BREVO_API_KEY;

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [3], // your list ID
        updateEnabled: true,
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: error.message }),
    };
  }
};
