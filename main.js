/*
Game.sound = false;
Game.volume = 0;
Stops game sound error
*/

let unlockedObjects = document.getElementsByClassName("product unlocked enabled").length;

setInterval(Game.ClickCookie, 1); //clicking the cookie

//Game.Objects["Cursor"].buy(); // buys first Upgrade (a cursor)

//console.log(Game.ObjectsById[0]); // gives all necessary infos about an upgrade

setInterval(function () { //logic for automatically buying all affordable upgrades
    let unlockedObjects = document.getElementsByClassName("product unlocked enabled").length;  
    for (let i = 0; i < unlockedObjects; i++) {
        if (Game.ObjectsById[i].price < Game.cookies) {
            Game.ObjectsById[i].buy();
            console.log("Bought an upgrade");
        }
  } 
}, 1);