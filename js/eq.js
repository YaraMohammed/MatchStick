divequation();
var im = document.getElementsByClassName("strickimgs");
//console.log(im)
var existim0 = false;

//Add viewing to matchstick
for(var i=0;i<im.length;i++)
{
  im[i].addEventListener("click",function(e){
    e.target.classList.toggle('view');
  });
}
//Create Images in div
function divequation(){
var div = document.getElementById("divequation");
for(var i=0 ; i<13 ; i++)
{
  //console.log(i);
    div.innerHTML+='<img src="images/vertical.png" alt="" id=img'+i+' class ="strickimgs">'
    //  div.appendChild()
}
for(var i=16 ; i<28 ; i++)
{
  //console.log(i);
    div.innerHTML+='<img src="images/horizontal.png" alt="" id=img'+i+' class ="strickimgs">'
    //  div.appendChild()
}
}
