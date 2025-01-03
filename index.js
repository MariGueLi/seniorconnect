//init the image index
var setImg = 1;
//set the image for preview
document.getElementById(0).src = document.getElementById(setImg).src;
//mark the thumbnail as selected
document.getElementById(setImg).className = "thumb selected";

function preview(img){
    document.getElementById(setImg).className = "thumb normal";
    img.className = "thumb selected";
    document.getElementById(0).src = img.src;
    setImg = img.id;
}
function searchFunction() {
    var query = document.querySelector('.search-input').value;
    alert('Je zoekt voor...' + query);
    // The way to look for something in the website
  }