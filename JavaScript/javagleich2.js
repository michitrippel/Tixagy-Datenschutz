function Wertbuttongleich2()
 {
	    var platz1 = newArraymann[x];
   var platz2 = newArraymann[y];
   
   var EA = 1 / (1 + (Math.pow(10, (platz2 - platz1) / 400)));
   
   newArraymann[x] += 40*(0.5 - EA);
   
   var EB = 1 - EA;
   
   newArraymann[y] += 40*(0.5 - EB); 
   
  var zehler = 0;
  var zehler2 = 0;
   
  min  = 1;
  max = 11;
  
  var elozahl1 = Math.round(newArray[x]);
  var elozahl2 = Math.round(newArray[y]);
   
   
   for(i=1;i<=max;i++)
  {
	  if(newArraymann[x] >= newArraymann[i])
	  {
		  zehler++;
	  }
  }
  
    for(j=1;j<=max;j++)
  {
	  if(newArraymann[y] >= newArraymann[j])
	  {
		  zehler2++;
	  }
  }
  
  var lenge = newArray2.length - 1;
  
  var Wertungszahl1 = Math.round(100*(1 - (lenge - zehler)/lenge))/10;
  var Wertungszahl2 = Math.round(100*(1 - (lenge - zehler2)/lenge))/10;
  
  animation3.innerHTML = Wertungszahl1;
  animation4.innerHTML = Wertungszahl2;
  
  animation3.className = "open";
  animation4.className = "open";
  
  
  function innerfun2()
  {
	  animation3.className = "opener";
	  animation4.className = "opener";
  }
  
  setTimeout (innerfun2,1000);
	 

 function innerfun()
 { 
   animation3.className = "";
  animation4.className = "";
  button3.className = "open";

 x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  
  var neu = "url(images/mann"+x+".jpg)";
  document.getElementById('button3').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = "url(images/mann"+y+".jpg)";
   document.getElementById('button4').style.background = neu2;
 }
 setTimeout (innerfun,2500);
 }
 
 
 
 
 


var losbuttongleich2  = document.getElementById('buttongleich2');
losbuttongleich2.addEventListener ('click', Wertbuttongleich2, true);