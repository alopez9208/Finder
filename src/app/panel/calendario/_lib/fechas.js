// Utilidades de fechas del calendario. Todo en hora local; las fechas se guardan como texto
// "AAAA-MM-DD" y las horas como "HH:mm" para evitar problemas de zona horaria.

export const DIAS_LARGOS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
export const DIAS_CORTOS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
export const INICIALES = ["L", "M", "M", "J", "V", "S", "D"];
export const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
export const MESES_CORTOS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

export const pad = (n) => String(n).padStart(2, "0");

/** Date → "AAAA-MM-DD" */
export const aClave = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** "AAAA-MM-DD" → Date a las 00:00 locales */
export const deClave = (k) => {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/** Índice del día con la semana empezando en lunes: lunes = 0 … domingo = 6 */
export const indiceSemana = (d) => (d.getDay() + 6) % 7;

export const sumarDias = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

/** Suma meses sin desbordar (31 de enero + 1 mes = 28/29 de febrero) */
export const sumarMeses = (d, n) => {
  const primero = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const diasDelMes = new Date(primero.getFullYear(), primero.getMonth() + 1, 0).getDate();
  return new Date(primero.getFullYear(), primero.getMonth(), Math.min(d.getDate(), diasDelMes));
};

/** Lunes de la semana de `d`, a las 00:00 */
export const inicioSemana = (d) => sumarDias(new Date(d.getFullYear(), d.getMonth(), d.getDate()), -indiceSemana(d));

export const mismoDia = (a, b) => aClave(a) === aClave(b);

/** "15:30" → 930 */
export const aMinutos = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** 930 → "15:30" */
export const deMinutos = (min) => `${pad(Math.floor(min / 60))}:${pad(min % 60)}`;

/** "2026-10-07T15:30" → "15:30" */
export const horaDe = (iso) => iso.slice(11, 16);

/** "2026-10-07T15:30" → "2026-10-07" */
export const diaDe = (iso) => iso.slice(0, 10);

/** Semanas completas (lunes a domingo) que cubren el mes de `d`: 28, 35 o 42 fechas */
export const celdasMes = (d) => {
  const primero = new Date(d.getFullYear(), d.getMonth(), 1);
  const diasDelMes = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  const desfase = indiceSemana(primero);
  const total = Math.ceil((desfase + diasDelMes) / 7) * 7;
  const inicio = sumarDias(primero, -desfase);
  return Array.from({ length: total }, (_, i) => sumarDias(inicio, i));
};

/** "Mié 7 de oct" */
export const etiquetaDia = (d) => `${DIAS_CORTOS[indiceSemana(d)]} ${d.getDate()} de ${MESES_CORTOS[d.getMonth()]}`;

/** Título de la barra superior según la vista */
export const tituloVista = (vista, d) =>
  vista === "dia"
    ? `${DIAS_LARGOS[indiceSemana(d)]} ${d.getDate()} de ${MESES[d.getMonth()].toLowerCase()}`
    : `${MESES[d.getMonth()]} ${d.getFullYear()}`;
