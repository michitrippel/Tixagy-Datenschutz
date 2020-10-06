function Wert7()
 {
	
   var platz1 = newArrayhund[x];
   var platz2 = newArrayhund[y];
   
   var EA = 1 / (1 + (Math.pow(10, (platz2 - platz1) / 400)));
   
   newArrayhund[x] += 40*(1 - EA);
   
   var EB = 1 - EA;
   
   newArrayhund[y] += 40*(-EB); 
   
  var zehler = 0;
  var zehler2 = 0;
   
  min  = 1;
  max = 11;
   
   
   for(i=1;i<=max;i++)
  {
	  if(newArrayhund[x] >= newArrayhund[i])
	  {
		  zehler++;
	  }
  }
  
    for(j=1;j<=max;j++)
  {
	  if(newArrayhund[y] >= newArrayhund[j])
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
  button7.className = "click";
  
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
  
  if (offen4 == "true")
  {
  button7.className = "open";
  }
  
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
 
 
 var los7  = document.getElementById('button7');
los7.addEventListener ('click', Wert7, true);

newArrayhund = new Array(1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,1500,);