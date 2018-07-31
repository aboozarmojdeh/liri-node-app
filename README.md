# liri-node-app
LIRI Assignment

Created during Week 10 of UofT Coding Bootcamp. In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters as below and gives you back data: 

* `my-tweets`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`




## What Each Command Does

1. `node liri.js my-tweets`

  * Displays my last 20 tweets and when they were created in terminal/bash window.

2. `node liri.js spotify-this-song <song name>`

  * Shows the following information about the song in terminal/bash window.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

  * Or if no song is passed through, it will default to
    *"The Sign" by Ace of Base

3. `node liri.js movie-this <movie name>`

  * Shows the following information in terminal/bash.

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


  * Or if no movie is passed through, it will default to "Mr. Nobody"

4. `node liri.js do-what-it-says`

  * Takes the text from random.txt and runs the song through spotify-this-song command

## Tech used
- Node.js
- Twitter NPM Package - https://www.npmjs.com/package/twitter
- Spotify NPM Package - https://www.npmjs.com/package/spotify
- Request NPM Package - https://www.npmjs.com/package/request



## Built With

* Visula Studio Code - Text Editor

## Author

* **Aboozar Mojdeh** - *Node JS* - [Aboozar Mojdeh](https://github.com/aboozarmojdeh)
