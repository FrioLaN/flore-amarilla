const d = document
let prssmeFrm, video, videoMsj

const showFlower = (e) =>{
    e.preventDefault()
    console.log("presionado");
    prssmeFrm.classList.remove("active")
    prssmeFrm.classList.add("bye")
    
    video = d.getElementById("video")
    videoMsj = d.getElementById("video-msj")


    setTimeout(function() {
        video.play()
        video.classList.remove("close")
        videoMsj.classList.remove("close")
      }, 300);
}

d.addEventListener("DOMContentLoaded",(e)=>{
    console.log("cargado");
    d.getElementById("loading").classList.remove("activate")
    d.getElementById("loading").classList.add("close")
    prssmeFrm = d.getElementById("form-activation")
    prssmeFrm.addEventListener("submit", showFlower)
})
