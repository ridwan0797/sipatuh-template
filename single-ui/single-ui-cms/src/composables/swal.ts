import Swal from 'sweetalert2';

export function useSweetAlert() {
  const showLoading = (duration = 3000) => {
    Swal.fire({
      title: 'Loading...',
      position: 'top-end',
      icon: 'info',
      toast: true,
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true,
    });
  };

  const showSuccess = (message = 'Sukses!') => {
    return new Promise<void>((resolve) => {
      Swal.fire({
        title: 'Sukses',
        text: message,
        icon: 'success',
      })
      .then((result) => {
        // Panggil callback setelah pengguna mengklik tombol OK
        if (result.isConfirmed) {
          resolve()
        }
      });
    })
  };

  const showError = (message = 'Terjadi Kesalahan') => {
    return new Promise<void>((resolve) => {
      Swal.fire({
        title: 'Error',
        text: message,
        icon: 'error',
      })
      .then((result) => {
        // Panggil callback setelah pengguna mengklik tombol OK
        if (result.isConfirmed) {
          console.log(result.isConfirmed)
          resolve()
        }
      })
    })
  };

  return {
    showLoading,
    showSuccess,
    showError,
  };
}
