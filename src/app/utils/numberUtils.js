export function formatearNumero(valor) {
  if (typeof valor !== "number") valor = Number(valor);

  // Obtener parte entera truncando decimales
  const entero = Math.trunc(valor);

  // Formatear la parte entera con separadores de miles
  const formateado = entero.toLocaleString("de-DE");

  if (entero < 1000000) {
    return formateado;
  } else {
    return formateado.replace(".", "'");
  }
}

  