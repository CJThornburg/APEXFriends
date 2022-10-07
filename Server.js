require("dotenv").config();
const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
// const { json } = require("express");
const axios = require('axios');
const rateLimit = require('axios-rate-limit')
const ejs = require("ejs");
var _ = require("lodash");
const { Console, error } = require("console");
const { response } = require("express");
const { platform } = require("os");
const app = express();
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));


function getMain(user) {

  

  let revenant = { 
    legend: "Revenant",
    kills: _.get(user, "data.legends.all.Revenant.data[0].value", "0"),
    url:  "https://api.mozambiquehe.re/assets/banners/revenant.jpg"
   }

  //  legends.all.Revenant.data[0].value
   
  let crypto= { legend: "Crypto" ,
  kills: _.get(user, "data.legends.all.Crypto.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/crypto.jpg"}
   
  let horizon= { legend: "Horizon",
  kills: _.get(user, "data.legends.all.Horizon.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/horizon.jpg"}
   
  let gibraltar= { legend: "Girbraltar" ,
  kills: _.get(user, "data.legends.all.Gibraltar.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/gibraltar.jpg" }
    
  let wattson= { legend: "Watson" ,
  kills: _.get(user, "data.legends.all.Wattson.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/wattson.jpg"}
  
  let fuse = { legend: "Fuse",
  kills: _.get(user, "data.legends.all.Fuse.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/fuse.jpg"}
   
  let bangalor= { legend: "Bangalore",
  kills: _.get(user, "data.legends.all.Bangalore.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/bangalore.jpg"}
    
  let wraith= { legend: "Wraith",
  kills: _.get(user, "data.legends.all.Wraith.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/wraith.jpg"}
    
  let octane= { legend: "Octane" ,
  kills: _.get(user, "data.legends.all.Octane.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/octane.jpg"}
    
  let bloodhound= { legend: "Bloodhound",
  kills: _.get(user, "data.legends.all.Bloodhound.data[0].value ", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/bloodhound.jpg"}
       
  let caustic= { legend: "Caustic" ,
  kills: _.get(user, "data.legends.all.Caustic.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/caustic.jpg" }
    
  let lifeline= { legend: "Lifeline" ,
  kills: _.get(user, "data.legends.all.Lifeline.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/lifeline.jpg" }
  
  let pathfinder= { legend: "Pathfinder" ,
  kills: _.get(user, "data.legends.all.Pathfinder.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/pathfinder.jpg" }

  let loba = { legend: "Loba",
  kills: _.get(user, "data.legends.all.Loba.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/loba.jpg" }
  
  let mirage= { legend: "Mirage",
  kills: _.get(user, "data.legends.all.Mirage.data[0].value", "0"),
  url:  "https://api.mozambiquehe.re/assets/banners/mirage.jpg"}
  let rampart= { legend: "Rampart",
  
  kills: _.get(user, "data.legends.all.Rampart.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/rampart.jpg" }
  let valkyrie= { legend: "Valkyrie" ,

  kills: _.get(user, "data.legends.all.Valkyrie.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/valkyrie.jpg" }
  let seer = { legend: "Seer",
  
  kills: _.get(user, "data.legends.all.Seer.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/seer.jpg"}
  let ash  = { legend: "Ash",
  
  kills: _.get(user, "data.legends.all.Ash.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/ash.jpg" }
  
  let madMaggie= { legend: "Mad Maggie",
  kills: _.get(user, "data.legends.all['Mad Maggie'].data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/mad%20maggie.jpg" }
  
  let newcastle= { legend: "Newcastle",
  kills: _.get(user, "data.legends.all.Newcastle.data[0].value", "0"),
  url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aZJB1R04Qe14z5FIlvXdiTKuB_5vgMjmXGAJaatAPI9s3xeYx-3WtVPqqAu9ZHFRWyGvCqsV-LGK4vsglf7Z-2z0NK4_tt0PrpDKnDsnZYKbBPbW-GTwlKq3s2AEKhEik7nNnDETNxzf6EjFPd8pcnSozA04muNttDGh98T-0EDyvuVztEIpXNm9/s575/Apex%20Legends%20Season%2013.webp" }
        
  let vantage= { legend: "Vantage" ,
  kills: _.get(user, "data.legends.all.Vantage.data[0].value", "0"),
  url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkiCR3_C_V7Bk3jUaJEf_x4BTjcCxCmGqTpsFQHL1GRndyNHtNiL5DP6qHSUu_aKsb3CBBce9auJDsTYu4rd2qbAxi8tsKCvGwbcUZ3Prs5MbFw9E5a5QeVT_JIQOJIm6ODsGLibBsSe34BRCdWLQwzmQOn4uIomndIfbKIwJ-sAv9C-tjVyYC3uRh/s640/apex-legends-hunted-s14-banner%20(1).webp"}
   
  let legends = [revenant, crypto, horizon, gibraltar, wattson, fuse, bangalor, wraith, octane, bloodhound, caustic, lifeline, pathfinder, loba, mirage, rampart, valkyrie, seer, ash, madMaggie, newcastle, vantage ]


  
  for (i = 1; i < legends.length; i++) {
    //         // if segments[i].stats.kills.value does not exist make it equal 0
  legends[i].kills

          var topKills = Math.max.apply(
            Math,
            legends.map(function (o) {
              return o.kills;
            })
          );
    
    //       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
          main = legends.find(function (o) {
            return o.kills == topKills;
          });
 return main;
}
}







app.get("/", function (req, res) {
  const url0 =
    "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=Naff&platform=X1";
  const url1 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=Aeriu&platform=X1";
  const url2 =
  "https://api.mozambiquehe.re/bridge?auth="+process.env.API + "&player=CGK0&platform=X1";
  const url3 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=CamThings&platform=X1";
   
  const url4 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=Imissedmygrapple&platform=PS4";
    
  
  const url5 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=KingWonderBoy300&platform=PS4";
   
   
  const url6 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=AGL%20WolveZ&platform=X1";
   
   
  const url7 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=Parkesss&platform=X1";
    
  
  
  const axiosRL = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 3000 })
 
  
  const requestZero = axiosRL.get(url0);
  const requestOne = axiosRL.get(url1);

          //NEED TO SPREAD REQUEST OUT TO AVOID TIME REQ PER SECOND LIMIT. (2REQUEST) 
 
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
    const responseOne= responses[1]
   
      const responseTwo = responses[2]
  


    const responseThree = responses[3]
    const responseFour = responses[4]
    const responseFive= responses[5]
    const responseSix = responses[6]
    const responseSeven  = responses[7]
  
    //  console.log(reponses[0]); 
      // console.console.log(responses);




      // level  global.level
      //  kills  total.kills.value
      // damage   total.damage.value
      //  KD  total.kd.value


     


let mainZero = getMain( responseZero );
let mainOne = getMain( responseOne );
let mainTwo = getMain( responseTwo );
let mainThree = getMain( responseThree );
let mainFour = getMain( responseFour );
let mainFive = getMain( responseFive );
let mainSix = getMain( responseSix );
let mainSeven = getMain( responseSeven );






  

      // console.log(responseSeven);
      
    res.render("landingpage.ejs", {
        playerZero: responseZero,
        mainZero: mainZero,
        playerOne: responseOne,
        mainOne: mainOne,
        playerTwo: responseTwo,
        mainTwo: mainTwo,
        playerThree: responseThree,
        mainThree: mainThree,
        playerFour: responseFour,
        mainFour: mainFour,
        playerFive: responseFive,
        mainFive: mainFive,
        playerSix: responseSix,
        mainSix: mainSix,
        playerSeven: responseSeven,
        mainSeven: mainSeven
        
        

    });
  })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
    res.send("error");
  });

  
});




let submittedUser = "";
let submittedPlatform = "";
// let missingError = "";

app.post("/userlookup", function (req, res) {
  const user = req.body.username;
  const platform = req.body.platform;
  submittedUser = user;
  submittedPlatform = platform;

  res.redirect("/profile/" + submittedUser);
});

app.get("/profile/:user", function (req, res) {
  let platform = "";
  let requestedPlayer = req.params['user'];
  let url = ""
 
 
            // someone clicked a link
          if (requestedPlayer === "Naff" || requestedPlayer === "Aeriu" || requestedPlayer === "CGK0" ||requestedPlayer === "CamThings" || requestedPlayer ==="Imissedmygrapple" || requestedPlayer === "KingWonderBoy300" || requestedPlayer ==="Parkesss" ||requestedPlayer ===  "AGL WolveZ" || requestedPlayer ==="Parkesss" ) { 
            // console.log("hi 1")
                
                  if(requestedPlayer === "Naff" || requestedPlayer === "Aeriu" || requestedPlayer === "CGK0" || requestedPlayer === "CamThings" || requestedPlayer === "AGL WolveZ" || requestedPlayer ==="Parkesss"){
                    platform = "X1";
                    // console.log(platform);
                  }
                  else {
                    platform = "PS4"
                    console.log(platform)
                  }

                  console.log ("hi 2");
                  url =
                  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player="+ requestedPlayer +"&platform=" + platform;

           } 
          else if ( submittedUser === "" || submittedPlatform === "") {
            submittedUser = "";
            submittedPlatform = "";
            res.redirect("/search");
            
            // requestedPlayer = submittedUser;
            // url =   "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player="+  submittedUser +"&platform=" + submittedPlatform;
          }


    
           else  {
            // res.redirect("/search");

            console.log (submittedPlatform + " else");
            console.log (submittedUser + " else");
            requestedPlayer = submittedUser;
            url =   "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player="+  submittedUser +"&platform=" + submittedPlatform;
           }




   
console.log(url);

  axios.get(url)
  .then((response) => {
    

    if(response.data.Error) {

      res.render("error", {
        error : response.data.Error
      });
    }
    else {

      let user = response;
      
      let userTrimmed = {
        requestedPlayer: requestedPlayer,
        kd: _.get(user, "data.total.kd.value", "Not Available"),
        banned: _.get(user, "data.global.bans.isActive", "Not Available"),
        banReason: _.get(user, "data.global.bans.last_banReason", "Not Available"),
        lastPlayedLegend: _.get(user, "data.legends.selected.LegendName", "Not Available"),
        rank: _.get(user, "data.global.rank.rankName", "Not Available"),
        rankScore:  _.get(user, "data.global.rank.rankScore", "Not Available"),
        seasonWins14  : _.get(user, "data.total.wins_season_14.value", "Not Available"),
        seasonWins13  : _.get(user, "data.total.wins_season_13.value", "Not Available"),
        seasonWins12  : _.get(user, "data.total.wins_season_12.value", "Not Available"),
        seasonKills14: _.get(user, "data.total.kills_season_14.value", "Not Available"),
        seasonKills13: _.get(user, "data.total.kills_season_13.value", "Not Available"),
        seasonKills12: _.get(user, "data.total.kills_season_12.value", "Not Available"),
        battlePassLevel  : _.get(user, "data.global.battlepass.level", "Not Available"),
        kills : _.get(user, "data.total.kills.value", "Not Available"),
        damage: _.get(user, "data.total.damage.value", "Not Available"),
        headshots: _.get(user, "data.total.headshots.value", "Not Available"),
        gamesPlayed  : _.get(user, "data.total.games_played.value", "Not Available"),
        executions  : _.get(user, "data.total.executions.value", "Not Available"),
        revives  : _.get(user, "data.total.revives.value", "Not Available")
            

      };


      
     
      res.render("playerprofile", {
        user: user,
        user2: userTrimmed,
        requetedPlayer: requestedPlayer
      }); }
  }).catch((err) => {
    console.log("hi")
    let error = "invalid user/platform submitted. Try again!"
    res.render("error", {
      error : error
    });

  });

});
 

app.get("/search", function (req, res) {
  res.render("search")
  
})



app.listen(2000, function () {
  console.log("SEVER IS LIVE");
});

