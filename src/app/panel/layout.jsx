import "./panel.css";
import Shell from "./_components/Shell";

export const metadata = {
  title: "Panel · Finder",
};

// Aplica el tema guardado antes de pintar, para que no parpadee entre claro y oscuro.
const SCRIPT_TEMA = `try{var t=localStorage.getItem('panel-tema')||'sistema';var d=t==='oscuro'||(t==='sistema'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}`;

export default function PanelLayout({ children }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SCRIPT_TEMA }} />
      <Shell>{children}</Shell>
    </>
  );
}
