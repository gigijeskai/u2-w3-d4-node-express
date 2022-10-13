async function mostraCarte() {
  let arrayMagic = await fetch("https://api.magicthegathering.io/v1/cards");

  let carteTesto = await arrayMagic.text();
  console.log(carteTesto);
  let tutteLeCarte = JSON.parse(carteTesto).cards;
  document.querySelector("#container").innerHTML = "";
  for (carta of tutteLeCarte) {
    document.querySelector("#container").innerHTML += `<p>${carta.name}</p>`;
  }
}

window.onload = () => {
  document.querySelector("#container").innerHTML = "loading...";
  mostraCarte();
};
