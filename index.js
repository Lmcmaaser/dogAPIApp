const apiURL = 'https://dog.ceo/api/breeds/image/random/';


function watchSubmit() {
    $('form').submit(event => {
      event.preventDefault();
      const user = $("#dogs").val();
      //Pass the number value to getDogImages
      getDogImages(user);
    });
}


function getDogImages(i) {
    const url = `${apiURL}${user}`;
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}



$(function() {
    console.log("App loaded! Waiting for submit!");
    watchSubmit();
});

/*'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});*/