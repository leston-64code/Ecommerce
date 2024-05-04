import Swal from 'sweetalert2'

const showErrorDialogue = (msg) => {
    if (msg === "Duplicate Key Error") {
        msg = "Value already exists"
    }
    let message = msg ? msg : "Something went wrong!"
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`
    });
}

export default showErrorDialogue