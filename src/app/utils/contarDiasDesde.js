export function contarDiasDesde(fecha) {
    const hoy = new Date();
    const fechaObj = new Date(fecha);
    hoy.setHours(0, 0, 0, 0);
    fechaObj.setHours(0, 0, 0, 0);
  
    const diferenciaMs = hoy - fechaObj;
    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
    return dias;
  }  