"use client";

import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { INICIALES, MESES, aClave, celdasMes, inicioSemana, mismoDia, sumarDias, sumarMeses } from "../_lib/fechas";

/** Calendario pequeño de la izquierda: elegir el día que muestra la vista principal. */
export default function MiniMes({ fecha, ahora, porDia, onElegir }) {
  const [mes, setMes] = useState(() => new Date(fecha.getFullYear(), fecha.getMonth(), 1));

  // Si la vista principal cambia de mes, el mini calendario la sigue.
  useEffect(() => {
    setMes(new Date(fecha.getFullYear(), fecha.getMonth(), 1));
  }, [fecha.getFullYear(), fecha.getMonth()]);

  const celdas = celdasMes(mes);
  const lunes = inicioSemana(fecha);
  const domingo = sumarDias(lunes, 6);

  return (
    <section aria-label="Elegir fecha" className="rounded-2xl border border-p-line bg-p-surface p-3">
      <div className="mb-2 flex items-center justify-between pl-1">
        <h2 className="text-sm font-semibold" aria-live="polite">
          {MESES[mes.getMonth()]} {mes.getFullYear()}
        </h2>
        <div className="flex">
          <button
            type="button"
            onClick={() => setMes(sumarMeses(mes, -1))}
            aria-label="Mes anterior"
            className="grid size-9 place-items-center rounded-lg text-p-muted hover:bg-p-raised hover:text-p-text"
          >
            <LuChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setMes(sumarMeses(mes, 1))}
            aria-label="Mes siguiente"
            className="grid size-9 place-items-center rounded-lg text-p-muted hover:bg-p-raised hover:text-p-text"
          >
            <LuChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-xs text-p-muted" aria-hidden>
        {INICIALES.map((l, i) => (
          <span key={i} className="py-1">{l}</span>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {celdas.map((d) => {
          const clave = aClave(d);
          const elegido = mismoDia(d, fecha);
          const esHoy = ahora && mismoDia(d, ahora);
          const enSemana = d >= lunes && d <= domingo;
          const fuera = d.getMonth() !== mes.getMonth();
          const tieneEventos = (porDia[clave]?.length ?? 0) > 0;
          return (
            <div key={clave} className={`flex justify-center ${enSemana ? "bg-p-accent-soft" : ""}`}>
              <button
                type="button"
                onClick={() => onElegir(d)}
                aria-label={`${d.getDate()} de ${MESES[d.getMonth()].toLowerCase()}${tieneEventos ? ", con eventos" : ""}`}
                aria-current={elegido ? "date" : undefined}
                className={`relative grid size-9 place-items-center rounded-full text-xs num ${
                  elegido
                    ? "bg-p-solid font-semibold text-p-on-solid"
                    : `${fuera ? "text-p-muted/60" : ""} ${esHoy ? "font-semibold text-p-accent ring-1 ring-p-accent" : "hover:bg-p-raised"}`
                }`}
              >
                {d.getDate()}
                {tieneEventos && !elegido && (
                  <span className="absolute bottom-1 size-1 rounded-full bg-p-accent" aria-hidden />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
