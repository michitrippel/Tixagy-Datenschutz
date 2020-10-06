function Wert11()
 {

  var platzhalter1 = x*10 + bild1;
  var platzhalter2 = x*10 + bild2;
  var platzhalter3 = x*10 + bild3;
  var platzhalter4 = x*10 + bild4;
  
  vergleichArray[platzhalter3]++;

  
  var Wertungszahl1 = vergleichArray[platzhalter1];
  var Wertungszahl2 = vergleichArray[platzhalter2];
  var Wertungszahl3 = vergleichArray[platzhalter3];
  var Wertungszahl4 = vergleichArray[platzhalter4];
  
    var anzahl = vergleichArray[platzhalter1] + vergleichArray[platzhalter2] + vergleichArray[platzhalter3] + vergleichArray[platzhalter4];
  
  prozentzahl1 = Math.round((1-(anzahl - vergleichArray[platzhalter1])/anzahl)*100);
  prozentzahl2 = Math.round((1-(anzahl - vergleichArray[platzhalter2])/anzahl)*100);
  prozentzahl3 = Math.round((1-(anzahl - vergleichArray[platzhalter3])/anzahl)*100);
  prozentzahl4 = Math.round((1-(anzahl - vergleichArray[platzhalter4])/anzahl)*100);
  
  animation9.innerHTML = prozentzahl1+"%";
  animation10.innerHTML = prozentzahl2+"%";
  animation11.innerHTML = prozentzahl3+"%";
  animation12.innerHTML = prozentzahl4+"%";

  
  animation9.className = "open";
  animation10.className = "open";
  animation11.className = "open";
  animation12.className = "open";
	 

 function innerfun()
 { 
  animation9.className = "";
  animation10.className = "";
  animation11.className = "";
  animation12.className = "";
  
  
   min=1;
  max=11;
  x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  
  var min2=1;
  var max2=4;
  
  bild1 = Math.round(Math.random() * (max2 - min2 + 1) - 0.5) + min2;
   
do{
	bild2 = Math.round(Math.random() * (max2 - min2 + 1) - 0.5) + min2;
  } while (bild2 == bild1);
  
  do{
	bild3 = Math.round(Math.random() * (max2 - min2 + 1) - 0.5) + min2;
  } while (bild3 == bild1 || bild3 == bild2);
  
    do{
	bild4 = Math.round(Math.random() * (max2 - min2 + 1) - 0.5) + min2;
  } while (bild4 == bild1 || bild4 == bild2 || bild4 == bild3);
   
   var neu1 = "url(imagesvergleich/"+x+"/"+bild1+".jpg)";
   document.getElementById('button9').style.background = neu1;
   
      var neu2 = "url(imagesvergleich/"+x+"/"+bild2+".jpg)";
   document.getElementById('button10').style.background = neu2;
   
      var neu3 = "url(imagesvergleich/"+x+"/"+bild3+".jpg)";
   document.getElementById('button11').style.background = neu3;
   
      var neu4 = "url(imagesvergleich/"+x+"/"+bild4+".jpg)";
   document.getElementById('button12').style.background = neu4;
 }
 setTimeout (innerfun,2300);

 }
 
 
 
 
 


var losGenrevergleichbutton3  = document.getElementById('button11');
losGenrevergleichbutton3.addEventListener ('click', Wert11, true);