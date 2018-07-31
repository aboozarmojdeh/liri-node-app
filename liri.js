require("dotenv").config();

var keys = require("./keys.js");

var Twitter = require("twitter");

var Spotify = require("node-spotify-api");

var fs = require("fs");
var request = require("request");

var commands = process.argv[2];
var action = process.argv[3];
var nodeItems = process.argv
//////////////////////////////

var movieSong = "";

for (var i = 3; i < nodeItems.length; i++) {
  if (i > 3 && i < nodeItems.length) {
    movieSong += "+" + nodeItems[i];
  } else {
    movieSong += nodeItems[i];
  }
}
console.log(movieSong)
///////////////////////////////

switch (commands) {

  case "my-tweets":
    myTweets();
    break;

  case "spotify-this-song":
    if (movieSong) {
      spotifySong(movieSong);
    } else {
      spotifySong("The Sign Ace of Base");
    }

    break;

  case "movie-this":
    if (movieSong) {
      movieThis(movieSong)
    } else {
      movieThis("Mr. Nobody")
    }

    break;

  case "do-what-it-says":
    doWhat();
    break;

  default:
    console.log("Please enter one of the below commands afte liri.js:");
    console.log("my-tweets, spotify-this-song, movie-this, do-what-it-says")
    break;
}

/////////////////////////////////////////////////////////////


function myTweets() {
  var client = new Twitter(keys.twitter);
  var screenName = { screen_name: 'aboozarmojdeh' };
  client.get('statuses/user_timeline', screenName, function (error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        var date = tweets[i].created_at;
        console.log("@aboozarmojdeh: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        console.log("-----------------------");

        fs.appendFile('log.txt', "\n-----------------------------------------------------------"
          + "\nTweets of @aboozarmojdeh: " + tweets[i].text + "\nCreated At: "
          + date.substring(0, 19)
          + "\n-----------------------------------------------------------", function (err) {
            if (err) {
              console.log(err);
            }

            else {
            }
          });
        fs.appendFile('log.txt', "-----------------------", function (err) {
          if (err) {
            console.log(err);
          }
          else {

          }
        });

      }
    } else {
      console.log('Error occurred');
      console.log(response)
    }
  });
}

/////////////////////////////////////////////////////////////////

function spotifySong(movieSong) {
  var spotify = new Spotify(keys.spotify);
  spotify.search({ type: 'track', query: movieSong }, function (error, data) {
    if (!error) {
      for (var i = 0; i < data.tracks.items.length; i++) {
        var songData = data.tracks.items[i];

        console.log("Artist(s): " + songData.artists[0].name);
        console.log("The song's name: " + songData.name);
        console.log("A preview link of the song from Spotify: " + songData.preview_url);
        console.log("The album that the song is from: " + songData.album.name);
        console.log("-----------------------");

        var songAppend = "\nArtists: " + songData.artists[0].name + "\nsongName: " + songData.name
          + "\nLink: " + songData.preview_url + "\nAlbum: " + songData.album.name;

        fs.appendFile('log.txt', "\nSong Data Log ----------:" + songAppend, function (err) {

          if (err) {
            console.log(err);
          }
          else {
          }
        });

      }
    } else {
      console.log('Error occurred.');
    }
  });
}

function movieThis(movie) {
  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&tomatoes=true&plot=short&apikey=trilogy";
  request(queryUrl, function (error, response, body) {


    if (!error && response.statusCode === 200) {

      console.log("Title of the movie: " + JSON.parse(body).Title);
      console.log("Year the movie came out: " + JSON.parse(body).Year);
      console.log("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).tomatoRating);
      console.log("Country where the movie was produced: " + JSON.parse(body).Country);
      console.log("Language of the movie: " + JSON.parse(body).Language);
      console.log("Plot of the movie: " + JSON.parse(body).Plot);
      console.log("Actors in the movie: " + JSON.parse(body).Actors);

      var movieAppend = "\nTitle: " + JSON.parse(body).Title + "\nYear: " + JSON.parse(body).Year
        + "\nRating: " + JSON.parse(body).imdbRating + "\nTomatoes: " + JSON.parse(body).tomatoRating
        + "\nCountry: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language
        + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors;

      fs.appendFile('log.txt', "Movie Data Log  ----------:" + movieAppend, function (err) {

        if (err) {
          console.log(err);
        }

        else {

        }

      });

    }
  });
}


function doWhat() {

  fs.readFile('random.txt', "utf8", function (error, data) {
    var txt = data.split(',');
    console.log(txt)
    spotifySong(txt[1]);
    console.log(txt)
  });
}