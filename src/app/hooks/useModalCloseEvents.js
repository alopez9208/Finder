import { useEffect, useCallback } from "react";

export function useModalCloseEvents({ modalOpen, setModalOpen, modalRef }) {
  const handleEsc = useCallback((e) => {
    if (e.key === "Escape") setModalOpen(false);
  }, [setModalOpen]);

  const handleClickOutside = useCallback((e) => {
    if (modalRef?.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  }, [modalRef, setModalOpen]);

  useEffect(() => {
    if (modalOpen) {
      window.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen, handleEsc, handleClickOutside]);
}
