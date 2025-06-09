import Swal from "sweetalert2";

export function alerta(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
  });
}

export function alertaConfirmar(callback) {
  Swal.fire({
    title: "Está seguro?",
    text: "Esta acción no se puede revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      Swal.fire({
        title: "Eliminado!",
        text: "Envio eliminado.",
        icon: "success",
      });
    }
  });
}
