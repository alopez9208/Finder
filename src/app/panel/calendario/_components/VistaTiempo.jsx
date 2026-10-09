"use client";

import { useEffect, useRef } from "react";
import { LuLayers } from "react-icons/lu";
import { TIPOS, agrupar } from "../_lib/eventos";
import { DIAS_CORTOS, aClave, deMinutos, horaDe, indiceSemana, mismoDia, pad } from "../_lib/fechas";

const ALTO_HORA = 56; // píxeles por hora
const HORA_INICIAL = 7; // al abrir, la vista baja hasta las 7:00

/** Vista de Semana (7 columnas) o de Día (1 columna) con cuadrícula de horas. */
export default function VistaTiempo({ dias, porDia, ahora, onNuevo, onEvento, onGrupo, onIrADia }) {
  const contenedor = useRef(null);
  const n = dias.length;
  const columnas = `3.5rem repeat(${n}, minmax(0, 1fr))`;

  useEffect(() => {
    if (!contenedor.current) return;
    const hoyEnVista = ahora && dias.some((d) => mismoDia(d, ahora));
    const hora = hoyEnVista ? Math.max(0, ahora.getHours() - 2) : HORA_INICIAL;
    contenedor.current.scrollTop = ALTO_HORA * hora - 8;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const alClicColumna = (e, clave) => {
    if (e.target !== e.currentTarget) return; // solo en espacio vacío, no sobre un evento
    const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
    const minutos = Math.min(23 * 60 + 30, Math.floor(((y / ALTO_HORA) * 60) / 30) * 30);
    onNuevo(clave, deMinutos(minutos));
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-p-line bg-p-surface">
      <div ref={contenedor} className="min-h-0 flex-1 overflow-auto">
        <div style={{ minWidth: n > 1 ? "46rem" : undefined }}>
          <div className="sticky top-0 z-20 grid border-b border-p-line bg-p-surface" style={{ gridTemplateColumns: columnas }}>
            <div />
            {dias.map((d) => {
              const esHoy = ahora && mismoDia(d, ahora);
              const numero = (
                <span
                  className={`mx-auto mt-1 grid size-9 place-items-center rounded-full text-base font-semibold num ${
                    esHoy ? "bg-p-solid text-p-on-solid" : n > 1 ? "group-hover:bg-p-raised" : ""
                  }`}
                >
                  {d.getDate()}
                </span>
              );
              return (
                <div key={aClave(d)} className="border-l border-p-line py-2 text-center">
                  <p className="text-xs text-p-muted">{DIAS_CORTOS[indiceSemana(d)]}</p>
                  {n > 1 ? (
                    <button
                      type="button"
                      onClick={() => onIrADia(d)}
                      aria-label={`Ver el día ${d.getDate()}`}
                      className="group mx-auto block rounded-full"
                    >
                      {numero}
                    </button>
                  ) : (
                    numero
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid" style={{ gridTemplateColumns: columnas, height: 24 * ALTO_HORA }}>
            <div className="relative" aria-hidden>
              {Array.from({ length: 23 }, (_, i) => i + 1).map((h) => (
                <span
                  key={h}
                  className="absolute right-2 -translate-y-1/2 text-xs text-p-muted num"
                  style={{ top: h * ALTO_HORA }}
                >
                  {pad(h)}:00
                </span>
              ))}
            </div>

            {dias.map((d) => {
              const clave = aClave(d);
              const esHoy = ahora && mismoDia(d, ahora);
              const minutosAhora = ahora ? ahora.getHours() * 60 + ahora.getMinutes() : 0;
              return (
                <div
                  key={clave}
                  onClick={(e) => alClicColumna(e, clave)}
                  className={`relative border-l border-p-line ${esHoy ? "bg-p-accent-soft/40" : ""}`}
                  style={{
                    backgroundImage: "linear-gradient(to bottom, var(--p-line) 1px, transparent 1px)",
                    backgroundSize: `100% ${ALTO_HORA}px`,
                  }}
                >
                  {agrupar(porDia[clave] ?? []).map((b) => {
                    const arriba = (b.inicio / 60) * ALTO_HORA + 1;
                    const alto = Math.max(((b.fin - b.inicio) / 60) * ALTO_HORA, 24) - 2;
                    const rango = `${deMinutos(b.inicio)} – ${deMinutos(b.fin)}`;

                    if (b.eventos.length === 1) {
                      const ev = b.eventos[0];
                      const t = TIPOS[ev.tipo] ?? TIPOS.personal;
                      return (
                        <button
                          key={ev.id}
                          type="button"
                          onClick={() => onEvento(ev)}
                          title={`${ev.titulo} · ${rango}`}
                          className={`absolute inset-x-1 overflow-hidden rounded-lg border-l-4 px-2 py-1 text-left text-xs transition-[filter] hover:brightness-95 ${t.barra} ${t.fondo}`}
                          style={{ top: arriba, height: alto }}
                        >
                          <span className="block truncate font-semibold">{ev.titulo}</span>
                          {alto >= 40 && <span className="block truncate text-p-muted num">{horaDe(ev.inicio)} – {horaDe(ev.fin)}</span>}
                        </button>
                      );
                    }

                    const titulos = b.eventos.map((e) => e.titulo).join(", ");
                    return (
                      <button
                        key={b.eventos.map((e) => e.id).join("+")}
                        type="button"
                        onClick={() => onGrupo(b)}
                        aria-label={`${b.eventos.length} reuniones de ${rango}: ${titulos}`}
                        title={titulos}
                        className="absolute inset-x-1 overflow-hidden rounded-lg border border-p-accent/40 bg-p-accent-soft px-2 py-1 text-left text-xs transition-[filter] hover:brightness-95"
                        style={{ top: arriba, height: alto }}
                      >
                        <span className="flex items-center gap-1.5 font-semibold text-p-accent">
                          <LuLayers className="size-3.5 shrink-0" aria-hidden />
                          <span className="truncate">{b.eventos.length} reuniones</span>
                        </span>
                        {alto >= 40 && <span className="block truncate text-p-muted num">{rango}</span>}
                      </button>
                    );
                  })}

                  {esHoy && ahora && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 z-10 flex -translate-y-1/2 items-center"
                      style={{ top: (minutosAhora / 60) * ALTO_HORA }}
                    >
                      <span className="-ml-1 size-2 rounded-full bg-p-solid" />
                      <span className="h-px flex-1 bg-p-solid" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
