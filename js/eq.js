divequation();
draw_equation(8,"+",0,1);
moves_mode('remove',5);

//Create Images in div
function divequation(){
var div = document.getElementById("divequation");
for(var i=0 ; i<13 ; i++)
{
    div.innerHTML+='<img src="images/vertical.png" alt="" id=img'+i+' class ="strickimgs">';
}
for(var i=16 ; i<28 ; i++)
{
    div.innerHTML+='<img src="images/horizontal.png" alt="" id=img'+i+' class ="strickimgs">';
}
}

//equation draw
function draw_equation(f,op,s,r)
{
	//getting IDs for first operand , second operand and result in equation
	var first = set_number(f,"first");
	var sec = set_number(s,"sec");
	var res = set_number(r,"res");
  
	//drawing first operand
	for(i=0;i<first.length;i++)
	{
		var image = document.getElementById("img"+first[i]);
		image.classList.add('view');
	}
	//drawing second operand
	for(i=0;i<sec.length;i++)
	{
		var image = document.getElementById("img"+sec[i]);
		image.classList.add('view');
	}
	//drawing result
	for(i=0;i<res.length;i++)
	{
		var image = document.getElementById("img"+res[i]);
		image.classList.add('view');
	}

	//drawing =
	for(i=23;i<=24;i++)
	{
		var image = document.getElementById("img"+i);
		image.setAttribute("class" , "view");
	}

	//drawing operand - (set class to view [no toggle])
	var image = document.getElementById("img19");
	image.setAttribute("class" , "view");
	//drawing operand +
	if(op=="+")
	{
		var image2 = document.getElementById("img4");
		image2.classList.add('view');
	}
}

//restrickt player moves
function moves_mode(mode,num_moves)
{
	var im = document.getElementsByClassName("strickimgs");
	var array = [];
  switch(mode)
  {
    //in add mode restrict removing any stick
    case "add":
     for(var i=0;i<im.length;i++)
     {
        if(!im[i].classList.contains('view'))
        {
          im[i].addEventListener("click",function(e){
            e.target.classList.toggle('view');
            restrict_moves(e.target.id,num_moves,array)
       	  });
        }
     }
      break;
    //in remove mode restrict adding any stick
    case "remove":
    for(var i=0;i<im.length;i++)
    {
      if(im[i].classList.contains('view'))
      {
      im[i].addEventListener("click",function(e){
      e.target.classList.toggle('view');
      restrict_moves(e.target.id,num_moves,array)
		});
      }
    }
      break;
  }
}

//restrict number of moves for the player
function restrict_moves(id,num_moves,array)
{
	var exist;
	if(num_moves==1)
		{array.push(id);
			alert(num_moves);}
	   if(array.length==0)
      {array.push(id);}
  	  else{
      if(array.length<num_moves)
      {
      for(i=0;i<array.length;i++)
      {
      	if(array[i] == id)
      		{exist = i;}
      }
      if(exist){
      	array.splice(exist,1);
      	exist = null;
     }
      else
      	{array.push(id);
      	if(array.length==num_moves)
      		{alert(num_moves);}
      	}
  		}
      }
}

//set IDs for images in the required equation 
function set_number(num,pos){
	var temp = [];
	switch(pos)
	{
		case 'first':
			if(num==0){temp = [0,1,2,3,17,18];}
			else if(num==1){temp = [0,1];}
			else if(num==2){temp = [1,2,16,17,18];}
			else if(num==3){temp = [2,3,16,17,18];}
			else if(num==4){temp = [0,2,3,16];}
			else if(num==5){temp = [0,3,16,17,18];}
			else if(num==6){temp = [0,1,3,16,17,18];}
			else if(num==7){temp = [2,3,17];}
			else if(num==8){temp = [0,1,2,3,16,17,18];}
			else if(num==9){temp = [0,2,3,16,17,18];}
				return temp;
				break;
		case "sec":
			if(num==0){temp = [5,6,7,8,21,22]}
			else if(num==1){temp = [5,6]}
			else if(num==2){temp = [6,7,20,21,22]}
			else if(num==3){temp = [7,8,20,21,22];}
			else if(num==4){temp = [5,7,8,20];}
			else if(num==5){temp = [5,8,20,21,22];}
			else if(num==6){temp = [5,8,20,21,22];}
			else if(num==7){temp = [7,8,21];}
			else if(num==8){temp = [5,6,7,8,20,21,22];}
			else if(num==9){temp = [5,7,8,20,21,22];}
				return temp;
				break;
		case "res":
			if(num==0){temp = [9,10,11,12,26,27]}
			else if(num==1){temp = [9,10]}
			else if(num==2){temp = [10,11,25,26,27]}
			else if(num==3){temp = [11,12,25,26,27];}
			else if(num==4){temp = [9,11,12,25];}
			else if(num==5){temp = [9,12,25,26,27];}
			else if(num==6){temp = [9,10,12,25,26,27];}
			else if(num==7){temp = [11,12,26];}
			else if(num==8){temp = [9,10,11,12,25,26,27];}
			else if(num==9){temp = [9,11,12,25,26,27];}
				return temp;
				break;
		default:
			console.log("error getting IDs for number " +num+ "in " +pos);
	}
}