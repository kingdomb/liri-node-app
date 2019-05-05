# liri-node-app
 LIRI is a Language Interpretation and Recognition Interface. 
 LIRI will be a command line node app that takes in parameters and gives you back data.
 
 
### liri.js can take in one of the following commands:

concert-this

spotify-this-song

movie-this


## What Each Command Should Do


### node liri.js concert-this *artist/band name here


This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

* Name of the venue

* Venue location

* Date of the Event (use moment to format this as "MM/DD/YYYY")

![image](https://user-images.githubusercontent.com/47176318/57187963-e9670900-6ec4-11e9-9349-d076cdcbb2c6.png)


### node liri.js spotify-this-song *song name here

This will show the following information about the song in your terminal/bash window

* Artist(s)

* The song's name

* A preview link of the song from Spotify

* The album that the song is from

![image](https://user-images.githubusercontent.com/47176318/57187944-92613400-6ec4-11e9-98ce-4135d5e20378.png)

_*NOTE: If no song is provided then your program will default to "The Sign" by Ace of Base.*_

![image](https://user-images.githubusercontent.com/47176318/57187999-68f4d800-6ec5-11e9-8bc9-aaadefe16cab.png)


### node liri.js movie-this *movie name here


This will output the following information to your terminal/bash window:

Title of the movie.
  
Release year.

IMDB Rating of the movie.

Rotten Tomatoes Rating of the movie.

Country where the movie was produced.

Language of the movie.

Plot of the movie.

Actors in the movie.

  
You'll use the axios package to retrieve data from the OMDB API. 

![image](https://user-images.githubusercontent.com/47176318/57187926-5332e300-6ec4-11e9-92a0-466e2e4946d7.png)

_*NOTE: If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'*_

![image](https://user-images.githubusercontent.com/47176318/57188220-f4239d00-6ec8-11e9-8377-c9fe6de7b574.png)





