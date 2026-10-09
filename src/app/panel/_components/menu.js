import {
  LuLayoutDashboard,
  LuReceipt,
  LuUsers,
  LuPackage,
  LuMegaphone,
  LuCalendarDays,
  LuBuilding2,
  LuTruck,
  LuMapPin,
  LuShieldCheck,
} from "react-icons/lu";

/**
 * Menú único del panel. `roles` decide quién ve cada ítem.
 * `viejo`: ruta equivalente en la versión anterior, mientras la sección no se migre.
 * `fase`: si la sección todavía no existe en ninguna versión.
 */
export const MENU = [
  {
    grupo: null,
    items: [
      { href: "/panel", label: "Resumen", icon: LuLayoutDashboard, roles: ["tienda", "admin"] },
      { href: "/panel/ventas", label: "Ventas", icon: LuReceipt, roles: ["tienda", "admin"], viejo: "/dashboard-comercio/comercio/pedidos" },
      { href: "/panel/clientes", label: "Clientes", icon: LuUsers, roles: ["tienda", "admin"], viejo: "/dashboard-comercio/comercio/clientes" },
      { href: "/panel/productos", label: "Productos", icon: LuPackage, roles: ["tienda", "admin"], viejo: "/dashboard-comercio/products" },
      { href: "/panel/campanias", label: "Campañas", icon: LuMegaphone, roles: ["tienda", "admin"], viejo: "/dashboard-comercio/comercio/campanias" },
      { href: "/panel/calendario", label: "Calendario", icon: LuCalendarDays, roles: ["tienda", "admin"] },
    ],
  },
  {
    grupo: "Administración",
    items: [
      { href: "/panel/empresas", label: "Empresas", icon: LuBuilding2, roles: ["admin"], viejo: "/dashboard/empresas" },
      { href: "/panel/transportadoras", label: "Transportadoras", icon: LuTruck, roles: ["admin"], viejo: "/dashboard/transporters" },
      { href: "/panel/ubicaciones", label: "Ubicaciones", icon: LuMapPin, roles: ["admin"], viejo: "/dashboard/client-data/departamentos" },
      { href: "/panel/usuarios", label: "Usuarios y roles", icon: LuShieldCheck, roles: ["admin"], viejo: "/dashboard/user-data" },
    ],
  },
];

export const TODOS_LOS_ITEMS = MENU.flatMap((g) => g.items);

export function buscarItem(href) {
  return TODOS_LOS_ITEMS.find((i) => i.href === href);
}
