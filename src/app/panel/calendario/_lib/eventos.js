import { aClave, aMinutos, horaDe, inicioSemana, sumarDias } from "./fechas";

/**
 * Un evento: { id, titulo, inicio: "AAAA-MM-DDTHH:mm", fin: "AAAA-MM-DDTHH:mm", tipo, meet, descripcion }
 * Cada evento ocurre dentro de un solo día. En la fase 4 se guardan en la base de datos.
 */

export const TIPOS = {
  mentoria: {
    etiqueta: "Mentoría",
    barra: "border-p-accent",
    fondo: "bg-p-accent/15",
    punto: "bg-p-accent",
  },
  reunion: {
    etiqueta: "Reunión",
    barra: "border-p-info",
    fondo: "bg-p-info/15",
    punto: "bg-p-info",
  },
  personal: {
    etiqueta: "Personal",
    barra: "border-p-ok",
    fondo: "bg-p-ok/15",
    punto: "bg-p-ok",
  },
};

const CLAVE_ALMACEN = "panel-eventos-v1";

/** Eventos de ejemplo repartidos en la semana actual, para que siempre haya algo que ver. */
export function semilla(hoy) {
  const lunes = inicioSemana(hoy);
  const dia = (n) => aClave(sumarDias(lunes, n));
  const meet = "https://meet.google.com/";
  return [
    { id: "ej-1", titulo: "Gestión de redes", inicio: `${dia(0)}T11:00`, fin: `${dia(0)}T13:00`, tipo: "personal", meet: "", descripcion: "Publicar y responder mensajes." },
    { id: "ej-2", titulo: "Revisión de campañas", inicio: `${dia(1)}T13:00`, fin: `${dia(1)}T15:00`, tipo: "reunion", meet, descripcion: "Revisar el gasto y las ventas por campaña." },
    { id: "ej-3", titulo: "Mentoría con Andrés Pardo", inicio: `${dia(1)}T14:00`, fin: `${dia(1)}T16:00`, tipo: "mentoria", meet, descripcion: "" },
    { id: "ej-4", titulo: "Pedidos y despachos", inicio: `${dia(2)}T09:00`, fin: `${dia(2)}T10:00`, tipo: "personal", meet: "", descripcion: "" },
    { id: "ej-5", titulo: "Mentoría con Camila Rojas", inicio: `${aClave(hoy)}T15:30`, fin: `${aClave(hoy)}T16:00`, tipo: "mentoria", meet, descripcion: "Revisar el catálogo y el plan de campañas." },
    { id: "ej-6", titulo: "Mentoría con Luisa Díaz", inicio: `${dia(4)}T10:30`, fin: `${dia(4)}T11:30`, tipo: "mentoria", meet, descripcion: "" },
  ];
}

/** Lee los eventos guardados en este navegador; si no hay, usa los de ejemplo. */
export function cargar(hoy) {
  try {
    const crudo = localStorage.getItem(CLAVE_ALMACEN);
    if (crudo) {
      const lista = JSON.parse(crudo);
      if (Array.isArray(lista)) return lista;
    }
  } catch {
    /* sin almacenamiento o datos dañados: se usan los de ejemplo */
  }
  return semilla(hoy);
}

export function guardar(lista) {
  try {
    localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(lista));
  } catch {
    /* sin almacenamiento: los cambios duran solo esta visita */
  }
}

export function nuevoId() {
  return globalThis.crypto?.randomUUID?.() ?? `ev-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Agrupa los eventos de un día que se pisan en el tiempo.
 * Devuelve bloques { inicio, fin (en minutos), eventos }. Un bloque con 2 o más eventos
 * se dibuja como un solo recuadro "N reuniones".
 */
export function agrupar(lista) {
  const orden = [...lista].sort((a, b) => a.inicio.localeCompare(b.inicio) || a.fin.localeCompare(b.fin));
  const bloques = [];
  let actual = null;
  for (const ev of orden) {
    const i = aMinutos(horaDe(ev.inicio));
    const f = aMinutos(horaDe(ev.fin));
    if (actual && i < actual.fin) {
      actual.eventos.push(ev);
      actual.fin = Math.max(actual.fin, f);
    } else {
      actual = { inicio: i, fin: f, eventos: [ev] };
      bloques.push(actual);
    }
  }
  return bloques;
}

/** Agrupa una lista de eventos por día: { "AAAA-MM-DD": [eventos] } */
export function porDia(lista) {
  const mapa = {};
  for (const ev of lista) (mapa[ev.inicio.slice(0, 10)] ??= []).push(ev);
  return mapa;
}
