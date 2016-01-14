function doSearch() {
  var searchbar = document.getElementById("search-bar"), recipes = document.getElementsByClassName("recipe"), searchVal = searchbar.value;
  var words = getWords(searchVal);
  
  for (var +i = 0; i < recipes.length; i++) {
    if(containsWords()) {
      
    }
  }
  
}
  
function containsWords(searchText, words) {
  searchText.toLowerCase();
  for (var i = 0; i < words.length; i++) {
    if(searchText.contains(words)) {
      return true;
    }
  }
  return false;
}

function getWords(searchText) {
  searchText = searchText.toLowerCase();
  searchText = searchText.split(" ");
  return searchText;
}
var searchbar = document.getElementById("search-bar");
searchbar.addEventListener("onchange", doSearch);

