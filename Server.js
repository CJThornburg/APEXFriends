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



// function getUserData(user, platform) {
// url =  "https://api.mozambiquehe.re/bridge?auth=" +process.env.API + "&player=" + user +"&platform="+ platform;

// let data = axios.get(url )
// .then((response) => {
//     console.log('Response: ', response.data);
// }).catch((err) => {
//     console.error(err);
// });
// }
// ...





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
    




  const axiosRL = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1500 })




  const requestZero = axiosRL.get(url0);
  const requestOne = axiosRL.get(url1);

          //NEED TO SPREAD REQUEST OUT TO AVOID TIME REQ PER SECOND LIMIT. (2REQUEST) 
 
  const requestTwo = axiosRL.get(url2);

 
  const requestThree = axiosRL.get(url3);
  const requestFour = axiosRL.get(url4);
  const requestFive = axiosRL.get(url5);
  const requestSix = axiosRL.get(url6);
  const requestSeven = axiosRL.get(url7);


  
  axios.all([requestZero, requestOne
    ,requestTwo 
    , requestThree
    , requestFour, requestFive, requestSix, requestSeven
  ]).then(axios.spread((...responses) => {
    const responseZero = responses[0]
    const responseOne= responses[1]
   
      const responseTwo = responses[2]
  


    const responseThree = responses[3]
    const responseFour = responses[4]
    const responseFive= responses[5]
    const responseSix = responses[6]
    const responseSeven  = responses[7]
    // console.log (  responseSeven.data);
    // console.log (  responseTwo);
    // console.log("before res.send");
    res.render("landingpage.ejs", {
     
    });
  })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
    res.send("error");
  });
  




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





  // let NaffOJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",

  //   main: "",
  //   mainName: "",
  //   mainUrl: " ",
  // };
  // let AeriuOJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",

  //   main: "",
  //   mainName: "",
  //   mainUrl: " ",
  // };
  // let Cgk0OJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",
  //   main: "",
  //   mainName: "",
  //   mainUrl: " ",
  // };
  // let CamThingsOJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",
  //   main: "",
  //   mainName: "",
  //   mainUrl: " ",
  // };
  // let ddyAshleyOJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",

  //   main: "",
  //   mainName: "",
  //   mainUrl: " ",
  // };
  // let rKahziOJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",

  //   main: "",
  //   mainName: "",
  //   mainUrl: " ",
  // };
  // let AGLWolveZOJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",

  //   main: "",
  //   mainName: "",
  //   mainUrl: " ",
  // };
  // let ParkesssOJ = {
  //   name: "n/a",
  //   lifeTimeKills: "n/a",
  //   lifeTimeDamage: "n/a",
  //   level: "n/a",
  //   rank: "n/a",
  //   mainName: "",
  //   mainUrl: " ",
  // };


  
  // fetch(url)
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  // // .then ()
  // .then (

  // fetch(url)
  // .then((response) => {
  //   return response.json();
  // })
  // .then((json) => {
  //   let naffData = json.data;
  //   console.log(naffData)
  // options = {
  //   headers: {
  //     // 'Content-Type' : 'application/json',
  //     // 'Accept' : 'application/json',
//   //      'Authorization': process.env.API
//   //   }
//   // };
//   const requestOne = axios.get(url1);
//   const requestTwo = axios.get(url2);
//   //     .then((response) => {
//   //         console.log('Response: ', response.data);
//   //     }).catch((err) => {
//   //         console.error(err);
//   //     });
    
//   //   // ...
//   //   res.send( "completed loading");
//   // });
 

//   axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
//     const responseOne = responses[0]
//     const responseTwo = responses[1]
//     console.log (  responseOne);
//     console.log ( "2" + responseTwo);
//   })
//   )
//   .catch(errors => {
//     // react on errors.
//     console.error(errors);
//   });
 
//   res.send( "completed loading");
// });
 
 
  // requestOne.then(response => {
  //   console.log(response.data)
  //   console.log("confirming requestOne is working")
  // }).catch(error => {
  //   console.err(error)
  // })

  // res.send("completed loading")


  // getUserData("Aeriu", "X1");
  // res.send( "completed loading");
  // });
 



  // https.get(apiLink, function (response) { 

//   let chunks="";
//   response.on("data", function (chunk) {
//       chunks+=chunk;
//   });
//   response.on("end", function(){
//       // console.log("API Data recieved");

//       let defaultCovidData = JSON.parse(chunks);
//       // code after parse string into JSON format
//   });

// });





// https.get(url2, (res) => {

  //   console.log( res.statusCode);
  //   console.log( res.headers); 

  //   console.log(res.data)
  
  
  // });
//     reject(new Error("in reject console log"))
//   });





// });
  
// promise.then(res => {
//   console.log(res);
// })



// .catch(err => console.log(err));
// var postHead = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
// } 
// request(url2, function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


