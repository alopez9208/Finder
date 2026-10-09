"use client";

import { TIPOS } from "../_lib/eventos";
import { DIAS_CORTOS, aClave, celdasMes, horaDe, mismoDia } from "../_lib/fechas";

const MAX_VISIBLES = 3;

/** Vista de Mes: una celda por día con sus eventos. */
export default function VistaMes({ fecha, porDia, ahora, onNuevo, onEvento, onIrADia }) {
  const celdas = celdasMes(fecha);
  const filas = celdas.length / 7;

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-p-line bg-p-surface">
      <div className="grid grid-cols-7">
        {DIAS_CORTOS.map((d) => (
          <div key={d} className="py-2 text-center text-xs text-p-muted">{d}</div>
        ))}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-7" style={{ gridTemplateRows: `repeat(${filas}, minmax(0, 1fr))` }}>
        {celdas.map((d) => {
          const clave = aClave(d);
          const fuera = d.getMonth() !== fecha.getMonth();
          const esHoy = ahora && mismoDia(d, ahora);
          const eventos = [...(porDia[clave] ?? [])].sort((a, b) => a.inicio.localeCompare(b.inicio));
          return (
            <div
              key={clave}
              onClick={(e) => e.target === e.currentTarget && onNuevo(clave, "09:00")}
              className={`min-h-0 overflow-hidden border-l border-t border-p-line p-1 sm:p-1.5 ${fuera ? "bg-p-bg/60" : ""}`}
            >
              <button
                type="button"
                onClick={() => onIrADia(d)}
                aria-label={`Ver el día ${d.getDate()}`}
                className={`grid size-7 place-items-center rounded-full text-xs font-semibold num ${
                  esHoy ? "bg-p-solid text-p-on-solid" : fuera ? "text-p-muted hover:bg-p-raised" : "hover:bg-p-raised"
                }`}
              >
                {d.getDate()}
              </button>

              <ul className="mt-1 hidden space-y-0.5 sm:block">
                {eventos.slice(0, MAX_VISIBLES).map((ev) => {
                  const t = TIPOS[ev.tipo] ?? TIPOS.personal;
                  return (
                    <li key={ev.id}>
                      <button
                        type="button"
                        onClick={() => onEvento(ev)}
                        title={ev.titulo}
                        className={`flex w-full items-center gap-1 truncate rounded-md border-l-2 px-1.5 py-0.5 text-left text-xs hover:brightness-95 ${t.barra} ${t.fondo}`}
                      >
                        <span className="text-p-muted num">{horaDe(ev.inicio)}</span>
                        <span className="truncate font-medium">{ev.titulo}</span>
                      </button>
                    </li>
                  );
                })}
                {eventos.length > MAX_VISIBLES && (
                  <li>
                    <button
                      type="button"
                      onClick={() => onIrADia(d)}
                      className="rounded-md px-1.5 py-0.5 text-xs font-medium text-p-accent hover:bg-p-accent-soft"
                    >
                      +{eventos.length - MAX_VISIBLES} más
                    </button>
                  </li>
                )}
              </ul>

              {/* En pantallas pequeñas solo se muestran puntos; el detalle está en la vista Día */}
              {eventos.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-0.5 sm:hidden" aria-hidden>
                  {eventos.slice(0, 4).map((ev) => (
                    <span key={ev.id} className={`size-1.5 rounded-full ${(TIPOS[ev.tipo] ?? TIPOS.personal).punto}`} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
