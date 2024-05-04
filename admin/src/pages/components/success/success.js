import Swal from 'sweetalert2'

const showSuccessDialogue = () => {
    Swal.fire({
        icon: "success",
        title: "Category created successfully",
        showConfirmButton: false,
        timer: 1500
    });
}

export default showSuccessDialogue