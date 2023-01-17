function onDogClick(){

    img = Math.floor(Math.random() * 8) + 1;

  
    let path = "\\img\\dogs\\dog" + img;
 document.getElementById("picholder").src = path + ".jpg";


}

function onCatClick(){
    Math.floor(Math.random() * 8) + 1;
    img = Math.floor(Math.random() * 8) + 1;

  
    let path = "\\img\\cats\\cat" + img;
 document.getElementById("picholder").src = path + ".jpg";

}
