"use client";

import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import { TIPOS } from "../_lib/eventos";
import { aMinutos } from "../_lib/fechas";

const CAMPO = "h-11 w-full rounded-xl border border-p-line bg-p-bg px-3 text-sm outline-none focus:border-p-accent";

/** Valida y devuelve el mensaje de error, o null si todo está bien. */
export function validar(d) {
  if (!d.titulo.trim()) return "Escribe un título para el evento.";
  if (!d.fecha) return "Elige una fecha.";
  if (!d.inicio || !d.fin) return "Elige la hora de inicio y la de fin.";
  if (aMinutos(d.fin) <= aMinutos(d.inicio)) return "La hora de fin debe ser después de la de inicio.";
  if (d.meet.trim() && !/^https?:\/\/\S+$/i.test(d.meet.trim())) return "El enlace de la reunión debe empezar por https://";
  return null;
}

/** Ventana para crear o editar un evento. `base` trae los valores iniciales. */
export default function EventoForm({ modo, base, onGuardar, onCancelar }) {
  const [d, setD] = useState(base);
  const [error, setError] = useState(null);
  const editar = modo === "editar";

  useEffect(() => {
    const alTeclear = (e) => e.key === "Escape" && onCancelar();
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [onCancelar]);

  const cambiar = (campo) => (e) => setD((x) => ({ ...x, [campo]: e.target.value }));

  const enviar = (e) => {
    e.preventDefault();
    const mensaje = validar(d);
    setError(mensaje);
    if (!mensaje) onGuardar({ ...d, titulo: d.titulo.trim(), meet: d.meet.trim(), descripcion: d.descripcion.trim() });
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <button type="button" aria-label="Cancelar" onClick={onCancelar} className="absolute inset-0 bg-black/50" tabIndex={-1} />
      <form
        onSubmit={enviar}
        noValidate
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-form-evento"
        className="relative max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-2xl border border-p-line bg-p-surface p-5 shadow-2xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id="titulo-form-evento" className="text-lg font-semibold">{editar ? "Editar evento" : "Nuevo evento"}</h2>
          <button
            type="button"
            onClick={onCancelar}
            aria-label="Cerrar"
            className="-mr-2 grid size-9 place-items-center rounded-lg text-p-muted hover:bg-p-raised hover:text-p-text"
          >
            <LuX className="size-4" aria-hidden />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="ev-titulo" className="mb-1.5 block text-sm font-medium">Título</label>
            <input id="ev-titulo" autoFocus value={d.titulo} onChange={cambiar("titulo")} placeholder="Ej. Mentoría con Camila" className={CAMPO} />
          </div>

          <div>
            <label htmlFor="ev-fecha" className="mb-1.5 block text-sm font-medium">Fecha</label>
            <input id="ev-fecha" type="date" value={d.fecha} onChange={cambiar("fecha")} className={CAMPO} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="ev-inicio" className="mb-1.5 block text-sm font-medium">Inicio</label>
              <input id="ev-inicio" type="time" value={d.inicio} onChange={cambiar("inicio")} className={CAMPO} />
            </div>
            <div>
              <label htmlFor="ev-fin" className="mb-1.5 block text-sm font-medium">Fin</label>
              <input id="ev-fin" type="time" value={d.fin} onChange={cambiar("fin")} className={CAMPO} />
            </div>
          </div>

          <fieldset>
            <legend className="mb-1.5 text-sm font-medium">Tipo</legend>
            <div className="grid grid-cols-3 gap-1 rounded-xl bg-p-raised p-1">
              {Object.entries(TIPOS).map(([clave, t]) => (
                <label
                  key={clave}
                  className={`flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg text-xs font-medium has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-p-accent ${
                    d.tipo === clave ? "bg-p-surface text-p-text shadow-sm" : "text-p-muted hover:text-p-text"
                  }`}
                >
                  <input type="radio" name="ev-tipo" value={clave} checked={d.tipo === clave} onChange={cambiar("tipo")} className="sr-only" />
                  <span className={`size-2 rounded-full ${t.punto}`} aria-hidden />
                  {t.etiqueta}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="ev-meet" className="mb-1.5 block text-sm font-medium">Enlace de Google Meet <span className="font-normal text-p-muted">(opcional)</span></label>
            <input id="ev-meet" type="url" inputMode="url" value={d.meet} onChange={cambiar("meet")} placeholder="https://meet.google.com/..." className={CAMPO} />
          </div>

          <div>
            <label htmlFor="ev-desc" className="mb-1.5 block text-sm font-medium">Descripción <span className="font-normal text-p-muted">(opcional)</span></label>
            <textarea id="ev-desc" rows={3} value={d.descripcion} onChange={cambiar("descripcion")} className={`${CAMPO} h-auto resize-none py-2.5`} />
          </div>
        </div>

        {error && (
          <p role="alert" className="mt-4 rounded-lg bg-p-bad/10 px-3 py-2 text-sm text-p-bad">{error}</p>
        )}

        <div className="mt-5 flex gap-2">
          <button type="button" onClick={onCancelar} className="h-11 flex-1 rounded-xl border border-p-line text-sm font-medium hover:bg-p-raised">
            Cancelar
          </button>
          <button type="submit" className="h-11 flex-1 rounded-xl bg-p-solid text-sm font-semibold text-p-on-solid hover:opacity-90">
            {editar ? "Guardar cambios" : "Crear evento"}
          </button>
        </div>
      </form>
    </div>
  );
}
