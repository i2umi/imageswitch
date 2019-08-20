let thumbs = document.querySelectorAll(".thumb");
for(let i = 0; i < thumbs.length; i++){
  thumbs[i].onclick = function(){
    document.getElementById("bigimg").src = this.dataset.image;
  };
}
