document.getElementById("subscribe-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const responseMsg = document.querySelector("[data-subscribe-form]");

    const res = await fetch("/.netlify/functions/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    responseMsg.textContent = data.message;
    responseMsg.style.color = res.ok ? "green" : "red";
  });