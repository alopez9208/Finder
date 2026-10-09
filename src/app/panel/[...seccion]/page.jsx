import Link from "next/link";
import { notFound } from "next/navigation";
import { LuHammer } from "react-icons/lu";
import { buscarItem } from "../_components/menu";

export async function generateMetadata({ params }) {
  const { seccion } = await params;
  const item = buscarItem(`/panel/${seccion.join("/")}`);
  return { title: item ? `${item.label} · Finder` : "Panel · Finder" };
}

// Secciones del menú que todavía no se migran al panel nuevo.
export default async function SeccionPendiente({ params }) {
  const { seccion } = await params;
  const item = buscarItem(`/panel/${seccion.join("/")}`);
  if (!item) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{item.label}</h1>
      <div className="flex max-w-xl flex-col items-start gap-4 rounded-2xl border border-dashed border-p-line bg-p-surface p-8">
        <span className="grid size-12 place-items-center rounded-xl bg-p-accent-soft text-p-accent">
          <LuHammer className="size-6" aria-hidden />
        </span>
        <div className="space-y-1">
          <h2 className="text-base font-semibold">Esta sección todavía no está en el panel nuevo</h2>
          <p className="text-sm text-p-muted">
            {item.fase ?? "Mientras tanto, sigue funcionando en la versión anterior con todos tus datos."}
          </p>
        </div>
        {item.viejo && (
          <Link
            href={item.viejo}
            className="inline-flex h-11 items-center rounded-xl bg-p-solid px-5 text-sm font-semibold text-p-on-solid hover:opacity-90"
          >
            Abrir en la versión anterior
          </Link>
        )}
      </div>
    </div>
  );
}
