var pageCoutner = 1
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");


//Get JSON
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCoutner+'.json')
    
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText)
        //console.log(ourData[0]);
        renderHTML(ourData);
    };
    
    ourRequest.send();
    pageCoutner++;
    if(pageCoutner > 3){
        btn.classList.add("hide-me");
    }
});


//Loops through JSON Object editing HTML
function renderHTML(data) {
    var htmlString = "";

    for(i=0;i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ". That likes to eat "
        for(ii=0; ii< data[i].foods.likes.length;ii++){
            if(ii == 0){
                htmlString += data[i].foods.likes[ii];
            }else{
                htmlString += " and " + data[i].foods.likes[ii];
            }

        }
        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString); //ensures JSON data is outputting first to last

}






