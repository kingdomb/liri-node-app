require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const keys = require("./keys.js");
const Spotify = require("node-spotify-api");

const spotify = new Spotify(keys.spotify);
const movies = keys.omdb.secret;
const bands = keys.bands.secret;
var title = process.argv.slice(3).join(" ");
var action = process.argv[2];

const write = function() {
    
    fs.writeFile("random.txt", action + "," + title, {'flags': 'ax+'}, function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
  
    // Otherwise, it will print: "movies.txt was updated!"
    console.log("random.txt was updated!");
  
  })
};

function musicCall() {
  const spotCall = function() {
    spotify.search({ type: "track", query: title, limit: 1 }, function(err,data) {

      if (err) {
        return console.log("Error occurred: " + err);
      }

      console.log("\nArtist(s): " + data.tracks.items[0].album.artists[0].name + "\n" +
      "\nSong's Name: " + data.tracks.items[0].name + "\n" +
      "\nPreview Link: " + "https://open.spotify.com/track/" + data.tracks.items[0].id + "\n" +
      "\nAlbum: " + data.tracks.items[0].album.name + "\n");
      //write();
    });
  };

  if (action === "spotify-this-song" && title != "") {
    spotCall();
  } else if (action === "spotify-this-song") {
    title = "The Sign Ace of Base";
    spotCall();
  };
  
}

musicCall()

function movieCall() {

  const omdbCall = function() {

  let movieUrl = "http://www.omdbapi.com/?t=" + title + "&apikey=" + movies;

  if (action === "movie-this") {
    axios
      .get(movieUrl)
      .then(function(response) {
        // If the axios was successful...
        // Then log the body from the site!
        console.log("\nTitle: " + response.data.Title + "\n" +
        "\nYear: " + response.data.Released + "\n" +
        "\nIMDB: " + response.data.Ratings[1].Value + "\n" +
        "\nRotten Tomatoes: " + response.data.Ratings[1].Value + "\n" +
        "\nCountry of origin: " + response.data.Country + "\n" +
        "\nLanguage: " + response.data.Language + "\n" +
        "\nPlot: " + response.data.Plot + "\n" +
        "\nActors: " + response.data.Actors + "\n");
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
          console.log("\nError", error.message);
        }
        console.log(error.config);
      });
  }
}
  if (action === "movie-this" && title != "") {
    omdbCall();
  } else if (action === "movie-this") {
    title = "Mr. Nobody";
    omdbCall();
  };
}

movieCall()

function bandsCall() {

  const bandsUrl = "https://rest.bandsintown.com/artists/" + title + "/events?app_id=" + bands;

  
  const moment = require("moment");

  if (action === "concert-this") {

    // Run the axios.get function...
    // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    axios.get(bandsUrl).then(
        function(response) {
      
          console.log("\nVenue Name: " + response.data[0].venue.name + "\n" +
          "\nVenue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ". " + response.data[0].venue.country + "\n" +
          "\nDate of the Event: " + moment(response.data[0].datetime).format('L'));
      
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
  }
}

bandsCall()

/*function doThis() {
    
        
        // Running the readFile module that's inside of fs.
        // Stores the read information into the variable "data"
        fs.readFile("random.txt", "utf8", function(err, data) {

            if (err) {
            return console.log(err);
        }
        else if (action === "do-what-it-says"){
            console.log("blahblah");
        
        // Break the string down by comma separation and store the contents into the output array.
        var output = data.split(",");
        
        // Loop Through the newly created output array
            for (var i = 0; i < output.length; i++) {
                console.log(data);


                if (Math.random(output[i]) === "spotify-this-song" || "movie-this" || "concert-this") {
                    
                    action = output[i]; 
                    title = output[i]++;

                    switch (action) {
                        case "spotify-this-song":
                        musicCall();
                        break;
                        
                        case "movie-this":
                        movieCall();
                        break;
                        
                        case "concert-this":
                        bandsCall();
                        break;
                    }
                        
                    
                } 
                // Print each element (item) of the array/
                //console.log(output[i]);

            }
        }
    })
}

doThis();*/

