document.getElementById("menuExpand").addEventListener("click", function(event){
    event.preventDefault()
    toggleMenu();
});

function toggleMenu() {
  var classToToggle = "menuOpen";
  var menu = document.getElementsByClassName("menu")[0]
  var currentClass = menu.className;
  if (currentClass.indexOf(classToToggle) > -1) {
    replaced = currentClass.replace( /(?:^|\s)menuOpen(?!\S)/g , '' );
    menu.className = replaced;
  } else {
    menu.className += " menuOpen"
  }
}