// res.send( "console.js"
// AeriuOJ: AeriuOJ,
// AGLWolveZOJ: AGLWolveZOJ,
// CamThingsOJ: CamThingsOJ,
// ddyAshleyOJ: ddyAshleyOJ,
// CGK0OJ: CGK0OJ,
// rKahziOJ: rKahziOJ,
// ParkesssOJ: ParkesssOJ,
// );

// });

// fetch(url1)
// .then((res) => res.text())
// .then(data => console.log(data))


// fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       let naffData = json.data;
//       console.log(naffData.segments)

//       NaffOJ = {
//         // name: "Naff",
//         name: _.get(data, "platformInfo.platformUserId ", "Naff"),
//         lifeTimeKills: _.get(naffData, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(naffData, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(naffData, "segments[0].stats.level.value", "n/a"),
//         rank: _.get(
//           naffData,
//           "segments[0].stats.rankScore.metadata.rankName",
//           "n/a"
//         ),

//         main: " ",
//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;

//       for (i = 1; i < naffData.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(naffData, "segments[" + i + "].stats.kills.value", 0);
//         const name = naffData.segments[i].metadata.name;
//         const imgUrl = naffData.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       NaffOJ.mainName = main.name;
//       NaffOJ.mainUrl = main.imgUrl;

//       //  end of data processing

//       //  2nd DATA CALL Aeriu
//       return fetch(url2);
//     })
//     .then((response) => response.json())
//     .then((json) => {
//       let mdata = json.data;

//       AeriuOJ = {
//         name: _.get(mdata, "platformInfo.platformUserId ", "Aeriu"),
//         lifeTimeKills: _.get(mdata, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(mdata, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(mdata, "segments[0].stats.level.value", "n/a"),

//         main: "",
//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;

//       for (i = 1; i < mdata.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(mdata, "segments[" + i + "].stats.kills.value", 0);
//         const name = mdata.segments[i].metadata.name;
//         const imgUrl = mdata.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       AeriuOJ.mainName = main.name;
//       AeriuOJ.mainUrl = main.imgUrl;

//       return fetch(url3);
//     })
//     .then((response) => response.json())
//     .then((json) => {
//       let gdata = json.data;

//       CGK0OJ = {
//         name: _.get(gdata, "platformInfo.platformUserId", "CGK0"),
//         lifeTimeKills: _.get(gdata, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(gdata, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(gdata, "segments[0].stats.level.value", "n/a"),

//         main: "",
//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;

//       for (i = 1; i < gdata.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(gdata, "segments[" + i + "].stats.kills.value", 0);
//         const name = gdata.segments[i].metadata.name;
//         const imgUrl = gdata.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       CGK0OJ.mainName = main.name;
//       CGK0OJ.mainUrl = main.imgUrl;

//       return fetch(url4);
//     })
//     .then((response) => response.json())
//     .then((json) => {
//       let sdata = json.data;

//       CamThingsOJ = {
//         name: _.get(sdata, "platformInfo.platformUserId", "CamThings"),
//         lifeTimeKills: _.get(sdata, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(sdata, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(sdata, "segments[0].stats.level.value", "n/a"),

//         main: "",
//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;

//       for (i = 1; i < sdata.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(sdata, "segments[" + i + "].stats.kills.value", 0);
//         const name = sdata.segments[i].metadata.name;
//         const imgUrl = sdata.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       CamThingsOJ.mainName = main.name;
//       CamThingsOJ.mainUrl = main.imgUrl;

//       return fetch(url5);
//     })
//     .then((response) => response.json())
//     .then((json) => {
//       let hdata = json.data;

//       ddyAshleyOJ = {
//         name: _.get(hdata, "platformInfo.platformUserId", "ddyAshleyOJ"),
//         lifeTimeKills: _.get(hdata, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(hdata, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(hdata, "segments[0].stats.level.value", "n/a"),

//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;

//       for (i = 1; i < hdata.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(hdata, "segments[" + i + "].stats.kills.value", 0);
//         const name = hdata.segments[i].metadata.name;
//         const imgUrl = hdata.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       ddyAshleyOJ.mainName = main.name;
//       ddyAshleyOJ.mainUrl = main.imgUrl;

//       return fetch(url6);
//     })
//     .then((response) => response.json())
//     .then((json) => {
//       let xdata = json.data;

//       rKahziOJ = {
//         name:  _.get(xdata, "platformInfo.platformUserId", "n/a"),
//         lifeTimeKills: _.get(xdata, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(xdata, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(xdata, "segments[0].stats.level.value", "n/a"),

//         main: "",
//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;

//       for (i = 1; i < xdata.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(xdata, "segments[" + i + "].stats.kills.value", 0);
//         const name = xdata.segments[i].metadata.name;
//         const imgUrl = xdata.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       rKahziOJ.mainName = main.name;
//       rKahziOJ.mainUrl = main.imgUrl;

