export default function fetchQrImage(data, set, alert){
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${data}`)
    .then(response=>response.blob())
    .then(file=>{
        const fileurl = URL.createObjectURL(file)
        set(fileurl)
        alert(false)
    })
}