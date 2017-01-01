
var timerVar = setInterval(countTimer, 1000);
var totalSeconds = -1;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}
    
function reloading() {
    location.reload();
}

function checkVoice() 
     {
     	
           var voice =sessionStorage.getItem("voice");
             var vid = document.getElementById("myVideo");
           if(voice=="soundON")
           {
           	vid.muted = false;
           }
           else
            {
                vid.muted =true;
            }     	
     	
     }
    
 countTimer();
changeImages();
checkVoice();