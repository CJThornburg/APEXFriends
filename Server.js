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
    url:  "https://api.mozambiquehe.re/assets/banners/revenant.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/revenant.png"
   }

  //  legends.all.Revenant.data[0].value
   
  let crypto= { legend: "Crypto" ,
  kills: _.get(user, "data.legends.all.Crypto.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/crypto.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/crypto.png"
  }
  let horizon= { legend: "Horizon",
  kills: _.get(user, "data.legends.all.Horizon.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/horizon.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/horizon.png"}
   
  let gibraltar= { legend: "Girbraltar" ,
  kills: _.get(user, "data.legends.all.Gibraltar.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/gibraltar.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/gibraltar.png" }
    
  let wattson= { legend: "Watson" ,
  kills: _.get(user, "data.legends.all.Wattson.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/wattson.jpg" ,
  urlIcon: "https://api.mozambiquehe.re/assets/icons/wattson.png"}
  
  let fuse = { legend: "Fuse",
  kills: _.get(user, "data.legends.all.Fuse.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/fuse.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/fuse.png"}
   
  let bangalore= { legend: "Bangalore",
  kills: _.get(user, "data.legends.all.Bangalore.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/bangalore.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/bangalore.png"

}
    
  let wraith= { legend: "Wraith",
  kills: _.get(user, "data.legends.all.Wraith.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/wraith.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/wraith.png"}
    
  let octane= { legend: "Octane" ,
  kills: _.get(user, "data.legends.all.Octane.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/octane.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/octane.png"}
    
  let bloodhound= { legend: "Bloodhound",
  kills: _.get(user, "data.legends.all.Bloodhound.data[0].value ", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/bloodhound.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/bloodhound.png"}
       
  let caustic= { legend: "Caustic" ,
  kills: _.get(user, "data.legends.all.Caustic.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/caustic.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/caustic.png" }
    
  let lifeline= { legend: "Lifeline" ,
  kills: _.get(user, "data.legends.all.Lifeline.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/lifeline.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/lifeline.png" }
  
  let pathfinder= { legend: "Pathfinder" ,
  kills: _.get(user, "data.legends.all.Pathfinder.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/pathfinder.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/pathfinder.png" }

  let loba = { legend: "Loba",
  kills: _.get(user, "data.legends.all.Loba.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/loba.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/loba.png" }
  
  let mirage= { legend: "Mirage",
  kills: _.get(user, "data.legends.all.Mirage.data[0].value", "0"),
  url:  "https://api.mozambiquehe.re/assets/banners/mirage.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/mirage.png"
}
  let rampart= { legend: "Rampart",
  
  kills: _.get(user, "data.legends.all.Rampart.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/rampart.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/rampart.png" }
  let valkyrie= { legend: "Valkyrie" ,

  kills: _.get(user, "data.legends.all.Valkyrie.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/valkyrie.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/valkrie.png" }
  let seer = { legend: "Seer",
  
  kills: _.get(user, "data.legends.all.Seer.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/seer.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/seer.png"}
  let ash  = { legend: "Ash",
  
  kills: _.get(user, "data.legends.all.Ash.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/ash.jpg",
  urlIcon: "https://api.mozambiquehe.re/assets/icons/ash.png" }
  
  let madMaggie= { legend: "Mad Maggie",
  kills: _.get(user, "data.legends.all['Mad Maggie'].data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/mad%20maggie.jpg"
  ,
  urlIcon: "https://api.mozambiquehe.re/assets/icons/mad%20maggie.png" }
  
  let newcastle= { legend: "Newcastle",
  kills: _.get(user, "data.legends.all.Newcastle.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/newcastle.jpg",
  urlIcon: "https://static.wikia.nocookie.net/titanfall/images/7/7d/AL_Newcastle.png/revision/latest/scale-to-width-down/350?cb=20220518142135"
 }
        
  let vantage= { legend: "Vantage" ,
  kills: _.get(user, "data.legends.all.Vantage.data[0].value", "0"),
  url: "https://api.mozambiquehe.re/assets/banners/vantage.jpg",
  urlIcon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftitanfall.fandom.com%2Fwiki%2FVantage&psig=AOvVaw0ZAG6ftOcz5etPmsSmYbyF&ust=1665343436510000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIifqPCt0foCFQAAAAAdAAAAABAE"}
   
  let legends = [revenant, crypto, horizon, gibraltar, wattson, fuse, bangalore, wraith, octane, bloodhound, caustic, lifeline, pathfinder, loba, mirage, rampart, valkyrie, seer, ash, madMaggie, newcastle, vantage ]


  
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




function trimResponse(user) {

      
    let trimmedUser = {
        // name, kd, kills, damage, level, main
        name: _.get(user, "data.global.name", "API ERROR"),
        kd: _.get(user, "data.total.kd.value", "Not Available"),        
        kills : _.get(user, "data.total.kills.value", "Not Available").toLocaleString(),
        damage: _.get(user, "data.total.damage.value", "Not Available").toLocaleString(),
        level: _.get(user, "data.global.level", "Not Available"),
        main: getMain(user),
        
        
       
    }
  return trimmedUser
}


app.get("/", function (req, res) {
  const url0 =
    "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=Naff&platform=X1";
  const url1 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=Aeriu&platform=X1";
  const url2 =
  "https://api.mozambiquehe.re/bridge?auth="+process.env.API + "&player= &platform=X1";
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


// function trimResponse (resoponse) {

// }
let trimmedZero  =trimResponse(responseZero);
let trimmedOne  =trimResponse(responseOne);
let trimmedTwo  =trimResponse(responseTwo);
let trimmedThree  =trimResponse(responseThree);
let trimmedFour  =trimResponse(responseFour);
let trimmedFive  =trimResponse(responseFive);
let trimmedSix  =trimResponse(responseSix);
let trimmedSeven  =trimResponse(responseSeven);  

console.log(trimmedZero);
      // console.log(responseSeven);
      
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
      let battlePassLevel = ""
      if (0 > _.get(user, "data.global.battlepass.level", "Not Available") ) { battlePassLevel = "No Battle Pass"} else { battlePassLevel = _.get(user, "data.global.battlepass.level" )};
      

      let userTrimmed = {
        requestedPlayer: requestedPlayer,
        kd: _.get(user, "data.total.kd.value", "Not Available"),
        main: getMain(user),
        currentStatus: _.get(user, "data.realtime.currentStateAsText", "Not Available"),
        banned: _.capitalize(_.get(user, "data.global.bans.isActive", "Not Available").toString()),
        banReason: _.startCase(_.capitalize(_.get(user, "data.global.bans.last_banReason", "Not Available"))),
        lastPlayedLegend: _.get(user, "data.legends.selected.LegendName", "Not Available"),
        rank: _.get(user, "data.global.rank.rankName", "Not Available"),
        rankScore:  _.get(user, "data.global.rank.rankScore", "Not Available").toLocaleString(),
        seasonWins14  : _.get(user, "data.total.wins_season_14.value", "Not Available"),
        seasonWins13  : _.get(user, "data.total.wins_season_13.value", "Not Available"),
        seasonWins12  : _.get(user, "data.total.wins_season_12.value", "Not Available"),
        seasonKills14: _.get(user, "data.total.kills_season_14.value", "Not Available"),
        seasonKills13: _.get(user, "data.total.kills_season_13.value", "Not Available"),
        seasonKills12: _.get(user, "data.total.kills_season_12.value", "Not Available"),
        battlePassLevel  : battlePassLevel,
        kills : _.get(user, "data.total.kills.value", "Not Available").toLocaleString(),
        damage: _.get(user, "data.total.damage.value", "Not Available").toLocaleString(),
        headshots: _.get(user, "data.total.headshots.value", "Not Available").toLocaleString(),
        gamesPlayed  : _.get(user, "data.total.games_played.value", "Not Available").toLocaleString(),
        executions  : _.get(user, "data.total.executions.value", "Not Available").toLocaleString(),
        revives  : _.get(user, "data.total.revives.value", "Not Available").toLocaleString()
            

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





app.get("*", (req, res) => {
  res.render("404")
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("SEVER IS LIVE");
});

