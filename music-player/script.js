let song1 = document.getElementById("song1");
let icon = document.getElementById("icon");

icon.onclick = function(){
    if(song1.paused){
        song1.play();
        icon.src = "assets/pause.png"
    }else{
        song1.pause();
        icon.src = "assets/play.png"
    }
    
}