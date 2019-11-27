'use strict';

function getDogImages(input) {
    if (input > 50) {
        return alert("Please choose a number equal or less than 50");
    } else {
        fetch("https://dog.ceo/api/breeds/image/random/${input}")
            .then(response => response.json())
            .then(responseJson => console.log(responseJson))
            .catch(error => alert('Something went wrong. Please try again later.'));
    }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $("#dog-amount").val();
    getDogImages(userInput);
  });
}

function dogAPIApp(num) {
  console.log('App loaded, watching for submit');
  watchForm();
};

$(dogAPIApp);

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