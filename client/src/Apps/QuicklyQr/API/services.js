function fetchImage(data, set, alert, failed){
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${data}`)
    .then(response=>response.blob())
    .then(file=>{
        const fileurl = URL.createObjectURL(file)
        set(fileurl)
        alert(true)
    })
    .catch(()=>{
        failed(true)
    })
}

export default {fetchImage}