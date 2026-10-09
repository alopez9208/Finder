"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LuSettings2, LuLogOut } from "react-icons/lu";
import { usePanel } from "./PanelProvider";

function Segmentado({ etiqueta, opciones, valor, onChange }) {
  return (
    <div>
      <p id={`seg-${etiqueta}`} className="mb-1.5 text-xs text-p-muted">{etiqueta}</p>
      <div role="radiogroup" aria-labelledby={`seg-${etiqueta}`} className="grid grid-flow-col auto-cols-fr gap-1 rounded-xl bg-p-raised p-1">
        {opciones.map((o) => (
          <button
            key={o.valor}
            type="button"
            role="radio"
            aria-checked={valor === o.valor}
            onClick={() => onChange(o.valor)}
            className={`h-8 rounded-lg px-2 text-xs font-medium transition-colors ${
              valor === o.valor ? "bg-p-surface text-p-text shadow-sm" : "text-p-muted hover:text-p-text"
            }`}
          >
            {o.etiqueta}
          </button>
        ))}
      </div>
    </div>
  );
}

const BLOQUES_MOVIL = [
  { id: "indicadores", etiqueta: "Indicadores (ventas del mes, pedidos…)" },
  { id: "grafica", etiqueta: "Gráfica de ventas" },
  { id: "estados", etiqueta: "Estado de los pedidos" },
  { id: "pedidos", etiqueta: "Pedidos recientes" },
  { id: "reuniones", etiqueta: "Próximas reuniones" },
];

export default function AjustesMenu({ mostrarTexto }) {
  const { rol, setRol, tema, setTema, movil, setMovilBloque } = usePanel();
  const [abierto, setAbierto] = useState(false);
  const caja = useRef(null);

  useEffect(() => {
    if (!abierto) return;
    const fuera = (e) => caja.current && !caja.current.contains(e.target) && setAbierto(false);
    const tecla = (e) => {
      if (e.key !== "Escape") return;
      e.stopPropagation(); // Escape cierra solo Ajustes; el menú del celular sigue abierto
      setAbierto(false);
    };
    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", tecla);
    };
  }, [abierto]);

  return (
    <div ref={caja} className="relative">
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-expanded={abierto}
        aria-haspopup="dialog"
        aria-label="Ajustes"
        title={mostrarTexto ? undefined : "Ajustes"}
        className={`flex h-11 items-center gap-3 rounded-xl text-sm font-medium text-p-muted transition-colors hover:bg-p-raised hover:text-p-text ${
          mostrarTexto ? "w-full px-3.5" : "mx-auto w-11 justify-center"
        }`}
      >
        <LuSettings2 className="size-5 shrink-0" aria-hidden />
        {mostrarTexto && <span>Ajustes</span>}
      </button>

      {abierto && (
        <div
          role="dialog"
          aria-label="Ajustes del panel"
          className="absolute bottom-0 left-full z-50 ml-3 max-h-[85dvh] w-72 space-y-4 overflow-y-auto rounded-2xl border border-p-line bg-p-surface p-4 shadow-xl max-md:bottom-full max-md:left-0 max-md:mb-2 max-md:ml-0"
        >
          <Segmentado
            etiqueta="Tema"
            valor={tema}
            onChange={setTema}
            opciones={[
              { valor: "claro", etiqueta: "Claro" },
              { valor: "oscuro", etiqueta: "Oscuro" },
              { valor: "sistema", etiqueta: "Sistema" },
            ]}
          />
          <div>
            <Segmentado
              etiqueta="Ver como"
              valor={rol}
              onChange={setRol}
              opciones={[
                { valor: "tienda", etiqueta: "Tienda" },
                { valor: "admin", etiqueta: "Admin" },
              ]}
            />
            <p className="mt-1.5 text-xs text-p-muted">Temporal: cuando conectemos el login, el rol saldrá de la cuenta.</p>
          </div>
          <fieldset>
            <legend className="mb-1.5 text-xs text-p-muted">Qué ver en el celular (pantalla Resumen)</legend>
            <div className="space-y-0.5">
              {BLOQUES_MOVIL.map((b) => (
                <label key={b.id} className="flex min-h-9 cursor-pointer items-center gap-2.5 rounded-lg px-1 text-sm hover:bg-p-raised">
                  <input
                    type="checkbox"
                    checked={movil[b.id]}
                    onChange={(e) => setMovilBloque(b.id, e.target.checked)}
                    className="size-4 shrink-0 accent-p-solid"
                  />
                  {b.etiqueta}
                </label>
              ))}
            </div>
            <p className="mt-1.5 text-xs text-p-muted">«Nueva venta» siempre se ve.</p>
          </fieldset>
          <Link
            href="/login"
            className="flex h-9 items-center gap-2 rounded-lg px-2 text-sm text-p-muted hover:bg-p-raised hover:text-p-text"
          >
            <LuLogOut className="size-4" aria-hidden />
            Cerrar sesión
          </Link>
        </div>
      )}
    </div>
  );
}
