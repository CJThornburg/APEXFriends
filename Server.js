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
    url:  "https://api.mozambiquehe.re/assets/banners/horizon.jpg"
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
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=ddyAshley&platform=X1";
    
  
  const url5 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=CamThings&platform=X1";
   
   
  const url6 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=AGL%20WolveZ&platform=X1";
   
   
  const url7 =
  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=Parkesss&platform=X1";
    



  const axiosRL = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 2000 })




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
        playeZero: responseZero,
        mainZero: mainZero,
        playeZero: responseOne,
        mainZero: mainOne,
        playeZero: responseTwo,
        mainZero: mainTwo,
        playeZero: responseThree,
        mainZero: mainThree,
        playeZero: responseFour,
        mainZero: mainFour,
        playeZero: responseFive,
        mainZero: mainFive,
        playeZero: responseSix,
        mainZero: mainSix,
        playeZero: responseSeven,
        mainZero: mainSeven
        
      

    });
  })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
    res.send("error");
  });


  


  // 
  




});


// single axios request 

  //     .then((response) => {
  //         console.log('Response: ', response.data);
  //     }).catch((err) => {
  //         console.error(err);
  //     });
    
  //   // ...
  //   res.send( "completed loading");
  // });





 

app.get("/:user", function (req, res) {
  let requestedPlayer = req.params.user;
  // console.log("no hi");
  //  do https request with requestedPlayer
  let url =
    "https://public-api.tracker.gg/v2/apex/standard/profile/5/" +
    requestedPlayer +
    "?" +
    process.env.API +
    "&Accept=json&Accept-Encoding=gzip";

  //   async function userData(url) {
  //     let response = await fetch(url);
  //     console.log(1 + response); // Logs the response
  //     return response;
  //  )

  //  console.log(userData(url)); // Returns Promise

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // .then(function (serverPromise) {
      // serverPromise.json().then(function (j) {
      // if statment because level is going higer than 500
      let userData = json.data;
      // let userData = j.data;
      let pulledLevel = _.get(userData, "segments[0].stats.level.value", "n/a");
      // console.log(userData);
      // let fixedlevel = "";
      // console.log(fixedlevel + " nothing");
      // if (pulledLevel !== "n/a") {
      //   if (pulledLevel > 500) {
      //     let fixedLevel = 500;
      //     console.log(fixedlevel + " greated than 500");
      //   } else {
      //     let fixedLevel = pulledLevel;
      //     console.log(fixedLevel + " less than 500");
      //   }
      // }
      // console.log("finale:" + fixedlevel);
      // if (pulledLevel === "n/a") {
      //   const fixedLevel = "N/A";
      //   console.log(fixedLevel + "level was not pulled");
      // } else {
      // }

      let data = {
        percentile: _.get(
          userData,
          "segments[0].stats.level.percentile",
          "Not available"
        ),
        // percentile: j.data.segments[0].stats.level.percentile,
        // data.data.segments[1].stats.kills.value
        kills: _.get(userData, "segments[1].stats.kills.value", ""),
        // kills: j.data.segments[0].stats.kills.value,
        damage: _.get(userData, "segments[0].stats.damage.value", ""),

        headshots: _.get(userData, "segments[0].stats.headshots.value", ""),
        // headshots: j.data.segments[0].stats.headshots.value,
        // fixedLevel: fixedLevel,
        matchesPlayed: _.get(
          userData,
          "segments[0].stats.matchesPlayed.value",
          ""
        ),
        // matchesPlayed: j.data.segments[0].stats.matchesPlayed.value || "",
        lastPlayed: _.get(userData, "segments[1].metadata.name", ""),
        // lastPlayed: j.data.segments[1].metadata.name,
        lastKilled: _.get(userData, "segments[1].stats.kills.values", ""),

        estimateLevel: _.get(userData, "segments[0].stats.level.value", ""),
        // lastKilled: j.data.segments[1].stats.kills.value,
      };

      res.render("playerprofile", {
        name: requestedPlayer,
        percentile: data.percentile,
        kills: data.kills,
        damage: data.damage,
        headshots: data.headshots,
        matchesPlayed: data.matchesPlayed,
        lastPlayed: data.lastPlayed,
        lastKilled: data.lastKilled,
        estimateLevel: data.estimateLevel,
      });
      // });
      // .catch(function (e) {
      //   console.log(e);
      // });
    })
    .catch(function (e) {
      console.log(e);
    });
  // async function userData() {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   return data;
  // }

  // let user = userData();

  // console.log(user);
  // fetch(url)
  //   .then((response) => {
  //     response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => console.log(err));
  // .then((json) => {
  //   let data = json.data;))
});

app.listen(2000, function () {
  console.log("SEVER IS LIVE");
});

// api format
// TRN-Api-Key: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
// api key
// check postman fo