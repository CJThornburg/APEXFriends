require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const getMain = require('./dep/getMain');
const axios = require('axios');
const rateLimit = require('axios-rate-limit')
const ejs = require("ejs");
var _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));







function trimResponse(user) {


  let trimmedUser = {
    // name, kd, kills, damage, level, main
    name: _.get(user, "data.global.name", "API ERROR"),
    kd: _.get(user, "data.total.kd.value", "Not Available"),
    kills: _.get(user, "data.total.kills.value", "Not Available").toLocaleString(),
    damage: _.get(user, "data.total.damage.value", "Not Available").toLocaleString(),
    level: _.get(user, "data.global.level", "Not Available"),
    main: getMain(user),



  }
  return trimmedUser
}


app.get("/", function (req, res, next) {
  const url0 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=Naff&platform=X1";
  const url1 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=Aeriu&platform=X1";
  const url2 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player= &platform=X1";
  const url3 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=CamThings&platform=X1";

  const url4 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=Imissedmygrapple&platform=PS4";


  const url5 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=KingWonderBoy300&platform=PS4";


  const url6 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=AGL%20WolveZ&platform=X1";


  const url7 =
    "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=Parkesss&platform=X1";



  const axiosRL = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 3000 })


  const requestZero = axiosRL.get(url0);
  const requestOne = axiosRL.get(url1);



  const requestTwo = axiosRL.get(url2);


  const requestThree = axiosRL.get(url3);
  const requestFour = axiosRL.get(url4);
  const requestFive = axiosRL.get(url5);
  const requestSix = axiosRL.get(url6);
  const requestSeven = axiosRL.get(url7);



  axios.all([requestZero,
    requestOne,
    requestTwo,
    requestThree,
    requestFour,
    requestFive,
    requestSix,
    requestSeven
  ])
    .then(axios.spread((...responses) => {
      const responseZero = responses[0]
      const responseOne = responses[1]

      const responseTwo = responses[2]



      const responseThree = responses[3]
      const responseFour = responses[4]
      const responseFive = responses[5]
      const responseSix = responses[6]
      const responseSeven = responses[7]






      let mainZero = getMain(responseZero);
      let mainOne = getMain(responseOne);
      let mainTwo = getMain(responseTwo);
      let mainThree = getMain(responseThree);
      let mainFour = getMain(responseFour);
      let mainFive = getMain(responseFive);
      let mainSix = getMain(responseSix);
      let mainSeven = getMain(responseSeven);



      let trimmedZero = trimResponse(responseZero);
      let trimmedOne = trimResponse(responseOne);
      let trimmedTwo = trimResponse(responseTwo);
      let trimmedThree = trimResponse(responseThree);
      let trimmedFour = trimResponse(responseFour);
      let trimmedFive = trimResponse(responseFive);
      let trimmedSix = trimResponse(responseSix);
      let trimmedSeven = trimResponse(responseSeven);


      res.render("landingpage.ejs", {
        playerZero: trimmedZero,
        mainZero: mainZero,
        playerOne: trimmedOne,
        mainOne: mainOne,
        playerTwo: trimmedTwo,
        mainTwo: mainTwo,
        playerThree: trimmedThree,
        mainThree: mainThree,
        playerFour: trimmedFour,
        mainFour: mainFour,
        playerFive: trimmedFive,
        mainFive: mainFive,
        playerSix: trimmedSix,
        mainSix: mainSix,
        playerSeven: trimmedSeven,
        mainSeven: mainSeven



      });
    })
    )
    .catch(err => {
      err.status = err.response.status;
      console.log(err.status)
      err.message = err.response.data.Error
      if (err.message === "Player not found.") {
        err.message += " External API issue"
      } next(err);
    });


});




let submittedUser = "";
let submittedPlatform = "";


app.post("/userlookup", function (req, res) {
  const user = req.body.username;
  const platform = req.body.platform;
  submittedUser = user;
  submittedPlatform = platform;

  res.redirect("/profile/" + submittedUser);
});

