let inputSearch = document.querySelector('.search-input');
let iconSearch = document.querySelector('.fa');
let output = document.querySelector('.out');
let symbols = document.querySelector('.symbol');
let reg = /[1-5]/g;

inputSearch.oninput = function() {
  output.value = inputSearch.value.length;
    // chatCounter.value = commentsText.value.length;
    if(output.value < 4) {
      iconSearch.classList.add('disabled');
      iconSearch.classList.remove('act');
      symbols.textContent = symbols.dataset.search;
      // symbols.classList.add('alarm');
      inputSearch.classList.add('alarm');
      
    }
    else {
      iconSearch.classList.remove('disabled');
      iconSearch.classList.add('act');
      symbols.textContent = "";
      output.value ="";
       inputSearch.classList.remove('alarm');
    }
}

