import Link from "next/link";
import { LuPlus, LuCalendarDays, LuVideo } from "react-icons/lu";
import Saludo from "./_components/Saludo";
import BloqueMovil from "./_components/BloqueMovil";
import {
  cop,
  indicadores,
  ventasSemana,
  estadosPedidos,
  pedidosRecientes,
  reuniones,
  ESTADO_PEDIDO,
} from "./_mock/datos";

const TONO = { ok: "text-p-ok", warn: "text-p-warn", muted: "text-p-muted" };

function Tarjeta({ titulo, accion, children, className = "" }) {
  return (
    <section className={`h-full rounded-2xl border border-p-line bg-p-surface ${className}`}>
      <div className="flex items-center justify-between px-5 pt-5">
        <h2 className="text-base font-semibold">{titulo}</h2>
        {accion}
      </div>
      {children}
    </section>
  );
}

function VentasSemana() {
  const maximo = 800000;
  const guias = [800000, 400000, 0];
  return (
    <Tarjeta titulo="Ventas de los últimos 7 días">
      <div className="px-5 pb-5 pt-6">
        <div className="flex gap-3">
          <div className="flex h-52 flex-col justify-between pb-6 text-right text-xs text-p-muted num" aria-hidden>
            {guias.map((g) => (
              <span key={g}>{g === 0 ? "$0" : `$${g / 1000} mil`}</span>
            ))}
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-x-0 top-2 flex h-[calc(13rem-2rem)] flex-col justify-between" aria-hidden>
              {guias.map((g) => (
                <div key={g} className="border-t border-dashed border-p-line" />
              ))}
            </div>
            <ul className="relative flex h-52 items-end justify-between gap-2 sm:gap-4">
              {ventasSemana.map((d, i) => {
                const esHoy = i === ventasSemana.length - 1;
                return (
                  <li key={d.dia} className="flex h-full flex-1 flex-col items-center justify-end">
                    <span className="mb-1 hidden text-xs text-p-muted num sm:block">{Math.round(d.valor / 1000)} mil</span>
                    <div
                      title={`${d.dia}: ${cop(d.valor)}`}
                      className={`w-full max-w-14 rounded-t-lg ${esHoy ? "bg-p-solid" : "bg-p-solid/35"}`}
                      style={{ height: `${(d.valor / maximo) * (100 - 14)}%` }}
                    />
                    <span className={`mt-2 h-4 text-xs ${esHoy ? "font-semibold text-p-text" : "text-p-muted"}`}>{d.dia}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Tarjeta>
  );
}

function EstadoPedidos() {
  const total = estadosPedidos.reduce((s, e) => s + e.cantidad, 0);
  const color = { entregado: "bg-p-ok", transito: "bg-p-info", devolucion: "bg-p-bad", pendiente: "bg-p-warn" };
  return (
    <Tarjeta titulo="Estado de los pedidos">
      <div className="space-y-5 px-5 pb-5 pt-5">
        <div className="flex h-3 overflow-hidden rounded-full bg-p-raised" role="img" aria-label={`${total} pedidos este mes`}>
          {estadosPedidos.map((e) => (
            <div key={e.clave} className={color[e.clave]} style={{ width: `${(e.cantidad / total) * 100}%` }} />
          ))}
        </div>
        <ul className="space-y-3">
          {estadosPedidos.map((e) => (
            <li key={e.clave} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5">
                <span className={`size-2.5 rounded-full ${color[e.clave]}`} aria-hidden />
                {e.etiqueta}
              </span>
              <span className="font-medium num">{e.cantidad}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-p-line pt-4 text-sm text-p-muted">
          {total} pedidos en octubre. Revisa las devoluciones para ver qué producto fallan más.
        </p>
      </div>
    </Tarjeta>
  );
}

function PedidosRecientes() {
  return (
    <Tarjeta
      titulo="Pedidos recientes"
      accion={
        <Link href="/panel/ventas" className="rounded-lg px-2 py-1 text-sm font-medium text-p-accent hover:bg-p-accent-soft">
          Ver todas las ventas
        </Link>
      }
    >
      <ul className="divide-y divide-p-line px-5 pb-2 pt-2 sm:hidden">
        {pedidosRecientes.map((p) => {
          const e = ESTADO_PEDIDO[p.estado];
          return (
            <li key={p.id} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{p.cliente}</p>
                <p className="truncate text-xs text-p-muted">{p.producto}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-sm font-medium num">{cop(p.total)}</p>
                <p className={`mt-0.5 inline-flex items-center gap-1.5 text-xs ${e.clase}`}>
                  <span className={`size-1.5 rounded-full ${e.punto}`} aria-hidden />
                  {e.texto}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="hidden overflow-x-auto px-2 pb-3 pt-3 sm:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs text-p-muted">
              <th scope="col" className="px-3 py-2 font-medium">Cliente</th>
              <th scope="col" className="hidden px-3 py-2 font-medium md:table-cell">Producto</th>
              <th scope="col" className="hidden px-3 py-2 font-medium sm:table-cell">Ciudad</th>
              <th scope="col" className="px-3 py-2 font-medium">Estado</th>
              <th scope="col" className="px-3 py-2 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {pedidosRecientes.map((p) => {
              const e = ESTADO_PEDIDO[p.estado];
              return (
                <tr key={p.id} className="border-t border-p-line">
                  <td className="px-3 py-3 font-medium">{p.cliente}</td>
                  <td className="hidden px-3 py-3 text-p-muted md:table-cell">{p.producto}</td>
                  <td className="hidden px-3 py-3 text-p-muted sm:table-cell">{p.ciudad}</td>
                  <td className="px-3 py-3">
                    <span className={`inline-flex items-center gap-2 whitespace-nowrap ${e.clase}`}>
                      <span className={`size-2 rounded-full ${e.punto}`} aria-hidden />
                      {e.texto}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right font-medium num">{cop(p.total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Tarjeta>
  );
}

function ProximasReuniones() {
  return (
    <Tarjeta
      titulo="Próximas reuniones"
      accion={
        <Link href="/panel/calendario" aria-label="Abrir calendario" className="grid size-9 place-items-center rounded-lg text-p-muted hover:bg-p-raised hover:text-p-text">
          <LuCalendarDays className="size-5" aria-hidden />
        </Link>
      }
    >
      <ul className="space-y-3 px-5 pb-5 pt-4">
        {reuniones.map((r) => (
          <li key={r.id} className="rounded-xl border border-p-accent/30 bg-p-accent-soft px-4 py-3">
            <p className="text-xs font-medium text-p-accent num">
              {r.cuando} · {r.hora}
            </p>
            <p className="mt-0.5 text-sm font-semibold">{r.titulo}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-p-muted">
              <LuVideo className="size-3.5" aria-hidden />
              {r.detalle}
            </p>
          </li>
        ))}
      </ul>
    </Tarjeta>
  );
}

export default function PanelResumen() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <Saludo />
        <Link
          href="/panel/ventas"
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-p-solid px-5 text-sm font-semibold text-p-on-solid transition-opacity hover:opacity-90"
        >
          <LuPlus className="size-4" aria-hidden />
          Nueva venta
        </Link>
      </div>

      <BloqueMovil id="indicadores">
        <dl className="grid grid-cols-2 divide-x divide-y divide-p-line overflow-hidden rounded-2xl border border-p-line bg-p-surface lg:grid-cols-4 lg:divide-y-0">
          {indicadores.map((k) => (
            <div key={k.etiqueta} className="px-5 py-5">
              <dt className="text-sm text-p-muted">{k.etiqueta}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-tight num">{k.valor}</dd>
              <dd className={`mt-1 text-xs ${TONO[k.tono]}`}>{k.cambio}</dd>
            </div>
          ))}
        </dl>
      </BloqueMovil>

      <div className="grid gap-6 lg:grid-cols-3">
        <BloqueMovil id="grafica" className="lg:col-span-2"><VentasSemana /></BloqueMovil>
        <BloqueMovil id="estados"><EstadoPedidos /></BloqueMovil>
        <BloqueMovil id="pedidos" className="lg:col-span-2"><PedidosRecientes /></BloqueMovil>
        <BloqueMovil id="reuniones"><ProximasReuniones /></BloqueMovil>
      </div>

      <p className="text-xs text-p-muted">Los datos de esta pantalla son de ejemplo hasta conectar la base de datos.</p>
    </div>
  );
}
