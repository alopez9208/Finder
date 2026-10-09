"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import { usePanel } from "./PanelProvider";
import { MENU } from "./menu";
import AjustesMenu from "./AjustesMenu";
import Logo from "./Logo";

export default function Sidebar({ movil = false }) {
  const { rol, compacto, setCompacto, setMovilAbierto } = usePanel();
  const pathname = usePathname();
  const mostrarTexto = movil || !compacto;

  const activo = (href) => (href === "/panel" ? pathname === href : pathname === href || pathname.startsWith(href + "/"));

  return (
    <aside
      className={`flex h-full flex-col border-r border-p-line bg-p-surface py-3 transition-[width] duration-200 ${
        movil ? "w-72 px-3" : compacto ? "w-[76px] px-3" : "w-60 px-3"
      }`}
    >
      {!mostrarTexto && (
        <div className="mb-1 flex justify-center">
          <Logo className="size-10" alt="Finder" />
        </div>
      )}
      <div className={`mb-4 flex h-11 items-center ${mostrarTexto ? "justify-between pl-1.5" : "justify-center"}`}>
        {mostrarTexto && (
          <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Logo className="size-9" />
            Finder
          </span>
        )}
        <button
          type="button"
          onClick={() => (movil ? setMovilAbierto(false) : setCompacto(!compacto))}
          aria-label={movil ? "Cerrar menú" : compacto ? "Mostrar nombres del menú" : "Ocultar nombres del menú"}
          className="grid size-11 place-items-center rounded-xl text-p-muted transition-colors hover:bg-p-raised hover:text-p-text"
        >
          {movil ? <LuX className="size-5" aria-hidden /> : <LuMenu className="size-5" aria-hidden />}
        </button>
      </div>

      <nav aria-label="Principal" className="flex-1 space-y-1 overflow-y-auto">
        {MENU.map((g, i) => {
          const items = g.items.filter((it) => it.roles.includes(rol));
          if (items.length === 0) return null;
          return (
            <div key={g.grupo ?? "base"} className={i > 0 ? "pt-3" : ""}>
              {g.grupo &&
                (mostrarTexto ? (
                  <p className="mb-1 px-3.5 text-xs font-medium text-p-muted">{g.grupo}</p>
                ) : (
                  <div className="mx-3 mb-2 border-t border-p-line" role="separator" />
                ))}
              <ul className="space-y-1">
                {items.map((it) => {
                  const Icono = it.icon;
                  const on = activo(it.href);
                  return (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        onClick={() => setMovilAbierto(false)}
                        aria-current={on ? "page" : undefined}
                        aria-label={mostrarTexto ? undefined : it.label}
                        title={mostrarTexto ? undefined : it.label}
                        className={`flex h-11 items-center gap-3 rounded-xl text-sm font-medium transition-colors ${
                          mostrarTexto ? "px-3.5" : "mx-auto w-11 justify-center"
                        } ${on ? "bg-p-accent-soft text-p-accent" : "text-p-muted hover:bg-p-raised hover:text-p-text"}`}
                      >
                        <Icono className="size-5 shrink-0" aria-hidden />
                        {mostrarTexto && <span>{it.label}</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      <div className="mt-2 border-t border-p-line pt-3">
        <AjustesMenu mostrarTexto={mostrarTexto} />
      </div>
    </aside>
  );
}
