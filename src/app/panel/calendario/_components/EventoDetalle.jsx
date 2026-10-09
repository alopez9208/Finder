"use client";

import { useEffect, useRef, useState } from "react";
import { LuAlignLeft, LuPencil, LuTrash2, LuVideo, LuX } from "react-icons/lu";
import { TIPOS } from "../_lib/eventos";
import { deClave, diaDe, etiquetaDia, horaDe } from "../_lib/fechas";

/**
 * Tarjeta de detalle. Con un evento: ver, editar y eliminar.
 * Con un grupo (varios eventos al mismo tiempo): lista para elegir cuál abrir.
 */
export default function EventoDetalle({ eventos, rango, onCerrar, onEditar, onEliminar, onElegir }) {
  const [confirmando, setConfirmando] = useState(false);
  const panel = useRef(null);
  const esGrupo = eventos.length > 1;
  const ev = eventos[0];

  useEffect(() => {
    panel.current?.focus();
    const alTeclear = (e) => e.key === "Escape" && onCerrar();
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [onCerrar]);

  const cabecera = esGrupo
    ? `${etiquetaDia(deClave(diaDe(ev.inicio)))} · ${rango}`
    : `${etiquetaDia(deClave(diaDe(ev.inicio)))} · ${horaDe(ev.inicio)} – ${horaDe(ev.fin)}`;
  const tipo = TIPOS[ev.tipo] ?? TIPOS.personal;

  return (
    <div
      ref={panel}
      tabIndex={-1}
      role="dialog"
      aria-label={esGrupo ? `${eventos.length} reuniones` : ev.titulo}
      className="fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-p-line bg-p-surface p-5 shadow-2xl outline-none md:inset-x-auto md:bottom-6 md:right-6 md:w-96"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-medium text-p-accent num">{cabecera}</p>
        <button
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar"
          className="-mr-2 -mt-2 grid size-9 shrink-0 place-items-center rounded-lg text-p-muted hover:bg-p-raised hover:text-p-text"
        >
          <LuX className="size-4" aria-hidden />
        </button>
      </div>

      {esGrupo ? (
        <>
          <h2 className="mt-1 text-lg font-semibold">{eventos.length} reuniones al mismo tiempo</h2>
          <ul className="mt-3 space-y-2">
            {eventos.map((e) => {
              const t = TIPOS[e.tipo] ?? TIPOS.personal;
              return (
                <li key={e.id}>
                  <button
                    type="button"
                    onClick={() => onElegir(e)}
                    className={`w-full rounded-xl border-l-4 px-3 py-2 text-left hover:brightness-95 ${t.barra} ${t.fondo}`}
                  >
                    <span className="block text-sm font-semibold">{e.titulo}</span>
                    <span className="block text-xs text-p-muted num">
                      {t.etiqueta} · {horaDe(e.inicio)} – {horaDe(e.fin)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <h2 className="mt-1 text-lg font-semibold leading-snug">{ev.titulo}</h2>
          <p className="mt-1 flex items-center gap-2 text-xs text-p-muted">
            <span className={`size-2 rounded-full ${tipo.punto}`} aria-hidden />
            {tipo.etiqueta}
          </p>

          <div className="mt-4 space-y-3 text-sm">
            {ev.meet && (
              <p className="flex items-center gap-3">
                <LuVideo className="size-4 shrink-0 text-p-muted" aria-hidden />
                <a href={ev.meet} target="_blank" rel="noopener noreferrer" className="font-medium text-p-accent underline-offset-2 hover:underline">
                  Unirse a Google Meet
                </a>
              </p>
            )}
            {ev.descripcion && (
              <p className="flex gap-3">
                <LuAlignLeft className="mt-0.5 size-4 shrink-0 text-p-muted" aria-hidden />
                <span className="whitespace-pre-line text-p-muted">{ev.descripcion}</span>
              </p>
            )}
          </div>

          {confirmando ? (
            <div className="mt-5 space-y-3 rounded-xl bg-p-raised p-3">
              <p className="text-sm">¿Eliminar «{ev.titulo}»? Esta acción no se puede deshacer.</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmando(false)}
                  className="h-10 flex-1 rounded-xl border border-p-line text-sm font-medium hover:bg-p-surface"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={() => onEliminar(ev.id)}
                  className="h-10 flex-1 rounded-xl bg-p-bad text-sm font-semibold text-white hover:opacity-90"
                >
                  Eliminar evento
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onEditar(ev)}
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-p-line text-sm font-medium hover:bg-p-raised"
              >
                <LuPencil className="size-4" aria-hidden />
                Editar
              </button>
              <button
                type="button"
                onClick={() => setConfirmando(true)}
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-p-bad/40 text-sm font-medium text-p-bad hover:bg-p-bad/10"
              >
                <LuTrash2 className="size-4" aria-hidden />
                Eliminar
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
