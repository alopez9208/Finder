# Finder – contexto del proyecto

> Este archivo es la fuente de verdad para cualquier asistente (Claude u otro) o persona que
> trabaje en el proyecto. Léelo antes de tocar código y actualízalo cuando se tome una decisión.

## Qué es

Sistema de registro de ventas de dropshipping y agenda de mentorías, hecho **para la mamá del
desarrollador**, que vende por dropshipping (plataforma principal: **Mastershop**).
Solo se registran ventas propias (a conocidos / desde sus landing pages), no es un clon de Mastershop.

Autor: estudiante de Ingeniería Informática (8.º semestre). Primer proyecto grande.
Idioma de la interfaz y del código de negocio: **español**.

## Stack (se mantiene)

- Next.js 15 (App Router, JavaScript), React 19, Tailwind CSS 4
- Prisma 6 + PostgreSQL (`prisma/schema.prisma`)
- `react-icons` para íconos, `xlsx` para importar pedidos desde Excel
- El cliente de Prisma se genera en `src/generated/prisma` y **no se sube a git**
  (`npx prisma generate` lo crea).

## Decisiones tomadas

| Tema | Decisión |
|---|---|
| ORM | Se queda Prisma. No migrar. |
| Base de datos | Seguir con PostgreSQL, pero **en la nube** (Neon o Supabase, plan gratis) para usarla desde varios PC y el celular. Se hace en la fase 4. |
| Resumen en celular | En pantallas pequeñas se puede elegir qué bloques ver (Ajustes → "Qué ver en el celular"); la gráfica de ventas empieza apagada. «Nueva venta» siempre se ve. La preferencia se guarda en el navegador (`panel-movil`). |
| Saludo | Usa el primer nombre del usuario guardado por el login en `localStorage.usuario.nombre`. Sin sesión, el saludo va sin nombre. |
| Logo | `public/logo.png` (PNG transparente 1024×1024) con `next/image`; no hace falta convertirlo a WebP, Next lo optimiza solo. |
| Celular | Web responsive instalable como **PWA**, desplegada en Vercel. Sin app nativa. |
| Dashboards | **Una sola app y un solo layout.** El rol decide qué ítems de menú se ven (tienda vs. admin). Reemplaza a `/dashboard` y `/dashboard-comercio` de forma gradual. |
| Diseño | Tema **claro y oscuro con morado**, inspirado en un calendario/dashboard de referencia: riel de íconos a la izquierda, tarjetas redondeadas. |
| Calendario | Para un solo usuario por ahora. Vistas Día / Semana / Mes, selector de fecha, ver/editar/eliminar, varios eventos agrupados en uno. Hecho a mano, sin librería (no se pudo instalar FullCalendar en el entorno de trabajo y así se controla el diseño). "Recursos" queda para después. |
| Desarrollo local | Rediseño con **datos de ejemplo** (`src/app/panel/_mock`), sin necesitar base de datos para abrir la app. |
| Mastershop | No se sabe si tiene API pública (verificar). Idea: el formulario de las landing pages, además de enviar a Mastershop, envía a un endpoint propio que guarda la venta. Los cambios de estado posteriores (guía, entregado, devuelto) no llegarían solos. |

## Plan por fases

1. **Preparar repositorio**: rama de trabajo, `.gitignore`, `.env.example`, este archivo. ✅
2. **Shell del dashboard** en `/panel` con datos de ejemplo, tema claro/oscuro, menú por rol. ✅ (verificada solo con render en servidor; falta abrirla con `npm run dev`)
3. **Calendario** para un usuario en `/panel/calendario`: Día/Semana/Mes, mini calendario, crear/editar/eliminar, eventos que se pisan agrupados como "N reuniones". Los eventos se guardan en `localStorage` del navegador hasta la fase 4. ✅ (probado con 36 comprobaciones automáticas en Chromium; el aspecto con Tailwind aún no se ha visto)
4. **Base de datos en la nube** (Neon), tabla de eventos, despliegue en Vercel.
5. **Integración de landings**: endpoint para registrar ventas automáticamente.
6. **Limpieza de seguridad** (ver abajo).

## Estructura del código

```
src/app/
  panel/                  NUEVO shell (fase 2). Rutas /panel/...
    layout.jsx            riel de íconos, drawer móvil, tema, rol
    page.jsx              resumen con datos de ejemplo
    calendario/           fase 3: page.jsx, _components/ (Calendario, VistaTiempo, VistaMes, MiniMes, EventoDetalle, EventoForm), _lib/ (fechas.js, eventos.js)
    [...seccion]/         placeholder de secciones que aún no se migran
    _components/          Shell, Sidebar, ThemeToggle, tarjetas
    _mock/datos.js        datos de ejemplo
    panel.css             tokens de tema (variables CSS) del panel
  dashboard/              VIEJO: admin maestro (empresas, productos, transportadoras, ubicaciones, roles...)
  dashboard-comercio/     VIEJO: tienda (pedidos, clientes, campañas, productos, mi cuenta)
  api/                    rutas de API (login, dashboard, dashboard-comercio)
  login/                  login, registro, verificación
prisma/schema.prisma      modelo de datos (tablas tbl_*)
```

## Modelo de datos (resumen)

- Usuarios: `tbl_usuarios` (PK `pkusuario` texto) → `tbl_personas`, `tbl_roles`, `tbl_estados_usuario`
- Comercios: `tbl_comercios` ↔ `tbl_comercios_usuarios` (un comercio puede tener varios usuarios, con `nivel_acceso`)
- Ventas: `tbl_pedidos` (guía única, flete, total) → `tbl_det_productos` → `tbl_productos` → `tbl_empresas`
- Clientes: `tbl_clientes` (por relación comercio-usuario)
- Catálogos: `tbl_departamentos`, `tbl_municipios`, `tbl_transportadoras`
- Marketing: `tbl_campanias`
- Pendiente: tabla de eventos del calendario (fase 4).

## Pendientes conocidos de seguridad (fase 6)

- Las rutas `/api/dashboard-comercio/*` leen el comercio desde el header `x-comercio-id` que manda el
  navegador: cualquier usuario podría cambiarlo. Debe salir de la sesión del servidor.
- Revisar que las contraseñas se guarden con hash y cómo se mantiene la sesión.
- Actualizar Next.js y React a la última versión con parches de seguridad.

## Cómo correrlo

```bash
npm install
cp .env.example .env      # solo necesario para las páginas viejas con base de datos
npx prisma generate       # genera src/generated/prisma
npm run dev               # http://localhost:3000  → el nuevo panel está en /panel
```

El nuevo `/panel` funciona **sin base de datos** mientras use datos de ejemplo.

## Reglas para quien edite

- No borrar `/dashboard` ni `/dashboard-comercio` hasta que su función exista en `/panel`.
- Texto de interfaz en español, en frases cortas y con verbos claros ("Guardar cambios", no "Enviar").
- Colores y espaciados salen de las variables de `panel.css`; no escribir hex sueltos en componentes.
