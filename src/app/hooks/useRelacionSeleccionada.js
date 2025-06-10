import { useContext } from "react";
import { ComercioContext } from "@/context/ComercioContext";

export const useRelacionSeleccionada = () => {
  const { relacionSeleccionada } = useContext(ComercioContext);
  return relacionSeleccionada;
};
