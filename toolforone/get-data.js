var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbxi8x-qNDOskVHCAWjfVZSzSJrA6X3mXq345W0_dvRpn2u_e416quLhrax2dfq7eY4voA/exec';

document.addEventListener('DOMContentLoaded', function(){
function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful
        var response = JSON.parse(xhr.responseText);
        // Handle the response data here
        return new Promise(function(resolve, reject){
          handleData(response);
          console.log(response);
          growFlowers(response);
          const d = new Date().toLocaleString();
          const caption = '(today is ' + d.toString() + ')';
          document.getElementById('caption').innerHTML = caption;
          resolve();
        });


      } else {
        // Request failed
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

// this function prints the data to the HTML page.
var page = window.location.pathname.split("/").pop(); //check current html page

function handleData(response) {
  return new Promise(function(resolve, reject){
    var sheetDataElement = document.getElementById("sheetData");
    response.forEach(function(item) {
      if((item["give_to"] == "here" && page == "here.html") || (item["give_to"] == "there" && page== "there.html")){
          //plant flowers on correct page
          // console.log(typeof item["seed_type"])
          plantSeeds(item);
      }
    });
    resolve();
  });
}

function plantSeeds(itm){
  //on page load, generate all flowers at random positions
    var seeds = itm["seed_type"];
    //list of strings
    var arr = seeds.split(','); //divide into a list of flowers
    var flower;
    arr.forEach(function(s){
        // console.log(s)
        if(s == 'dandelions'){
            flower = 'images/dandelion.png';
        }
        else if(s == "roses"){
            flower = 'images/rose.png';
        }
        else{
            flower = 'images/sunflower.png';
        }

        const img = document.createElement('img');
        img.src = flower;
        img.style.setProperty('width', '5%', '');
        img.className = 'flowers';
        img.id = itm["Timestamp"]; //set id as time stamp
        const newX = Math.random() * (window.innerWidth );
        const newY = Math.random() * (window.innerHeight);
        const newZ_index = parseInt(Math.random() * 10); // z-index from 1-10
        img.style.left = newX + 'px';
        img.style.top = newY + 'px';
        img.style.zIndex = newZ_index; //randomize x, y, z positioning
        document.getElementById('flower-field').appendChild(img); //append to flower-field div
        console.log("flower added");
    }); 
}

// Example usage:
getData(AppScriptUrl);


function growFlowers(response){
  //when flower is clicked, increases by 5% until it reaches >80px
    let ff = document.getElementsByClassName("flowers");
    console.log(ff.length)
    for(var i = 0; i < ff.length; i++){
        // console.log("before,", ff[i]);
        ff[i].addEventListener('click', function(event){
          let string_size = window.getComputedStyle(event.target).getPropertyValue('width');
          let size = parseInt(string_size.slice(0, -2)); //make into integer to edit
          size = size + (size * 0.05); //increase by 5%
          string_size = size.toString().concat('px');
          event.target.style.width = string_size;
          if(size > 80){
            //remove element from page
            harvestFlower(event.target, response);
            event.target.remove();
          }
        });
    }
    // console.log("flower field: ", ff);
    // console.log(ff.length)
}  

function harvestFlower(flower, response){
  //remove it from sheet so it doesn't load? (WIP)
  //pop up message from flower
  id = flower.id;
  //get it from response sheet
  for (var i = 0; i < response.length; i++){
    if (response[i].Timestamp == id){
      if (response[i].message == ''){
        alert('. . .'); //no message
      }
      else{
        // let mmessage = response[i].Timestamp + 
        alert(response[i].Timestamp + "\n" + response[i].message); //message planted with flower
      }
      flower.remove(); //remove from HTML
      break; //jump out of loop
    }
  }
  console.log("harvested flower");
}
});





