let textfield = document.querySelector("#textfield");
let button = document.querySelector("#button");
let image = document.querySelector("#image")

function qrgenerate(){
    if (textfield.value == "") {
        alert("Enter Valid Web address");
    }

    image.setAttribute("src","https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textfield.value)
}

button.addEventListener("click",qrgenerate)