//       return fetch(url7);
//     })
//     //  .then the rest of the requst
//     .then((response) => response.json())
//     .then((json) => {
//       let rdata = json.data;
//       console.log(rdata.segments);
//       AGLWolveZOJ = {
//         name: _.get( rdata, "platformInfo.platformUserId" ,"AGLWolveZ"),
//         lifeTimeKills: _.get(rdata, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(rdata, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(rdata, "segments[0].stats.level.value", "n/a"),

//         main: "",
//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;
//       console.log(rdata);
//       for (i = 1; i < rdata.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(rdata, "segments[" + i + "].stats.kills.value", 0);
//         const name = rdata.segments[i].metadata.name;
//         const imgUrl = rdata.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       AGLWolveZOJ.mainName = main.name;
//       AGLWolveZOJ.mainUrl = main.imgUrl;

//       return fetch(url8);
//     })

//     .then((response) => response.json())
//     .then((json) => {
//       let sfdata = json.data;

//       ParkesssOJ = {
//         lifeTimeKills: _.get(sfdata, "segments[0].stats.kills.value", "n/a"),
//         lifeTimeDamage: _.get(sfdata, "segments[0].stats.damage.value", "n/a"),
//         level: _.get(sfdata, "segments[0].stats.level.value", "n/a"),

//         mainName: "",
//         mainUrl: " ",
//       };

//       let legends = [];

//       var i;
//       console.log(sfdata.segments)
//       for (i = 1; i < sfdata.segments.length; i++) {
//         // if segments[i].stats.kills.value does not exist make it equal 0
//         const kills = _.get(sfdata, "segments[" + i + "].stats.kills.value", 0);
//         const name = sfdata.segments[i].metadata.name;
//         const imgUrl = sfdata.segments[i].metadata.bgImageUrl;
//         const legend = { kills, name, imgUrl };
//         legends.push(legend);
//       }

//       var topKills = Math.max.apply(
//         Math,
//         legends.map(function (o) {
//           return o.kills;
//         })
//       );

//       //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
//       main = legends.find(function (o) {
//         return o.kills == topKills;
//       });

//       //         // display name and img as background
//       ParkesssOJ.mainName = main.name;
//       ParkesssOJ.mainUrl = main.imgUrl;

//       console.log(NaffOJ);
//       res.send( "console.js"
//         AeriuOJ: AeriuOJ,
//         AGLWolveZOJ: AGLWolveZOJ,
//         CamThingsOJ: CamThingsOJ,
//         ddyAshleyOJ: ddyAshleyOJ,
//         CGK0OJ: CGK0OJ,
//         rKahziOJ: rKahziOJ,
//         ParkesssOJ: ParkesssOJ,
//       );
  
//     })
//   })

//     .then res.render after you have called everyones info
//     .catch((err) => console.log(err));
//   this error will send error if there is any erros on the .then chain

//               nameKey: name,
//               lifeTimeKillsKey: lifeTimeKills,
//               lifeTimeDamageKey: lifeTimeDamage,
//               levelKey: level,
//               rankKey: rank,
//               mainNameKey: mainName,
//               mainUrlKey: mainUrl

//   let name = "";

  // Naff   Origin

//   const url = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/Naff?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";

//   https.get(url, function (response) {

//       let chunks = [];
//       let  name = "";
//       let lifeTimeKills = "";
//       let lifeTimeDamage = "";
//       let level = "";
//       let rank = "";
//       let legends=[];
//       let main = "";
//       let mainName;
//       let mainUrl;

//       response.on("data", function (data) {
//           chunks.push(data);
//       }).on('end', function () {

//           let data = Buffer.concat(chunks);
//           let Naff = JSON.parse(data);

//           // putting into varible
//           name = Naff.data.platformInfo.platformUserId;

//           lifeTimeKills = Naff.data.segments[0].stats.kills.value;

//           lifeTimeDamage = Naff.data.segments[0].stats.damage.value;

//           level =Naff.data.segments[0].stats.level.value;

//           rank = Naff.data.segments[0].stats.rankScore.metadata.iconUrl;

//           var i;

//           for (i = 1; i <13; i++) {

//           const kills = Naff.data.segments[i].stats.kills.value;
//           const name = Naff.data.segments[i].metadata.name;
//           const imgUrl = Naff.data.segments[i].metadata.bgImageUrl;
//           const legend = {kills, name, imgUrl};
//           legends.push(legend);

//           }

//           // compare all the values to find the highest

//           // find the max value in the array of objects
//           var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

//           // uses topKills values and looks throught array of onjects and returns the onbject with that value
//           main = legends.find(function(o){ return o.kills == topKills; })

//           // display name and img as background
//           mainName = main.name;
//           mainUrl = main.imgUrl;

//           res.render("landingpage", {
//               nameKey: name,
//               lifeTimeKillsKey: lifeTimeKills,
//               lifeTimeDamageKey: lifeTimeDamage,
//               levelKey: level,
//               rankKey: rank,
//               mainNameKey: mainName,
//               mainUrlKey: mainUrl

//               // end of res.render function
//            });

//       // end of data processing ana back end
//       });

//       // end of get http request going to apex api
//   });

//   end of  get "/" root request
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