"use client";

import { LuMenu } from "react-icons/lu";
import { PanelProvider, usePanel } from "./PanelProvider";
import Sidebar from "./Sidebar";
import Logo from "./Logo";

function Marco({ children }) {
  const { movilAbierto, setMovilAbierto } = usePanel();

  return (
    <div className="panel-root flex h-dvh bg-p-bg text-p-text">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {movilAbierto && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMovilAbierto(false)}
            className="absolute inset-0 bg-black/50"
          />
          <div className="relative h-full w-fit">
            <Sidebar movil />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-p-line bg-p-surface px-3 md:hidden">
          <button
            type="button"
            onClick={() => setMovilAbierto(true)}
            aria-label="Abrir menú"
            className="grid size-11 place-items-center rounded-xl text-p-muted hover:bg-p-raised hover:text-p-text"
          >
            <LuMenu className="size-5" aria-hidden />
          </button>
          <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Logo className="size-8" />
            Finder
          </span>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-[1320px] px-4 py-6 md:px-8 md:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default function Shell({ children }) {
  return (
    <PanelProvider>
      <Marco>{children}</Marco>
    </PanelProvider>
  );
}
