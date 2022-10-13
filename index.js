async function mostraCarte() {
  let arrayMagic = await fetch("https://api.magicthegathering.io/v1/cards");

  let carteTesto = await arrayMagic.text();
  console.log(carteTesto);
}

window.onload = () => {
  mostraCarte();
};
