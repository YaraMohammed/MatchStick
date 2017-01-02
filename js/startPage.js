   sessionStorage.setItem("sound","soundON"); 

 function sotreData()
	{
		var choiceSelected;
		var name=document.getElementById('userName');
		console.log(name.value);
		sessionStorage.setItem("name",name.value.toString());
		
		if(document.getElementById('sh').checked) {
						choiceSelected="shlby";                 
		   }else if(document.getElementById('ko').checked) {
						 choiceSelected="korty";
					 }   
		 sessionStorage.setItem("character",choiceSelected);
		 sessionStorage.setItem("eq_no",1);
		 sessionStorage.setItem("win_3",0);
   }
         
	function enableMute()
	 {
	 
		var vid = document.getElementById("myVideo");
		var img= document.getElementById("soundImg");
		if(vid.muted==true){
		  vid.muted = false;
		  img.src="images/soundOn2.png"
		   sessionStorage.setItem("sound","soundON"); 
	   }
		  else{
				 vid.muted =true;
				 img.src="images/soundOff.png";
				   sessionStorage.setItem("sound","soundOff");
		  }
		 
	 }         
         
document.getElementById("startBtn").addEventListener("click",sotreData);         

document.getElementById("soundImg").addEventListener("click",enableMute);
