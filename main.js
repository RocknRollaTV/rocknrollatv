var animalContainer = document.getElementById("animal-info");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://rocknrollatv.github.io/rocknrollatv/animals.json');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    };

ourRequest.send();   

function renderHTML(data){
    var htmlString = "";
    for (i= 0; i< data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " .</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
