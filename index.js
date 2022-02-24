function loveCalculator(){
    var name1= document.getElementById("nameOne").value;
    var name2= document.getElementById("nameTwo").value;

    var name_1 = name1.toUpperCase();
    var name_2 = name2.toUpperCase();

    if (name1.length<=2){
        alert("Enter at least 3 characters");
    }

    if(name2.length<=2){
        alert("Enter at least 3 characters");
    }

    else{
        var random = Math.floor(Math.random()*100);
        document.getElementById('print').innerHTML= name_1 +" and "+ name_2+ " are " +random + "% compatible";
    }

    if (random<=10 || random<=60){
        document.getElementById("statement").innerHTML = "You are like water and oil together.";
    }
    
    else if (random<=61 || random <=100 ){
        document.getElementById("statement").innerHTML = "You are made for each other.";
    }
    
    
}
