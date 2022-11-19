
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{


document.querySelectorAll("button")[i].addEventListener("click",perform);


function perform()
{
    
    var efg= this.innerHTML;
   switch (efg)
    {
    case "w":
     var ab=new Audio("tom-1.mp3");
     ab.play();
        break;
    
    case "a":
            var abc=new Audio("tom-2.mp3");
            abc.play();
               break;

     case "s":
     var abcd=new Audio("tom-3.mp3");
     abcd.play();
        break;

    case "d":
     var abcde=new Audio("tom-4.mp3");
     abcde.play();
        break;

    case "j":
     var abs=new Audio("snare.mp3");
     abs.play();
        break;

    case "k":
     var absw=new Audio("crash.mp3");
     absw.play();
        break;

    case "l":
     var abfr=new Audio("kick-bass.mp3");
     abfr.play();
        break;
    default:alert("SORRY FOR INCONVENIENCE");
        
   }    
}
}
