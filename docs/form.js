document
  .getElementById("userForm")
  .addEventListener("submit", async function (e) {

    e.preventDefault();

    const userData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      address: document.getElementById("address").value,
      acceptedTerms: document.getElementById("terms").checked
    };

    try {

      const response = await fetch("https://refold-onyx-referee.ngrok-free.dev/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const result = await response.json();

      document.getElementById("message").innerHTML =
        "User data saved successfully!";

      document.getElementById("userForm").reset();

      console.log(result);

    } catch (error) {

      document.getElementById("message").innerHTML =
        "Error saving user data";

      console.error(error);
    }
});
