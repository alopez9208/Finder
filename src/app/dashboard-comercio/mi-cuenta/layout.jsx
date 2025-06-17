'use client'

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MiCuentaLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();   

    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabRefs = {
        miCuenta: useRef(null),
        comercios: useRef(null),
        panelComercios: useRef(null),        
    };

    const updateIndicator = () => {
        let ref = null;
        switch (pathname) {
            case "/dashboard-comercio/mi-cuenta":
                ref = tabRefs.miCuenta;
                break;
            case "/dashboard-comercio/mi-cuenta/mis-comercios":
                ref = tabRefs.comercios;
                break;
            case "/dashboard-comercio/mi-cuenta/panel-comercios":
                ref = tabRefs.panelComercios;
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
                    ref={tabRefs.miCuenta}
                    onClick={() => router.push("/dashboard-comercio/mi-cuenta")}
                    className={`pb-2 transition-colors ${tabClass("/dashboard-comercio/mi-cuenta")}`}
                >
                    Mi Cuenta
                </button>
                <button
                    ref={tabRefs.comercios}
                    onClick={() => router.push("/dashboard-comercio/mi-cuenta/mis-comercios")}
                    className={`pb-2 transition-colors ${tabClass("/dashboard-comercio/mi-cuenta/mis-comercios")}`}
                >
                    Comercios
                </button>
                <button
                    ref={tabRefs.panelComercios}
                    onClick={() => router.push("/dashboard-comercio/mi-cuenta/panel-comercios")}
                    className={`pb-2 transition-colors ${tabClass("/dashboard-comercio/mi-cuenta/panel-comercios")}`}
                >
                    Nómina
                </button>                
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}
