"use strict";
const url = 'https://dog.ceo/api/breeds/image/random/';


function watchSubmit() {
    $('form').submit(event => {
      event.preventDefault();
      const num = $("#dogs").val();
      //Pass the number value to getDogImages
      getDogImages(num);
    });
}


function getDogImages(a) {
    const info = `${url}${a}`;
    fetch(info)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}



$(function() {
    console.log("App loaded! Waiting for submit!");
    watchSubmit();
});
