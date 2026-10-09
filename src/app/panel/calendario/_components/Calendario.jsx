"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LuCalendarRange, LuChevronLeft, LuChevronRight, LuPlus } from "react-icons/lu";
import { TIPOS, cargar, guardar, nuevoId, porDia as agruparPorDia } from "../_lib/eventos";
import {
  aClave, aMinutos, deClave, deMinutos, diaDe, horaDe, inicioSemana, sumarDias, sumarMeses, tituloVista,
} from "../_lib/fechas";
import MiniMes from "./MiniMes";
import VistaTiempo from "./VistaTiempo";
import VistaMes from "./VistaMes";
import EventoDetalle from "./EventoDetalle";
import EventoForm from "./EventoForm";

const VISTAS = [
  { valor: "dia", etiqueta: "Día" },
  { valor: "semana", etiqueta: "Semana" },
  { valor: "mes", etiqueta: "Mes" },
];

const BOTON_ICONO = "grid size-10 place-items-center rounded-xl text-p-muted transition-colors hover:bg-p-raised hover:text-p-text";

export default function Calendario() {
  const [listo, setListo] = useState(false);
  const [ahora, setAhora] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [vista, setVista] = useState("semana");
  const [eventos, setEventos] = useState([]);
  const [ocultos, setOcultos] = useState([]); // tipos de evento ocultos
  const [detalle, setDetalle] = useState(null); // { ids: [...], rango }
  const [form, setForm] = useState(null); // { modo: "nuevo" | "editar", base }
  const [miniAbierto, setMiniAbierto] = useState(false);

  // Todo lo que depende de la fecha y del navegador se calcula después de montar,
  // para que el servidor y el navegador muestren lo mismo al cargar.
  useEffect(() => {
    const n = new Date();
    setAhora(n);
    setFecha(n);
    setVista(window.innerWidth < 768 ? "dia" : "semana");
    setEventos(cargar(n));
    setListo(true);
  }, []);

  useEffect(() => {
    if (listo) guardar(eventos);
  }, [eventos, listo]);

  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const visibles = useMemo(() => eventos.filter((e) => !ocultos.includes(e.tipo)), [eventos, ocultos]);
  const porDiaVisibles = useMemo(() => agruparPorDia(visibles), [visibles]);
  const porDiaTodos = useMemo(() => agruparPorDia(eventos), [eventos]);

  const cerrarDetalle = useCallback(() => setDetalle(null), []);
  const cerrarForm = useCallback(() => setForm(null), []);

  if (!listo) {
    return <div aria-busy="true" className="h-[calc(100dvh-7rem)] min-h-[560px] animate-pulse rounded-2xl bg-p-surface md:h-[calc(100dvh-4rem)]" />;
  }

  const mover = (paso) =>
    setFecha((f) => (vista === "mes" ? sumarMeses(f, paso) : sumarDias(f, paso * (vista === "semana" ? 7 : 1))));

  const irADia = (d) => {
    setFecha(d);
    setVista("dia");
  };

  const abrirNuevo = (clave, inicio = "09:00") => {
    const fin = deMinutos(Math.min(aMinutos(inicio) + 60, 23 * 60 + 59));
    setDetalle(null);
    setForm({ modo: "nuevo", base: { titulo: "", fecha: clave, inicio, fin, tipo: "mentoria", meet: "", descripcion: "" } });
  };

  const abrirEditar = (ev) => {
    setDetalle(null);
    setForm({
      modo: "editar",
      base: {
        id: ev.id,
        titulo: ev.titulo,
        fecha: diaDe(ev.inicio),
        inicio: horaDe(ev.inicio),
        fin: horaDe(ev.fin),
        tipo: ev.tipo,
        meet: ev.meet ?? "",
        descripcion: ev.descripcion ?? "",
      },
    });
  };

  const guardarEvento = (d) => {
    const ev = {
      id: d.id ?? nuevoId(),
      titulo: d.titulo,
      inicio: `${d.fecha}T${d.inicio}`,
      fin: `${d.fecha}T${d.fin}`,
      tipo: d.tipo,
      meet: d.meet,
      descripcion: d.descripcion,
    };
    setEventos((lista) => (d.id ? lista.map((e) => (e.id === d.id ? ev : e)) : [...lista, ev]));
    setOcultos((o) => o.filter((t) => t !== d.tipo)); // que el evento recién guardado no quede oculto
    setFecha(deClave(d.fecha));
    setForm(null);
  };

  const eliminarEvento = (id) => {
    setEventos((lista) => lista.filter((e) => e.id !== id));
    setDetalle(null);
  };

  const dias = vista === "semana" ? Array.from({ length: 7 }, (_, i) => sumarDias(inicioSemana(fecha), i)) : [fecha];
  const eventosDetalle = detalle ? detalle.ids.map((id) => eventos.find((e) => e.id === id)).filter(Boolean) : [];

  return (
    <div className="flex h-[calc(100dvh-7rem)] min-h-[560px] flex-col gap-4 md:h-[calc(100dvh-4rem)]">
      <header className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <h1 className="mr-2 text-xl font-semibold tracking-tight sm:text-2xl" aria-live="polite">{tituloVista(vista, fecha)}</h1>

        <div className="flex items-center gap-1">
          <button type="button" onClick={() => setFecha(new Date())} className="h-10 rounded-xl border border-p-line bg-p-surface px-4 text-sm font-medium hover:bg-p-raised">
            Hoy
          </button>
          <button type="button" onClick={() => mover(-1)} aria-label={`${vista === "mes" ? "Mes" : vista === "semana" ? "Semana" : "Día"} anterior`} className={BOTON_ICONO}>
            <LuChevronLeft className="size-5" aria-hidden />
          </button>
          <button type="button" onClick={() => mover(1)} aria-label={`${vista === "mes" ? "Mes" : vista === "semana" ? "Semana" : "Día"} siguiente`} className={BOTON_ICONO}>
            <LuChevronRight className="size-5" aria-hidden />
          </button>
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setMiniAbierto((a) => !a)}
            aria-expanded={miniAbierto}
            className="grid size-10 place-items-center rounded-xl border border-p-line bg-p-surface hover:bg-p-raised md:hidden"
          >
            <LuCalendarRange className="size-4" aria-hidden />
            <span className="sr-only">Elegir fecha</span>
          </button>

          <div role="radiogroup" aria-label="Vista del calendario" className="grid grid-flow-col auto-cols-fr gap-1 rounded-xl bg-p-raised p-1">
            {VISTAS.map((v) => (
              <button
                key={v.valor}
                type="button"
                role="radio"
                aria-checked={vista === v.valor}
                onClick={() => setVista(v.valor)}
                className={`h-8 rounded-lg px-3 text-sm font-medium transition-colors sm:px-3.5 ${
                  vista === v.valor ? "bg-p-solid text-p-on-solid" : "text-p-muted hover:text-p-text"
                }`}
              >
                {v.etiqueta}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => abrirNuevo(aClave(fecha))}
            className="flex size-10 items-center justify-center gap-2 rounded-xl bg-p-solid text-sm font-semibold text-p-on-solid hover:opacity-90 sm:w-auto sm:px-4"
          >
            <LuPlus className="size-4" aria-hidden />
            <span className="sr-only sm:not-sr-only">Nuevo evento</span>
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col gap-4 md:flex-row">
        <aside className={`${miniAbierto ? "block" : "hidden"} max-h-[22rem] shrink-0 space-y-4 overflow-y-auto md:block md:max-h-none md:w-64`}>
          <MiniMes
            fecha={fecha}
            ahora={ahora}
            porDia={porDiaTodos}
            onElegir={(d) => {
              setFecha(d);
              setMiniAbierto(false);
            }}
          />

          <fieldset className="rounded-2xl border border-p-line bg-p-surface p-4">
            <legend className="sr-only">Tipos de evento visibles</legend>
            <p className="mb-2 text-sm font-semibold" aria-hidden>Tipo de evento</p>
            <div className="space-y-1">
              {Object.entries(TIPOS).map(([clave, t]) => (
                <label key={clave} className="flex h-9 cursor-pointer items-center gap-2.5 rounded-lg px-1 text-sm hover:bg-p-raised">
                  <input
                    type="checkbox"
                    checked={!ocultos.includes(clave)}
                    onChange={() => setOcultos((o) => (o.includes(clave) ? o.filter((x) => x !== clave) : [...o, clave]))}
                    className="size-4 accent-p-solid"
                  />
                  <span className={`size-2.5 rounded-full ${t.punto}`} aria-hidden />
                  {t.etiqueta}
                </label>
              ))}
            </div>
          </fieldset>

          <p className="px-1 text-xs text-p-muted">
            Por ahora los eventos se guardan solo en este navegador. Se pasan a la base de datos en la fase 4.
          </p>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          {vista === "mes" ? (
            <VistaMes
              fecha={fecha}
              porDia={porDiaVisibles}
              ahora={ahora}
              onNuevo={abrirNuevo}
              onEvento={(ev) => setDetalle({ ids: [ev.id] })}
              onIrADia={irADia}
            />
          ) : (
            <VistaTiempo
              dias={dias}
              porDia={porDiaVisibles}
              ahora={ahora}
              onNuevo={abrirNuevo}
              onEvento={(ev) => setDetalle({ ids: [ev.id] })}
              onGrupo={(b) => setDetalle({ ids: b.eventos.map((e) => e.id), rango: `${deMinutos(b.inicio)} – ${deMinutos(b.fin)}` })}
              onIrADia={irADia}
            />
          )}
        </div>
      </div>

      {eventosDetalle.length > 0 && (
        <EventoDetalle
          key={eventosDetalle.map((e) => e.id).join("+")}
          eventos={eventosDetalle}
          rango={detalle.rango}
          onCerrar={cerrarDetalle}
          onEditar={abrirEditar}
          onEliminar={eliminarEvento}
          onElegir={(ev) => setDetalle({ ids: [ev.id] })}
        />
      )}

      {form && <EventoForm modo={form.modo} base={form.base} onGuardar={guardarEvento} onCancelar={cerrarForm} />}
    </div>
  );
}
