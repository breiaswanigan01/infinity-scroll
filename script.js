"use strict";
const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");
// getting photos w/ an array
let photosArray = [];

const count = 10;
const apiKey = "V43fhqiJOlQbWpEGBCIv3NSEiv3JbXbZsejXUWR89k4";
// Unsplash API
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
  } catch (error) {
    // catch error here
  }
}

// on load
getPhotos();
