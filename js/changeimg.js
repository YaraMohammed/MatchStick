
function changeImages()
{
   var equationNumber= sessionStorage.getItem("eq_no");
   console.log(equationNumber);
   var playerName=sessionStorage.getItem("name");

   document.getElementById("player-name").innerHTML=playerName;
   if(equationNumber==1||equationNumber==2||equationNumber==3)
   {
      var characterChoise=sessionStorage.getItem("character");  
      if(characterChoise=="shlby")
         document.getElementById("player-img").src="images/characters/soly/level1.png";
      else 
         document.getElementById("player-img").src="images/characters/mike-levels/mike-level1.png";
   }	 	
   if(equationNumber==4||equationNumber==5||equationNumber==6)
   {
      var characterChoise=sessionStorage.getItem("character");
      if(characterChoise=="shlby")
         document.getElementById("player-img").src="images/characters/soly/level2.png";
      else
         document.getElementById("player-img").src="images/characters/mike-levels/mike-level2.ico";      
      document.getElementById("levels-img").src="images/levels/level2.png";
   }
   else if(equationNumber==7||equationNumber==8||equationNumber==9)
   {
      var characterChoise=sessionStorage.getItem("character");
      if(characterChoise=="shlby")
         document.getElementById("player-img").src="images/characters/soly/rsz_level3.png";
      else 
         document.getElementById("player-img").src="images/characters/mike-levels/rsz_level3.png";
 
      document.getElementById("levels-img").src="images/levels/level3.png";
   } 	    
}
