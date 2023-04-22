import Swal from 'sweetalert2';

export default function SwalAlert(options) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: options,
  });
}
