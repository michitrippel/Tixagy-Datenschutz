var dropdownlos  = document.getElementById('Genre');
dropdownlos.addEventListener ('click', dropdown, true);

var offen1 = "true";
var offen2 = "true";
var offen3 = "true";
var offen4 = "true";
var offen5 = "true";

function dropdown() 
{

	dropdownGenre.style.display = "inline-block";
	
}



	
var losGenrefrau  = document.getElementById('Genrefrau');
losGenrefrau.addEventListener ('click', Genrefraufunktion, true);

var losGenremann  = document.getElementById('Genremann');
losGenremann.addEventListener ('click', Genremannfunktion, true);

var losGenrekatze  = document.getElementById('Genrekatze');
losGenrekatze.addEventListener ('click', Genrekatzefunktion, true);

var losGenrehund  = document.getElementById('Genrehund');
losGenrehund.addEventListener ('click', Genrehundfunktion, true);

var losGenrevergleich  = document.getElementById('Genrevergleich');
losGenrevergleich.addEventListener ('click', Genrevergleichfunktion, true);

function Genrefraufunktion()
{
  animation1.className = "";
  animation2.className = "";
  
  button1.className = "";
  button2.className = "";
  button3.className = "";
  button4.className = "";
  button5.className = "";
  button6.className = "";
  button7.className = "";
  button8.className = "";
  button9.className = "";
  button10.className = "";
  button11.className = "";
  button12.className = "";
  buttongleich1.style.display = "none";
  buttongleich2.style.display = "none";
  buttongleich3.style.display = "none";
  buttongleich4.style.display = "none";
  
  Genrefrau.className = "click";
  Genremann.className = "";
  Genrekatze.className = "";
  Genrehund.className = "";
  Genrevergleich.className = "";
  
  min=1;
  max=11;
  x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  offen1 = "true";
  offen2 = "false";
  offen3 = "false";
  offen4 = "false";
  offen5 = "false";
  
  var neu = "url(images/frau"+x+".jpg)";
  document.getElementById('button1').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = "url(images/frau"+y+".jpg)";
   document.getElementById('button2').style.background = neu2;
   
   
 }
 
 function Genremannfunktion()
{
  animation3.className = "";
  animation4.className = "";
  
  button1.className = "close";
  button2.className = "close";
  button3.className = "open";
  button4.className = "open";
  button5.className = "";
  button6.className = "";
  button7.className = "";
  button8.className = "";
  button9.className = "";
  button10.className = "";
  button11.className = "";
  button12.className = "";
  buttongleich2.style.display = "none";
  buttongleich1.style.display = "none";
  buttongleich3.style.display = "none";
  buttongleich4.style.display = "none";
  
  Genrefrau.className = "";
  Genremann.className = "click";
  Genrekatze.className = "";
  Genrehund.className = "";
  Genrevergleich.className = "";
  
  min=1;
  max=11;
  x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  offen1 = "false";
  offen2 = "true";
  offen3 = "false";
  offen4 = "false";
  offen5 = "false";
  
  var neu = "url(images/mann"+x+".jpg)";
  document.getElementById('button3').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = "url(images/mann"+y+".jpg)";
   document.getElementById('button4').style.background = neu2;
 }
 
 function Genrekatzefunktion()
{
  animation5.className = "";
  animation6.className = "";
  
  button1.className = "close";
  button2.className = "close";
  button3.className = "";
  button4.className = "";
  button5.className = "open";
  button6.className = "open";
  button7.className = "";
  button8.className = "";
  button9.className = "";
  button10.className = "";
  button11.className = "";
  button12.className = "";
  buttongleich3.style.display = "none";
  buttongleich2.style.display = "none";
  buttongleich1.style.display = "none";
  buttongleich4.style.display = "none";
  
  Genrefrau.className = "";
  Genremann.className = "";
  Genrekatze.className = "click";
  Genrehund.className = "";
  Genrevergleich.className = "";
  
  min=1;
  max=11;
  x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  offen1 = "false";
  offen2 = "false";
  offen3 = "true";
  offen4 = "false";
  offen5 = "false";
  
  var neu = "url(images/katze"+x+".jpg)";
  document.getElementById('button5').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = "url(images/katze"+y+".jpg)";
   document.getElementById('button6').style.background = neu2;
 }
 
 function Genrehundfunktion()
{
  animation7.className = "";
  animation8.className = "";
  
  button1.className = "close";
  button2.className = "close";
  button3.className = "";
  button4.className = "";
  button5.className = "";
  button6.className = "";
  button7.className = "open";
  button8.className = "open";
  button9.className = "";
  button10.className = "";
  button11.className = "";
  button12.className = "";
  buttongleich4.style.display = "none";
  buttongleich2.style.display = "none";
  buttongleich3.style.display = "none";
  buttongleich1.style.display = "none";
  
  Genrefrau.className = "";
  Genremann.className = "";
  Genrekatze.className = "";
  Genrehund.className = "click";
  Genrevergleich.className = "";
  
  min=1;
  max=11;
  x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  offen1 = "false";
  offen2 = "false";
  offen3 = "false";
  offen4 = "true";
  offen5 = "false";
  
  var neu = "url(images/hund"+x+".jpg)";
  document.getElementById('button7').style.background = neu;
   
do{
	y = Math.round(Math.random() * (max - min + 1) - 0.5) + min;
  } while (y==x);
   
   var neu2 = "url(images/hund"+y+".jpg)";
   document.getElementById('button8').style.background = neu2;
 }
 
  function Genrevergleichfunktion()
{
  animation9.className = "";
  animation10.className = "";
  
  button1.className = "close";
  button2.className = "close";
  button3.className = "";
  button4.className = "";
  button5.className = "";
  button6.className = "";
  button7.className = "";
  button8.className = "";
  button9.className = "open";
  button10.className = "open";
  button11.className = "open";
  button12.className = "open";
  buttongleich1.style.display = "none";
  buttongleich2.style.display = "none";
  buttongleich3.style.display = "none";
  buttongleich4.style.display = "none";
  
  Genrefrau.className = "";
  Genremann.className = "";
  Genrekatze.className = "";
  Genrehund.className = "";
  Genrevergleich.className = "click";
  
  min=1;
  max=11;
  x = Math.round(Math.random() * (max - min + 1) - 0.5) + min;

  offen1 = "false";
  offen2 = "false";
  offen3 = "false";
  offen4 = "false";
  offen5 = "true";
  
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