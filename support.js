function openFormHead(evt, FormHeadName) {
    var i, x, tablinks; 
    x = document.getElementsByClassName("FormHead");
    for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < x.length; i++) {tablinks[i].classList.remove("w3-light-grey");}
      document.getElementById(FormHeadName).style.display = "block";
      evt.currentTarget.classList.add("w3-light-grey");
}
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon


function w3_open() {
    var mySidebar = document.getElementById("mySidebar");
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    var mySidebar = document.getElementById("mySidebar");
    mySidebar.style.display = "none";
}