app.get("/profile/:user", function (req, res, next) {
  let platform = "";
  let requestedPlayer = req.params['user'];
  let url = ""



  if (requestedPlayer === "Naff" || requestedPlayer === "Aeriu" || requestedPlayer === "CGK0" || requestedPlayer === "CamThings" || requestedPlayer === "Imissedmygrapple" || requestedPlayer === "KingWonderBoy300" || requestedPlayer === "Parkesss" || requestedPlayer === "AGL WolveZ" || requestedPlayer === "Parkesss") {


    if (requestedPlayer === "Naff" || requestedPlayer === "Aeriu" || requestedPlayer === "CGK0" || requestedPlayer === "CamThings" || requestedPlayer === "AGL WolveZ" || requestedPlayer === "Parkesss") {
      platform = "X1";

    }
    else {
      platform = "PS4"
      console.log(platform)
    }


    url =
      "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=" + requestedPlayer + "&platform=" + platform;

  }
  else if (submittedUser === "" || submittedPlatform === "") {
    submittedUser = "";
    submittedPlatform = "";
    res.redirect("/search");
  }



  else {


    console.log(submittedPlatform + " else");
    console.log(submittedUser + " else");
    requestedPlayer = submittedUser;
    url = "https://api.mozambiquehe.re/bridge?auth=" + process.env.API + "&player=" + submittedUser + "&platform=" + submittedPlatform;
  }



  axios.get(url)
    .then((response) => {


      if (response.data.Error) {

        res.render("error", {
          error: response.data.Error
        });
      }
      else {

        let user = response;
        let battlePassLevel = ""
        if (0 > _.get(user, "data.global.battlepass.level", "Not Available")) { battlePassLevel = "No Battle Pass" } else { battlePassLevel = _.get(user, "data.global.battlepass.level") };


        let userTrimmed = {
          requestedPlayer: requestedPlayer,
          kd: _.get(user, "data.total.kd.value", "Not Available"),
          main: getMain(user),
          currentStatus: _.get(user, "data.realtime.currentStateAsText", "Not Available"),
          banned: _.capitalize(_.get(user, "data.global.bans.isActive", "Not Available").toString()),
          banReason: _.startCase(_.capitalize(_.get(user, "data.global.bans.last_banReason", "Not Available"))),
          lastPlayedLegend: _.get(user, "data.legends.selected.LegendName", "Not Available"),
          rank: _.get(user, "data.global.rank.rankName", "Not Available"),
          rankScore: _.get(user, "data.global.rank.rankScore", "Not Available").toLocaleString(),
          seasonWins14: _.get(user, "data.total.wins_season_14.value", "Not Available"),
          seasonWins13: _.get(user, "data.total.wins_season_13.value", "Not Available"),
          seasonWins12: _.get(user, "data.total.wins_season_12.value", "Not Available"),
          seasonKills14: _.get(user, "data.total.kills_season_14.value", "Not Available"),
          seasonKills13: _.get(user, "data.total.kills_season_13.value", "Not Available"),
          seasonKills12: _.get(user, "data.total.kills_season_12.value", "Not Available"),
          battlePassLevel: battlePassLevel,
          kills: _.get(user, "data.total.kills.value", "Not Available").toLocaleString(),
          damage: _.get(user, "data.total.damage.value", "Not Available").toLocaleString(),
          headshots: _.get(user, "data.total.headshots.value", "Not Available").toLocaleString(),
          gamesPlayed: _.get(user, "data.total.games_played.value", "Not Available").toLocaleString(),
          executions: _.get(user, "data.total.executions.value", "Not Available").toLocaleString(),
          revives: _.get(user, "data.total.revives.value", "Not Available").toLocaleString()


        };

        res.render("playerprofile", {
          user: user,
          user2: userTrimmed,
          requetedPlayer: requestedPlayer
        });
      }
    }).catch((err) => {

      err.message = "Invalid user/platform submitted. Try again!"

      res.render("errorNoPlayer", {
        err: err
      });

    });

});


app.get("/search", function (req, res) {
  res.render("search")

})



app.use((req, res, next) => {
  const err = new Error('Sorry, the requested resource couldn\'t be found.');
  err.statusCode = 404;
  res.status(404);
  err.message = "Page not found :("
  next(err)
});

app.use((err, req, res, next) => {

  const statusCode = err.status || 500;
  res.status(statusCode);
  res.render("broke", {
    err: err
  });
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("SEVER IS LIVE");
});
