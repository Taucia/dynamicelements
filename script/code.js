var smartPeople = [
    "ridhaa bnjamin",
    "joshua solomans",
    "monique dampiees",
    "Shane Stevens"
  ];
  
  var ul =
  document.createElement("ul");
  document.getElementById("people").appendChild(ul);
  
  smartPeople.forEach(function (friends) {
    var li = document.createElement("li");
  
    ul.appendChild(li);
    li.innerHTML += friends;
  });


// code also shows in the console
function smartpeople(){
    console.log(ul+friends);}
var ul =document.createElement('ul')
;
let friends=["ridhaa","joshua","monique","shane"];
smartpeople();

