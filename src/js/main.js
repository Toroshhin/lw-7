window.onload = function () {

  let listingElements = ['apple', 'orange'];
  let storeElements = [];

  function addToStoreElements(element) {
    let elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function addToListingElements() {
    let newElement = prompt('Введите значение: ');
    if (newElement == '') {
      alert('You did not enter a value');
    } else {
      listingElements.push(newElement);
    }
  }

  function deleteListingElement(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
  }

  function deleteStoreElement(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.splice(elementPosition, 1);
    }
  }

  function clearSelected() {
    listingElements.length = 0;
    storeElements.length = 0;
  }

  function updateUI() {
    let storeSelect = document.querySelector('.store-select');
    let listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (let i = 0; i < listingElements.length; i++) {
      let newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (let i = 0; i < storeElements.length; i++) {
      let newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  updateUI();

  let addButton = document.querySelector('#add-button');
  let addListingButton = document.querySelector('#add-item');
  let deleteListingButton = document.querySelector('#delete-button-listing');
  let deleteStoreButton = document.querySelector('#delete-button-store');
  let clearButton = document.querySelector('#clear-all');
  let sortButton = document.querySelector('#sort-button');
  //let deleteListingButton = document.querySelector('#delete-button');

  addButton.onclick = function () {
    let selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  }

  addListingButton.onclick = function () {
    selectListing = document.querySelector('.listing-select');
    addToListingElements();
    updateUI();
  }

  //delete selected item from listing
  deleteListingButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    deleteListingElement(selectedOption.innerText);
    updateUI();
  }

  //delete selected item from store
  deleteStoreButton.onclick = function () {
    var selectedOption = document.querySelector('.store-select option:checked');
    deleteStoreElement(selectedOption.innerText);
    updateUI();
  }

  //clear selected item
  clearButton.onclick = function () {
    clearSelected();
    updateUI();
  }

  //sort selected item from store
  sortButton.onclick = function () {
    storeElements.sort();
    updateUI();
  }

}