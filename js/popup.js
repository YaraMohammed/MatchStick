// Get the modal
var modal = document.getElementById('pass-modal');
 
/*
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
 *checkTime
 *time: Time play duration. 
 */

function checkTime(time)
{
    var check=false;
    var flagg=false;
     if(time<60)
     {
      check=true;
      var equationNumber= sessionStorage.getItem("eq_no");
      
      if(sessionStorage.equations)
     {
       equationsArr=sessionStorage.getItem("equations").split(",");
     } 
     else{
        equationsArr=[];
      }
      for(var i=0;i<equationsArr.length;i++)
      {
        if(equationNumber==equationsArr[i])
        {
            flagg=true;
        }
      }
      if(!flagg)
        equationsArr.push(equationNumber);
      sessionStorage.setItem("equations",equationsArr.toString());
      console.log(equationsArr.length);     
     }  
    return check; 	

}


/*
 *pass_or_fail_msg: function to retrive pass or fail popup
 *eq_ewsult: Boolean T if player solved eq
 *eq_time: Time play duration. 
 */

function pass_or_fail_msg(eq_result,eq_time)
{
    var footer=document.getElementsByClassName('modal-footer')[0];
    var mbody=document.getElementsByClassName('modal-body')[0];
    var header=document.getElementsByClassName('modal-header')[0];
    var eq_no=sessionStorage.eq_no;
    
    if(eq_result==true)
    {
        //build padges header    
        //check on time padge
        //Call checktime from thegamejs
        flash_padge=checkTime(eq_time);
        if(flash_padge==true)
        {
            header.innerHTML+='<img src="images/rsz_fast.png" alt="ttt" class="modal-header" style="padding-left: 172px;">';
        }
        var inrow_padge=sessionStorage.win_3;
        if(inrow_padge==3)
        {
            header.innerHTML+='<img src="images/padges/win_3.png" alt="ttt" class="modal-header">';
        }
        if(eq_no==9)
        {
            //tasks is eq_array from 
            flash_eq_arr = sessionStorage.equations.split(",");
            if (flash_eq_arr.length==9)
                header.innerHTML+='<img src="images/padges/flash.jpg" alt="ttt" class="modal-header">';
        }
        
        
        //build body
        mbody.innerHTML='<h2> Congratulations :)</h2>';
        if(eq_no==1)
        { //Level 1
            mbody.innerHTML+='<img src="images/levels/level1.png" alt="ttt" class="modal-body">';
        }
        else if(eq_no==3)
        { //Level 2
            mbody.innerHTML+='<img src="images/levels/level2.png" alt="ttt" class="modal-body">';
        }  
        else if(eq_no==6)
        { //Level 3
            mbody.innerHTML+='<img src="images/levels/level3.png" alt="ttt" class="modal-body">';
        }
else if(eq_no==9)
        {
          //thanks for playing
            mbody.innerHTML='<img src="images/levels/end.jpg" alt="the end" class="modal-body">';
            // display footer to restart game from beginning
            //you can close only the window that the script opens
            footer.innerHTML='<a href="startPage.html"><img src="images/levels/menu.png" alt="restart" onclick="sessionStorage.clear();"class="modal-footer"></a>';
        modal.style.display = "block";
}
        
        //build footer
        //footer.innerHTML='<button id="retry" onclick="reloading();" class="reload">Retry</button> <button id="cont" onclick="moveto_nxt();">>></button>';
        if(eq_no <9)
            footer.innerHTML='<img src="images/retry.png" alt="" onclick="reloading();" class="modal-footer"><img id="cont" src="images/cont.png" alt="" onclick="moveto_nxt();" class="modal-footer">';
        modal.style.display = "block";
    }
    else
    {
        mbody.innerHTML='<h2>Sorry!! Try Again</h2>';
        footer.innerHTML='<img id="ret" src="images/retry.png" alt="" onclick="reloading();" class="modal-footer">';
        modal.style.display = "block";
    }
    
}
//pass_or_fail_msg(true,50);
function moveto_nxt(){
    var eq=sessionStorage.eq_no;
    eq++;
    sessionStorage.eq_no=eq;
    //changeImages();
    location.reload();
}
