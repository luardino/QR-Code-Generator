const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");
let title = document.querySelector("main");

title = document.createElement('h2');
title.innerHTML = "QR Code Generator";

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        genQRcode()
    }
});

function genQRcode(){
    if(!input.value) return;

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}