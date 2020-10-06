function Wertbuttongleich4()
 {
	    var platz1 = newArray[x];
   var platz2 = newArray[y];
   
   var EA = 1 / (1 + (Math.pow(10, (platz2 - platz1) / 400)));
   
   newArray[x] += 40*(0.5 - EA);
   
   var EB = 1 - EA;
   
   newArray[y] += 40*(0.5 - EB); 
   
  var zehler = 0;
  var zehler2 = 0;
   
  min  = 1;
  max = 11;
  
  var elozahl1 = Math.round(newArray[x]);
  var elozahl2 = Math.round(newArray[y]);
   
   
   for(i=1;i<=max;i++)
  {
	  if(newArray[x] >= newArray[i])
	  {
		  zehler++;
	  }
  }
  
    for(j=1;j<=max;j++)
  {
	  if(newArray[y] >= newArray[j])
	  {
		  zehler2++;
	  }
  }
  
  var lenge = newArray2.length - 1;
  
  var Wertungszahl1 = Math.round(100*(1 - (lenge - zehler)/lenge))/10;
  var Wertungszahl2 = Math.round(100*(1 - (lenge - zehler2)/lenge))/10;
  
  animation7.innerHTML = Wertungszahl1;
  animation8.innerHTML = Wertungszahl2;
  
  animation7.className = "open";
  animation8.className = "open";
  
  
  function innerfun2()
  {
	  animation7.className = "opener";
	  animation8.className = "opener";
  }
  
  setTimeout (innerfun2,1000);
	 

 function innerfun()
 { 
  animation7.className = "";
  animation8.className = "";
  button7.className = "open";

 x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  
  var neu = "url(images/hund"+x+".jpg)";
  document.getElementById('button7').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = "url(images/hund"+y+".jpg)";
   document.getElementById('button8').style.background = neu2;
 }
 setTimeout (innerfun,2500);
 }
 
 
 
 
 


var losbuttongleich4  = document.getElementById('buttongleich4');
losbuttongleich4.addEventListener ('click', Wertbuttongleich4, true);