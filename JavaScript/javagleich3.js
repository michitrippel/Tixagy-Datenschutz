function Wertbuttongleich3()
 {
	    var platz1 = newArraykatze[x];
   var platz2 = newArraykatze[y];
   
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
	  if(newArraykatze[x] >= newArraykatze[i])
	  {
		  zehler++;
	  }
  }
  
    for(j=1;j<=max;j++)
  {
	  if(newArraykatze[y] >= newArraykatze[j])
	  {
		  zehler2++;
	  }
  }
  
  var lenge = newArray2.length - 1;
  
  var Wertungszahl1 = Math.round(100*(1 - (lenge - zehler)/lenge))/10;
  var Wertungszahl2 = Math.round(100*(1 - (lenge - zehler2)/lenge))/10;
  
  animation5.innerHTML = Wertungszahl1;
  animation6.innerHTML = Wertungszahl2;
  
  animation5.className = "open";
  animation6.className = "open";
  
  
  function innerfun2()
  {
	  animation5.className = "opener";
	  animation6.className = "opener";
  }
  
  setTimeout (innerfun2,1000);
	 

 function innerfun()
 { 
   animation5.className = "";
  animation6.className = "";
  button5.className = "open";

 x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  
  var neu = "url(images/katze"+x+".jpg)";
  document.getElementById('button5').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = "url(images/katze"+y+".jpg)";
   document.getElementById('button6').style.background = neu2;
 }
 setTimeout (innerfun,2500);
 }
 
 
 
 
 


var losbuttongleich3  = document.getElementById('buttongleich3');
losbuttongleich3.addEventListener ('click', Wertbuttongleich3, true);