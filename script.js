
const Qrinput = document.getElementById("QrInput")
const qrimg = document.getElementById("Qrimg")
const box = document.getElementById("box")
const Qrurl ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data"

function GenerateQr(){
    

    if (Qrinput.value != "")
    {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Qrinput.value;
        box.classList.add('show-img')
    }
    else{
        Qrinput.classList.add('error');

        setTimeout(()=>{
            Qrinput.classList.remove('error');
            box.classList.remove('show-img');
        },1000);

    }
}