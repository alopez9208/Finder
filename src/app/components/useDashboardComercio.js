'use client'

import { useState, useEffect, createContext, useContext } from 'react';
import useAuthRol from '@/app/hooks/useAuthRol'
import { useRelacionSeleccionada } from "@/app/hooks/useRelacionSeleccionada";
import { formatearNumero } from '@/app/utils/numberUtils';

const useDashboardComercio = () => {
    const [pedidos, setPedidos] = useState([]);
    const [valor_total, setValor_total] = useState("");
    const [valor_flete, setValor_flete] = useState("");
    const [suma_total, setSuma_total] = useState(0);
    const [suma_flete, setSuma_flete] = useState(0);
    const relacionSeleccionada = useRelacionSeleccionada();
    const [costoTotal, setCostoTotal] = useState(0);
    const [campanias, setCampanias] = useState([]);
    const [sumaPresupuestoGastado, setSumaPresupuestoGastado] = useState(0);
    const [cantidadPedidos, setCantidadPedidos] = useState(0);
    const [contador_servi, setContadorServi] = useState(0);
    const [contador_inter, setContadorInter] = useState(0);
    const [contador_envia, setContadorEnvia] = useState(0);
    const [contador_swayp, setContadorSwayp] = useState(0);
    const [fecha_inicio, setFecha_inicio] = useState("");
    const [fecha_fin, setFecha_fin] = useState("");

    const {
        nombre,
        loading
    } = useAuthRol({ rolPermitido: 2, estadoPermitido: 1 });

    const fetchPedidos = async (fecha_inicio = null, fecha_fin = null) => {
        try {
            const comercioId = relacionSeleccionada.pkidRelacion.toString();
            let url = `/api/dashboard-comercio/pedidos`;
    
            if (fecha_inicio && fecha_fin) {
                url += `?fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`;
            }
    
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-comercio-id": comercioId,
                },
            });
    
            if (!res.ok) throw new Error("Error al obtener pedidos");
    
            const data = await res.json();
    
            if (data.success && Array.isArray(data.pedidos)) {
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
    
                return data.pedidos;
            } else {
                console.error("No hay pedidos o data.pedidos no es un array:", data.pedidos);
                return [];
            }
        } catch (error) {
            console.error("Error al obtener pedidos:", error);
            return [];
        }
    };
    

    const fetchCostoTotal = async (pedidoIds) => {
        try {
            const comercioId = relacionSeleccionada.pkidRelacion;
            
            if (pedidoIds && pedidoIds.length === 0) {
                setCostoTotal(0);
                return;
            }
    
            let url = `/api/dashboard-comercio/stats?comercioId=${comercioId}`;
            if (pedidoIds && pedidoIds.length > 0) {
                url += `&pedidoIds=${pedidoIds.join(',')}`;
            }
    
            const res = await fetch(url);
            if (!res.ok) throw new Error('Error al obtener costo total');
    
            const data = await res.json();
            if (data.success && typeof data.costoTotal === 'number') {
                setCostoTotal(data.costoTotal);
            } else {
                setCostoTotal(0);
            }
        } catch (error) {
            console.error('Error al obtener costo total:', error);
            setCostoTotal(0);
        }
    };    

    const fetchCampanias = async () => {
        const comercioId = relacionSeleccionada.pkidRelacion.toString();
    
        try {
            const res = await fetch("/api/dashboard-comercio/campanias", {
                headers: {
                    "x-comercio-id": comercioId.toString(),
                },
            });
    
            const data = await res.json();
            console.log("Respuesta del backend:", data);
    
            if (data.success) {
                setCampanias(data.campanias);
    
                // Convertir estados string a Date, solo si tienen valor
                const fechaFiltroInicio = fecha_inicio ? new Date(fecha_inicio) : null;
                const fechaFiltroFin = fecha_fin ? new Date(fecha_fin) : null;
    
                // Si no hay filtro definido, sumar todo (o manejar como prefieras)
                if (!fechaFiltroInicio || !fechaFiltroFin) {
                    const sumaPresupuestoGastado = data.campanias.reduce((acc, campania) => {
                        const valor = typeof campania.presupuesto_gastado === 'number'
                            ? campania.presupuesto_gastado
                            : Number(campania.presupuesto_gastado) || 0;
                        return acc + valor;
                    }, 0);
    
                    setSumaPresupuestoGastado(sumaPresupuestoGastado);
                    return;
                }
    
                // Cálculo proporcional según filtro
                const sumaPresupuestoEnRango = data.campanias.reduce((acc, campania) => {
                    const presupuesto = typeof campania.presupuesto_gastado === 'number'
                        ? campania.presupuesto_gastado
                        : Number(campania.presupuesto_gastado) || 0;
    
                    const campaniaInicio = new Date(campania.fecha_inicio);
                    const campaniaFin = new Date(campania.fecha_fin);
    
                    // Días campaña
                    const diasCampania = (campaniaFin - campaniaInicio) / (1000 * 60 * 60 * 24) +1 ;
                    const gastoDiario = presupuesto / diasCampania;
    
                    // Intersección con filtro
                    const fechaInicioReal = campaniaInicio > fechaFiltroInicio ? campaniaInicio : fechaFiltroInicio;
                    const fechaFinReal = campaniaFin < fechaFiltroFin ? campaniaFin : fechaFiltroFin;
    
                    if (fechaInicioReal > fechaFinReal) return acc;
    
                    const diasEnRango = (fechaFinReal - fechaInicioReal) / (1000 * 60 * 60 * 24) + 1;
    
                    return acc + gastoDiario * diasEnRango;
    
                }, 0);
    
                setSumaPresupuestoGastado(sumaPresupuestoEnRango);
    
            } else {
                console.error("No se encontraron campanias:", data.error);
            }
        } catch (error) {
            console.error("Error al obtener campanias:", error);
        }
    };
    

    useEffect(() => {
        if (!loading && relacionSeleccionada) {
            fetchPedidos();
            fetchCostoTotal();
            fetchCampanias();
        }
    }, [loading, relacionSeleccionada]);

    return {
        nombre,
        pedidos,
        valor_total,
        valor_flete,
        fetchPedidos,
        loading,
        suma_total,
        suma_flete,
        formatearNumero,
        relacionSeleccionada,
        costoTotal,
        campanias,
        sumaPresupuestoGastado,
        cantidadPedidos,
        contador_servi,
        contador_inter,
        contador_envia,
        contador_swayp,
        fecha_inicio,
        fecha_fin,
        setFecha_inicio,
        setFecha_fin,
        fetchCostoTotal,
        fetchCampanias
    };
};

export default useDashboardComercio;