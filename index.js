var modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
//desktop 2
var img = document.getElementById('desktop-2');
var modalImg = document.getElementById("img03");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
}
 
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img03.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img03.className = "modal-content";
     }, 400);
    
}    

//desktop 1
var img = document.getElementById('desktop-1');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
}

modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
}

 

   