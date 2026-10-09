// DATOS DE EJEMPLO. Se reemplazan por datos reales de la base de datos en la fase 4.

export const cop = (n) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

export const indicadores = [
  { etiqueta: "Ventas del mes", valor: cop(4860000), cambio: "+12% frente al mes pasado", tono: "ok" },
  { etiqueta: "Pedidos del mes", valor: "38", cambio: "+5 frente al mes pasado", tono: "ok" },
  { etiqueta: "Entregados", valor: "71%", cambio: "3 devoluciones este mes", tono: "warn" },
  { etiqueta: "Utilidad estimada", valor: cop(1240000), cambio: "Después de costos y fletes", tono: "muted" },
];

export const ventasSemana = [
  { dia: "Vie", valor: 520000 },
  { dia: "Sáb", valor: 310000 },
  { dia: "Dom", valor: 180000 },
  { dia: "Lun", valor: 640000 },
  { dia: "Mar", valor: 720000 },
  { dia: "Mié", valor: 450000 },
  { dia: "Hoy", valor: 380000 },
];

export const estadosPedidos = [
  { clave: "entregado", etiqueta: "Entregados", cantidad: 27 },
  { clave: "transito", etiqueta: "En tránsito", cantidad: 6 },
  { clave: "devolucion", etiqueta: "Devoluciones", cantidad: 3 },
  { clave: "pendiente", etiqueta: "Sin despachar", cantidad: 2 },
];

export const pedidosRecientes = [
  { id: 1, cliente: "Camila Rojas", producto: "Corrector de postura", ciudad: "Medellín", estado: "transito", total: 89900 },
  { id: 2, cliente: "Andrés Pardo", producto: "Set de ollas antiadherentes", ciudad: "Bogotá", estado: "entregado", total: 159000 },
  { id: 3, cliente: "Luisa Fernanda Díaz", producto: "Lámpara solar x2", ciudad: "Cali", estado: "pendiente", total: 74000 },
  { id: 4, cliente: "Jorge Salcedo", producto: "Faja moldeadora", ciudad: "Barranquilla", estado: "devolucion", total: 98000 },
  { id: 5, cliente: "Marcela Quintero", producto: "Corrector de postura", ciudad: "Pereira", estado: "entregado", total: 89900 },
];

export const reuniones = [
  { id: 1, cuando: "Hoy", hora: "15:30", titulo: "Mentoría con Camila Rojas", detalle: "Google Meet" },
  { id: 2, cuando: "Mañana", hora: "08:00", titulo: "Revisión de campañas", detalle: "2 reuniones" },
  { id: 3, cuando: "Lun 12", hora: "10:30", titulo: "Mentoría con Andrés Pardo", detalle: "Google Meet" },
];

export const ESTADO_PEDIDO = {
  entregado: { texto: "Entregado", clase: "text-p-ok", punto: "bg-p-ok" },
  transito: { texto: "En tránsito", clase: "text-p-info", punto: "bg-p-info" },
  devolucion: { texto: "Devolución", clase: "text-p-bad", punto: "bg-p-bad" },
  pendiente: { texto: "Sin despachar", clase: "text-p-warn", punto: "bg-p-warn" },
};
