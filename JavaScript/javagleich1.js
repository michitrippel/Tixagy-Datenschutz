function Wertbuttongleich1()
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
  
  animation1.innerHTML = Wertungszahl1;
  animation2.innerHTML = Wertungszahl2;
  
  animation1.className = "open";
  animation2.className = "open";
  
  
  function innerfun2()
  {
	  animation1.className = "opener";
	  animation2.className = "opener";
  }
  
  setTimeout (innerfun2,1000);
	 

 function innerfun()
 { 
   animation1.className = "";
  animation2.className = "";

 x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  
  var neu = GenreData+x+".jpg)";
  document.getElementById('button1').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = GenreData+y+".jpg)";
   document.getElementById('button2').style.background = neu2;
 }
 setTimeout (innerfun,2500);
 }
 
 
 
 
 


var losbuttongleich1  = document.getElementById('buttongleich1');
losbuttongleich1.addEventListener ('click', Wertbuttongleich1, true);


