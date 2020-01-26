/*
 * Call this server to obtain CSV as a string. 
 */

const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server started listening at 3000'));

const fs = require('fs')

app.use(express.static('public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/')
})


app.get('/api', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(parseCSV());
});

app.get('/api/random', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var collection = parseCSV();                // collection of games

    var rand = Math.floor(Math.random() + 5); // random number 1-5
    var randList = [];
    var foundGames = [];
    var randGame;

    if (rand == 1) {
        //small planets
        do {
            randGame = Math.floor(Math.random() * (+300 - 150) + 150); // random number 150-300
            if (!(randGame in randList)) {
                randList.push(randGame);
            }
        } while (randList.length < 30);

    } else if (rand == 2) {
        //medium planets
        do {
            randGame = Math.floor(Math.random() * (+149 - 60) + 60); // random number 150-300
            if (!(randGame in randList)) {
                randList.push(randGame);
            }
        } while (randList.length < 8);
        //small planets
        do {
            randGame = Math.floor(Math.random() * (+300 - 150) + 150); // random number 150-300
            if (!(randGame in randList)) {
                randList.push(randGame);
            }
        } while (randList.length < 8+15);

    } else if (rand == 3) {
        //large planets
        randList.push(Math.floor(Math.random() * (+59 - 0) + 0));
        //medium planets
        do {
            randGame = Math.floor(Math.random() * (+149 - 60) + 60); // random number 150-300
            if (!(randGame in randList)) {
                randList.push(randGame);
            }
        } while (randList.length < 4+1);
        //small planets
        do {
            randGame = Math.floor(Math.random() * (+300 - 150) + 150); // random number 150-300
            if (!(randGame in randList)) {
                randList.push(randGame);
            }
        } while (randList.length < 8+4+1);

    } else if (rand == 4) {
        //large planets
        randList.push(Math.floor(Math.random() * (+59 - 0) + 0));
        //medium planets
        do {
            randGame = Math.floor(Math.random() * (+149 - 60) + 60); // random number 150-300
            if (!(randGame in randList)) {
                randList.push(randGame);
            }
        } while (randList.length < 8+1);

    } else {
        //large planets
        randList.push(Math.floor(Math.random() * (+59 - 0) + 0));
        //large planets
        randList.push(Math.floor(Math.random() * (+59 - 0) + 0));
        //large planets
        randList.push(Math.floor(Math.random() * (+59 - 0) + 0));
        //small planets
        do {
            randGame = Math.floor(Math.random() * (+300 - 150) + 150); // random number 150-300
            if (!(randGame in randList)) {
                randList.push(randGame);
            }
        } while (randList.length < 10+3);

    }

    for (var x in randList) {
        for (var y in collection) {
            if (collection[y][0] == randList[x]) {
                foundGames.push(collection[y]);
            }
        }
    }

    res.send(foundGames);
});

function parseCSV() {
    var collection = [];// will contain the total collection of output data
    var input = fs.readFileSync('gameData/first300Games.csv');
    var data = input + '';
    var rows = data.split('\n').slice(1);

    rows.forEach(elmnt => {
        var row = elmnt.split(',');
        var number = row[0];
        var title = row[1];
        var hours = row[2];
        var game = [number, title, hours]; // make a sub-list for info of each game

        collection.push(game)
    });
    return collection
}



