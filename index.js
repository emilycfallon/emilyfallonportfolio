const modal = document.getElementById('myModal');
const modalMobile = document.getElementById('myModalMobile');
const modalImg = document.getElementById('img01');
const modalImgMobile = document.getElementById('img02');

var img = document.querySelectorAll('.thumbnail');
var img2 = document.querySelectorAll('.thumbnail2');
    
for (var i=0; i<img.length; i++){
    
    img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    }
     
}

for (var i=0; i<img2.length; i++){
    
    img2[i].onclick = function(){
    modalMobile.style.display = "block";
    modalImgMobile.src = this.src;
    modalImgMobile.alt = this.alt;
}
     
}

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
 } 

modalMobile.onclick = function() {
    img02.className += " out";
    setTimeout(function() {
       modalMobile.style.display = "none";
       img02.className = "modal-content-mobile";
     }, 400);
    
 } 


 
