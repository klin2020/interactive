document.addEventListener("DOMContentLoaded", function(){
    //on page load, generate all flowers at random positions
    var num_flower = Math.floor((Math.random() * 50) + 1); //generate random number 1-50
    var flower;
    for (let i = 0; i < num_flower; i++)
    {
        var type_flower = Math.floor((Math.random() * 5) + 1); //random 1-5
        if(type_flower == 1){
            flower = 'images/home_flower.png'
        }
        else if(type_flower == 2){
            flower = 'images/home_flower2.png'
        }
        else if(type_flower == 3){
            flower = 'images/home_flower3.png'
        }
        else if(type_flower == 4){
            flower = 'images/home_flower4.png'
        }
        else{
            flower = 'images/home_flower5.png'
        }

        const img = document.createElement('img');
        img.src = flower;
        var ranWidth = ((Math.random() * 40) + 1).toString();
        ranWidth = ranWidth + '%';
        img.style.setProperty('width', ranWidth);
        const newX = Math.random() * (document.body.clientWidth);
        const newY = Math.random() * (document.body.clientHeight);
        const newZ_index = parseInt(Math.random() * 10); // z-index from 1-10
        img.style.left = newX + 'px';
        img.style.top = newY + 'px';
        img.className = 'index-flower';
        img.style.zIndex = newZ_index; //randomize x, y, z positioning 
        document.getElementById('home-field').appendChild(img);
    }
  });