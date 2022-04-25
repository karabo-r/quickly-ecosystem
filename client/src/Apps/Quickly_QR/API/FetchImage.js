// _Parameters
// data - user input
// set & alert - updating the state, e.g SetImageLink(...) see Quickly_QR.js


export default function fetchImage(data, set, alert){
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${data}`)
    .then(response=>response.blob())
    .then(file=>{
        const fileurl = URL.createObjectURL(file)
        set(fileurl)
        alert(true)
    })
}