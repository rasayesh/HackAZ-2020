# Orbital Mechanics Simulation with Data Visualization

January 2020

## Game Purpose

This is a simulation for orbital gravitational pulls and data visualization helping to increase interest in whatever statistic is presented, along with increasing interest in the sciences.  The physics engine, graphics, and servers are all made by hand using node and html canvas by our team in our goal of increasing interest in science and statistics through the use of interactive games.  

![video game](https://github.com/Kalatco/HackAZ-2020/blob/master/gamePlay.png)

## Our API

The product connects to our backend server we designed using data found from  SteamCommunity.com where we gathered the playtime of the most popular games and stored them in a CSV file.

The API itself can return random data from that CSV file to give random game titles and hours played to our game to keep it interesting.

The webscraper uses libraries Requests, Beautiful soup, and pandas to run this script. Starts by using requests library to get permission from steam website to get HTML code. Then uses BeautifulSoup library to parse the HTML from the website. Finally pandas library organizes the data into specific columns and rows.

## Usage

1. After the user has downloaded the files from github, open terminal or CMD and open the file directory with the indicated files.
2. Download any dependent file for the program listed below.
3. To start the server, you need to type 'node server.js' into the terminal or CMD.  This will start the server on port 3000.
4. To open the site, go into your prefered browser and go to the address '[http://localhost:3000/](http://localhost:3000/)'.

## Authors

[Gavin Magee](https://github.com/GavinTMagee), 
[Reza Asayesh](https://github.com/RMA-source), 
[Andrew Raftovich](https://github.com/Kalatco), 
[Robbie Bagley](https://github.com/kansairob) 

## Team (except tall man in center)

![Pros](https://github.com/Kalatco/HackAZ-2020/blob/master/team1.jpg)
![T-posing](https://github.com/Kalatco/HackAZ-2020/blob/master/team2.jpg)

## Dependencies

Node.js, Express.js

## Future implementations (TODO)
msg: Before making fixes to the master repo, branch off and make a merge request, give each merge a unique name indicating the fix message.

- [ ] Add [igdb api](https://www.igdb.com/discover) to replace planet colors with an image of the game.
- [ ] Find name for the game.
- [x] Make the game full screen.
- [x] Fix hours displayed to a readable format.
- [ ] Add home page to display instructions for the game.
- [ ] Improve win screen by showing more info about the target game.
- [ ] Fix sizes of planets to better represent number of hours played.
- [ ] Improve delay with new spawn.
- [ ] Improve payer spawn by showing a bigger space ship.
- [ ] Allow to let player choose experimential worlds to practive with orbital mechanics.
- [ ] Check api/random to see if all 5 options are working correctly.