const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.json(
    (card = [
      { name: "otto per mille", image: "../assets/img/logo-6.webp", price: 8.0 },
      { name: "github", image: "../assets/img/logo-7.png", price: 50 },
      { name: "github desktop", image: "../assets/img/logo-7.png", price: 99.99 },
      { name: "abbonamento brazzers", image: "../assets/img/sponsor-3.jpg", price: 14.99 },
    ])
  );
});

app.listen(3000);
