// JavaScript Document

var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
  this.style = "box-shadow: 5px 5px 5px grey";
  this.width = "700"
});

image.addEventListener("mouseout", function(){
  this.style = "";
  this.width = "600"
});

