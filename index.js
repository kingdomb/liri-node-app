let axios = require("axios");
let moment = require("moment");
let artist = process.argv[2];
let bandsUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
axios.get(bandsUrl).then(
  function(response) {
    
    const dateOf = moment(response.data[0].datetime);
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city);
    console.log(dateOf);

  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });