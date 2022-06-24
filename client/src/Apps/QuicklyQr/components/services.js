function fetchImage(data, set, alert, animation ,failed){
    animation(true)
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${data}`)
    .then(response=>response.blob())
    .then(file=>{
        const fileurl = URL.createObjectURL(file)
        set(fileurl)
        alert(true)
        animation(false)
    })
    .catch(()=>{
        failed(true)
    })
}

export default {fetchImage}