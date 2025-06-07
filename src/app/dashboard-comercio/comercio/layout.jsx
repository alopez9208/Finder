'use client'

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ComercioLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();   

    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabRefs = {
        dashboard: useRef(null),
        pedidos: useRef(null),
        clientes: useRef(null),
        campanias: useRef(null),
    };

    const updateIndicator = () => {
        let ref = null;
        switch (pathname) {
            case "/dashboard-comercio/comercio":
                ref = tabRefs.dashboard;
                break;
            case "/dashboard-comercio/comercio/pedidos":
                ref = tabRefs.pedidos;
                break;
            case "/dashboard-comercio/comercio/clientes":
                ref = tabRefs.clientes;
                break;
            case "/dashboard-comercio/comercio/campanias":
                ref = tabRefs.campanias;
                break;
        }
        if (ref?.current) {
            const { offsetLeft, offsetWidth } = ref.current;
            setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
        }
    };

    useEffect(() => {
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [pathname]);

    const tabClass = (path) =>
        pathname === path
            ? "text-[#1987DA] font-semibold cursor-pointer"
            : "text-gray-500 cursor-pointer";

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="relative flex space-x-6 border-b border-gray-300 px-8">
                {/* Línea deslizante */}
                <div
                    className="absolute bottom-0 h-[3px] bg-[#1987DA] transition-all duration-300"
                    style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                />

                <button
                    ref={tabRefs.dashboard}
                    onClick={() => router.push("/dashboard-comercio/comercio")}
                    className={`pb-2 transition-colors ${tabClass("/dashboard-comercio/comercio")}`}
                >
                    Dashboard
                </button>
                <button
                    ref={tabRefs.pedidos}
                    onClick={() => router.push("/dashboard-comercio/comercio/pedidos")}
                    className={`pb-2 transition-colors ${tabClass("/dashboard-comercio/comercio/pedidos")}`}
                >
                    Pedidos
                </button>
                <button
                    ref={tabRefs.clientes}
                    onClick={() => router.push("/dashboard-comercio/comercio/clientes")}
                    className={`pb-2 transition-colors ${tabClass("/dashboard-comercio/comercio/clientes")}`}
                >
                    Clientes
                </button>
                <button
                    ref={tabRefs.campanias}
                    onClick={() => router.push("/dashboard-comercio/comercio/campanias")}
                    className={`pb-2 transition-colors ${tabClass("/dashboard-comercio/comercio/campanias")}`}
                >
                    Campañas
                </button>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}
