import { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.classList.add("opacity-100", "translate-y-0");
          modalRef.current.classList.remove("opacity-0", "translate-y-8");
        }
      }, 10);
    } else if (show) {
      // Animación de salida
      if (modalRef.current) {
        modalRef.current.classList.remove("opacity-100", "translate-y-0");
        modalRef.current.classList.add("opacity-0", "translate-y-8");
      }
      // Espera la duración de la animación antes de desmontar
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b3] bg-opacity-40 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 transform transition-all duration-300 opacity-0 translate-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center px-4 py-2">
          <button
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
            onClick={onClose}
            aria-label="Cerrar"
          >
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;