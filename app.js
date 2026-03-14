// Estado central de la aplicación
let tarjetas = [];
let idContador = 1;
// Genera un ID único para cada tarjeta
const generarId = () => idContador++;
// Obtiene el valor de un campo de texto y lo limpia
const leerCampo = (selector) => {
  const campo = document.querySelector(selector);
  const valor = campo.value.trim();
  campo.value = "";
  return valor;
};
// Referencia al contenedor de la galería
const galeria = document.querySelector("#galeria");
