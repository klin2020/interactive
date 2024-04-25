document.addEventListener("DOMContentLoaded", function(){
    var image = document.getElementById('leaf');
    console.log(image);
    var popup = document.getElementById('popup-text');
    console.log(popup)
    image.addEventListener("click", function(){
        leaf(popup);        
    });
})



function leaf(popup){
    if (popup.style.display == 'none' || popup.style.display === ""){
        popup.style.display = 'block';
    }
    else {
        popup.style.display = 'none';
    }   
}