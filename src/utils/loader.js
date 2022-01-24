import Swal from "sweetalert2";

export default {
  present() {
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
  close: () => Swal.close(),
};
