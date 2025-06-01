'use client'

import { useState, useEffect, createContext, useContext } from 'react';
import useAuthRol from '@/app/hooks/useAuthRol'
import { useComercio } from '@/context/ComercioContext';

const useDashboardComercio = () => {
    const [pedidos, setPedidos] = useState([]);
    const [valor_total, setValor_total] = useState("");
    const [valor_flete, setValor_flete] = useState("");
    const [suma_total, setSuma_total] = useState(0);
    const [suma_flete, setSuma_flete] = useState(0);
    const { selectedComercio } = useComercio();
    const [costoTotal, setCostoTotal] = useState(0);
    const [campanias, setCampanias] = useState([]);
    const [sumaPresupuestoGastado, setSumaPresupuestoGastado] = useState(0);
    const [cantidadPedidos, setCantidadPedidos] = useState(0);
    const [contador_servi, setContadorServi] = useState(0);
    const [contador_inter, setContadorInter] = useState(0);
    const [contador_envia, setContadorEnvia] = useState(0);
    const [contador_swayp, setContadorSwayp] = useState(0);

    const {
        nombre,
        loading
    } = useAuthRol({ rolPermitido: 2, estadoPermitido: 1 });

    const getComercioSeleccionado = () => {
        const comercioSeleccionado = localStorage.getItem("comercioSeleccionado");
        return comercioSeleccionado;
    };

    function formatearNumero(valor) {
        if (typeof valor !== 'number') valor = Number(valor);

        const formateado = valor.toLocaleString('de-DE');

        if (valor < 1000000) {
            return formateado;
        } else {
            return formateado.replace('.', "'");
        }
    }

    const fetchPedidos = async () => {
        try {
            const comercioId = getComercioSeleccionado();
            const res = await fetch("/api/dashboard-comercio/pedidos", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-comercio-id": comercioId,
                },
            });

            if (!res.ok) throw new Error("Error al obtener pedidos");

            const data = await res.json();
            if (data.success) {
                setPedidos(data.pedidos);
                setCantidadPedidos(data.pedidos.length);

                let servi = 0;
                let inter = 0;
                let envia = 0;
                let swayp = 0;

                data.pedidos.forEach(pedido => {
                    const id = Number(pedido.fkid_tbl_transportadoras);
                    switch (id) {
                        case 1:
                          servi++;
                          break;
                        case 2:
                          inter++;
                          break;
                        case 3:
                          envia++;
                          break;
                        case 4:
                          swayp++;
                          break;
                        default:
                          console.warn("Transportadora desconocida o nula:", id);
                          break;
                      }
                    });

                setContadorServi(servi);
                setContadorInter(inter);
                setContadorEnvia(envia);
                setContadorSwayp(swayp);

                console.log("Contadores:");
                console.log("Servi:", servi);
                console.log("Inter:", inter);
                console.log("Envia:", envia);
                console.log("Swayp:", swayp);


                console.log(contador_servi, contador_inter, contador_envia, contador_swayp);

                const parseNumber = (val) => {
                    if (typeof val === 'number') return val;
                    if (typeof val === 'string') {
                        return Number(val.replace(/\D/g, "")) || 0;
                    }
                    return 0;
                };

                const suma_total = data.pedidos.reduce(
                    (acc, pedido) => acc + parseNumber(pedido.valor_total),
                    0
                );

                const suma_flete = data.pedidos.reduce(
                    (acc, pedido) => acc + parseNumber(pedido.valor_flete),
                    0
                );

                setValor_total(suma_total.toString());
                setValor_flete(suma_flete.toString());

            } else {
                console.error("No se encontraron pedidos");
            }
        } catch (error) {
            console.error("Error al obtener pedidos:", error);
        }
    };

    const fetchCostoTotal = async () => {
        try {
            const comercioId = getComercioSeleccionado();

            const res = await fetch(`/api/dashboard-comercio/stats?comercioId=${comercioId}`);
            if (!res.ok) throw new Error("Error al obtener el costo total");

            const data = await res.json();

            if (data.success) {
                setCostoTotal(data.costoTotal);
            } else {
                console.error("No se pudo obtener el costo total");
            }
        } catch (error) {
            console.error("Error al obtener el costo total:", error);
        }
    };

    const fetchCampanias = async () => {
        const comercioId = getComercioSeleccionado();

        if (!comercioId) {
            console.warn("No se encontró 'comercioSeleccionado' en localStorage.");
            return;
        }

        try {
            const res = await fetch("/api/dashboard-comercio/campanias", {
                headers: {
                    "x-comercio-id": comercioId,
                },
            });

            const data = await res.json();
            console.log("Respuesta del backend:", data);

            if (data.success) {
                setCampanias(data.campanias);

                // 🔢 Sumar presupuesto_gastado
                const sumaPresupuestoGastado = data.campanias.reduce((acc, campania) => {
                    const valor = typeof campania.presupuesto_gastado === 'number'
                        ? campania.presupuesto_gastado
                        : Number(campania.presupuesto_gastado) || 0;

                    return acc + valor;
                }, 0);

                console.log("Presupuesto gastado total:", sumaPresupuestoGastado);

                // Aquí puedes setearlo en un estado si lo necesitas
                setSumaPresupuestoGastado(sumaPresupuestoGastado);

            } else {
                console.error("No se encontraron campanias:", data.error);
            }
        } catch (error) {
            console.error("Error al obtener campanias:", error);
        }
    };



    useEffect(() => {
        if (!loading && selectedComercio) {
            fetchPedidos();
            fetchCostoTotal();
            fetchCampanias();
        }
    }, [loading, selectedComercio]);

    return {
        nombre,
        pedidos,
        valor_total,
        valor_flete,
        fetchPedidos,
        getComercioSeleccionado,
        loading,
        suma_total,
        suma_flete,
        formatearNumero,
        selectedComercio,
        costoTotal,
        campanias,
        sumaPresupuestoGastado,
        cantidadPedidos,
        contador_servi,
        contador_inter,
        contador_envia,
        contador_swayp
    };
};

export default useDashboardComercio;
