import Swal from "sweetalert2";

export default {
  presentLoader() {
    Swal.fire({
      heightAuto: false,
      title: "Cargando",
      allowOutsideClick: false,
      allowEscapeKey: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  },
  closeLoader: () => Swal.close(),
};
