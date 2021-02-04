require('dotenv').config();
const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');
const {
    json
} = require("express");
const ejs = require('ejs');
var _ = require('lodash');
const { Console } = require('console');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));



            



// might be able to make an array of all the usernames and then rund a for loop, this would be a refactor step do not try to do it right off the bat 




app.get("/", function (req, res) {

  
  
  
  const url = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/KingRothgard?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
  const url2 = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/minaXpotato?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
  const url3 = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/m3llakka?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
  const url4 = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/SHBWAA?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
  const url5 = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/Hed_Is_Tilted?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
  const url6 = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/Fixer_RC-1140?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
  const url7 = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/MahaloMerky?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
  const url8 = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/SystolicFrame48?" + process.env.API + "&Accept=json&Accept-Encoding=gzip"; 

  
let kingRothgardOJ = {
  name: "n/a",
  lifeTimeKills : "n/a",
   lifeTimeDamage : "n/a",
    level : "n/a",
    rank : "n/a",
     
    main : "",
   mainName : '',
    mainUrl: ' ',
};
let minaXpotatoOJ = {
  name: "n/a",
  lifeTimeKills : "n/a",
   lifeTimeDamage : "n/a",
    level : "n/a",
    rank : "n/a",
     
    main : "",
   mainName : '',
    mainUrl: ' '
};
let m3llakkaOJ = { 
   name: "n/a",
lifeTimeKills : "n/a",
 lifeTimeDamage : "n/a",
  level : "n/a",
  rank : "n/a",   
  main : "",
 mainName : '',
  mainUrl: ' '};
let sHBWAAOJ = {
  name: "n/a",
  lifeTimeKills : "n/a",
   lifeTimeDamage : "n/a",
    level : "n/a",
    rank : "n/a",
    main : "",
   mainName : '',
    mainUrl: ' '
};
let hed_Is_TiltedOJ = {
  name: "n/a",
  lifeTimeKills : "n/a",
   lifeTimeDamage : "n/a",
    level : "n/a",
    rank : "n/a",
     
    main : "",
   mainName : '',
    mainUrl: ' '
};
let xariusOJ = {
  name: "n/a",
  lifeTimeKills : "n/a",
   lifeTimeDamage : "n/a",
    level : "n/a",
    rank : "n/a",
     
    main : "",
   mainName : '',
    mainUrl: ' '
};
let mahaloMerkyOJ = {
  name: "n/a",
  lifeTimeKills : "n/a",
   lifeTimeDamage : "n/a",
    level : "n/a",
    rank : "n/a",
     
    main : "",
   mainName : '',
    mainUrl: ' '
};
let systolicFrame48OJ = {
  name: "n/a",
  lifeTimeKills : "n/a",
   lifeTimeDamage : "n/a",
    level : "n/a",
    rank : "n/a",
   mainName : '',
    mainUrl: ' '
};
  
  fetch(url)
  .then(response =>
    {return response.json();
     })
  .then(json => {
    let kdata = (json.data); 
   
    kingRothgardOJ = {
     name: kdata. platformInfo.platformUserId,
    lifeTimeKills : _.get (kdata, 'segments[0].stats.kills.value', "n/a"),
   lifeTimeDamage :_.get (kdata, 'segments[0].stats.damage.value' ,  "n/a"),
    level : _.get (kdata , 'segments[0].stats.level.value' , "n/a"),
    rank : _.get (kdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),  
    rankImg: kdata.segments[0].stats.rankScore.metadata.iconUrl,  
    main: " ", 
   mainName : '',
    mainUrl: ' ',
   };
   
   

   let legends=[];


   var i;

           for (i = 1; i <kdata.segments.length; i++) {

            // if segments[i].stats.kills.value does not exist make it equal 0
           const kills = _.get (kdata, 'segments[' + i + '].stats.kills.value', 0 );
           const name = kdata.segments[i].metadata.name;
           const imgUrl = kdata.segments[i].metadata.bgImageUrl;
           const legend = {kills, name, imgUrl};
           legends.push(legend);
           
           }
          
  
           var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

   //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
           main = legends.find(function(o){ return o.kills == topKills; })

        

   //         // display name and img as background
   kingRothgardOJ.mainName = main.name;
   kingRothgardOJ.mainUrl = main.imgUrl;
   


















    





  //  end of data processing 


  //  2nd DATA CALL MINAXPotato 
   return fetch (url2);
   
   
  })
  .then(response => response.json())
  .then(json => {
    let mdata = (json.data); 




      minaXpotatoOJ = {
      name: mdata. platformInfo.platformUserId,
      lifeTimeKills : _.get (mdata, 'segments[0].stats.kills.value', "n/a"),
      lifeTimeDamage :_.get (mdata, "segments[0].stats.damage.value" ,  "n/a"),
       level :_.get         (mdata, "segments[0].stats.level.value", "n/a"),
       rank :_.get          (mdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),   
       rankImg: mdata.segments[0].stats.rankScore.metadata.iconUrl,
       main: "",
    mainName : '',
     mainUrl: ' ',
    };

   

    let legends=[];


   var i;

           for (i = 1; i <mdata.segments.length; i++) {

            // if segments[i].stats.kills.value does not exist make it equal 0
           const kills = _.get (mdata, 'segments[' + i + '].stats.kills.value', 0 );
           const name =         mdata.segments[i].metadata.name;
           const imgUrl =       mdata.segments[i].metadata.bgImageUrl;
           const legend = {kills, name, imgUrl};
           legends.push(legend);
           
           }
          
  
           var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

   //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
           main = legends.find(function(o){ return o.kills == topKills; })

        

   //         // display name and img as background
   minaXpotatoOJ.mainName = main.name;
   minaXpotatoOJ.mainUrl = main.imgUrl;
    


















  return fetch (url3);
  })
  .then(response => response.json())
  .then(json => {
    let gdata = (json.data);

  m3llakkaOJ = {
    name: gdata. platformInfo.platformUserId,
    lifeTimeKills : _.get (gdata, 'segments[0].stats.kills.value', "n/a"),
    lifeTimeDamage :_.get (gdata, "segments[0].stats.damage.value" ,  "n/a"),
     level :_.get         (gdata, "segments[0].stats.level.value", "n/a"),
     rank :_.get          (gdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),   
     rankImg: gdata.segments[0].stats.rankScore.metadata.iconUrl,
   main : "",
  mainName : '',
   mainUrl: ' ',
  };



    return fetch (url4);
  })
  .then(response => response.json())
  .then(json => {
    let sdata = (json.data);
 
  sHBWAAOJ = {
    name: sdata. platformInfo.platformUserId,
    lifeTimeKills : _.get (sdata, 'segments[0].stats.kills.value', "n/a"),
    lifeTimeDamage :_.get (sdata, "segments[0].stats.damage.value" ,  "n/a"),
     level :_.get         (sdata, "segments[0].stats.level.value", "n/a"),
     rank :_.get          (sdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),   
      rankImg: sdata.segments[0].stats.rankScore.metadata.iconUrl,
   main : "",
  mainName : '',
   mainUrl: ' ',
  };





  let legends=[];


  var i;

          for (i = 1; i <sdata.segments.length; i++) {

           // if segments[i].stats.kills.value does not exist make it equal 0
          const kills = _.get (sdata, 'segments[' + i + '].stats.kills.value', 0 );
          const name =         sdata.segments[i].metadata.name;
          const imgUrl =       sdata.segments[i].metadata.bgImageUrl;
          const legend = {kills, name, imgUrl};
          legends.push(legend);
          
          }
         
 
          var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

  //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
          main = legends.find(function(o){ return o.kills == topKills; })

       

  //         // display name and img as background
  sHBWAAOJ.mainName = main.name;
  sHBWAAOJ.mainUrl = main.imgUrl;
   



    return fetch (url5);
  })
  .then(response => response.json())
  .then(json => {
    let hdata = (json.data);
  
  hed_Is_TiltedOJ = {
    name: hdata. platformInfo.platformUserId,
    lifeTimeKills : _.get (hdata, 'segments[0].stats.kills.value', "n/a"),
    lifeTimeDamage :_.get (hdata, "segments[0].stats.damage.value" ,  "n/a"),
     level :_.get         (hdata, "segments[0].stats.level.value", "n/a"),
     rank :_.get          (hdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),   
   main : "",
       rankImg: hdata.segments[0].stats.rankScore.metadata.iconUrl,
  mainName : '',
   mainUrl: ' ',
  };



    return fetch (url6);
  })
  .then(response => response.json())
  .then(json => {
    let xdata = (json.data);

  xariusOJ = {
    name: xdata. platformInfo.platformUserId,
    lifeTimeKills : _.get (xdata, 'segments[0].stats.kills.value', "n/a"),
    lifeTimeDamage :_.get (xdata, "segments[0].stats.damage.value" ,  "n/a"),
     level :_.get         (xdata, "segments[0].stats.level.value", "n/a"),
     rank :_.get          (xdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),   
     rankImg: xdata.segments[0].stats.rankScore.metadata.iconUrl,
   main : "",
  mainName : '',
   mainUrl: ' ',
  };






  let legends=[];


  var i;

          for (i = 1; i <xdata.segments.length; i++) {

           // if segments[i].stats.kills.value does not exist make it equal 0
          const kills = _.get (xdata, 'segments[' + i + '].stats.kills.value', 0 );
          const name =         xdata.segments[i].metadata.name;
          const imgUrl =       xdata.segments[i].metadata.bgImageUrl;
          const legend = {kills, name, imgUrl};
          legends.push(legend);
          
          }
         
 
          var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

  //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
          main = legends.find(function(o){ return o.kills == topKills; })

       

  //         // display name and img as background
  xariusOJ.mainName = main.name;
  xariusOJ.mainUrl = main.imgUrl;
   


















  return fetch(url7);
    
  })
//  .then the rest of the requst 
.then(response => response.json())
.then(json => {
  let rdata = (json.data);

mahaloMerkyOJ = {
  name: rdata. platformInfo.platformUserId,
  lifeTimeKills : _.get (rdata, 'segments[0].stats.kills.value', "n/a"),
  lifeTimeDamage :_.get (rdata, "segments[0].stats.damage.value" ,  "n/a"),
   level :_.get         (rdata, "segments[0].stats.level.value", "n/a"),
   rank :_.get          (rdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),   
 main : "",
   rankImg: rdata.segments[0].stats.rankScore.metadata.iconUrl,
mainName : '',
 mainUrl: ' ',
};



let legends=[];


var i;

        for (i = 1; i <rdata.segments.length; i++) {

         // if segments[i].stats.kills.value does not exist make it equal 0
        const kills = _.get (rdata, 'segments[' + i + '].stats.kills.value', 0 );
        const name =         rdata.segments[i].metadata.name;
        const imgUrl =       rdata.segments[i].metadata.bgImageUrl;
        const legend = {kills, name, imgUrl};
        legends.push(legend);
        
        }
       

        var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

//         // uses topKills values and looks throught array of onjects and returns the onbject with that value
        main = legends.find(function(o){ return o.kills == topKills; })

     

//         // display name and img as background
mahaloMerkyOJ.mainName = main.name;
mahaloMerkyOJ.mainUrl = main.imgUrl;
 













return fetch (url8);
})

.then(response => response.json())
  .then(json => {
    let sfdata = (json.data);
  
  systolicFrame48OJ = {
    lifeTimeKills : _.get (sfdata, 'segments[0].stats.kills.value', "n/a"),
    lifeTimeDamage :_.get (sfdata, "segments[0].stats.damage.value" ,  "n/a"),
     level :_.get         (sfdata, "segments[0].stats.level.value", "n/a"),
     rank :_.get          (sfdata, "segments[0].stats.rankScore.metadata.rankName" , "n/a"),   
   rankImg: sfdata.segments[0].stats.rankScore.metadata.iconUrl,
   main : "",
  mainName : '',
   mainUrl: ' ',
  };



  let legends=[];


  var i;

          for (i = 1; i <sfdata.segments.length; i++) {

           // if segments[i].stats.kills.value does not exist make it equal 0
          const kills = _.get (sfdata, 'segments[' + i + '].stats.kills.value', 0 );
          const name =         sfdata.segments[i].metadata.name;
          const imgUrl =       sfdata.segments[i].metadata.bgImageUrl;
          const legend = {kills, name, imgUrl};
          legends.push(legend);
          
          }
         
 
          var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

  //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
          main = legends.find(function(o){ return o.kills == topKills; })

       

  //         // display name and img as background
  systolicFrame48OJ.mainName = main.name;
  systolicFrame48OJ.mainUrl = main.imgUrl;
   






  console.log(kingRothgardOJ);
  res.render ("landingpage", {
    kingRothgardOJ: kingRothgardOJ,
    minaXpotatoOJ: minaXpotatoOJ,
    mahaloMerkyOJ: mahaloMerkyOJ,
    sHBWAAOJ: sHBWAAOJ,
    Hed: hed_Is_TiltedOJ,
    m3llakkaOJ: m3llakkaOJ,
    xariusOJ: xariusOJ,
    systolicFrame48OJ: systolicFrame48OJ



  });
  })




  // .then res.render after you have called everyones info
  .catch(err => console.log(err));
   // this error will send error if there is any erros on the .then chain


    //             nameKey: name,
    //             lifeTimeKillsKey: lifeTimeKills,
    //             lifeTimeDamageKey: lifeTimeDamage,
    //             levelKey: level,
    //             rankKey: rank,
    //             mainNameKey: mainName,
    //             mainUrlKey: mainUrl
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // let name = "";
  
    // // KingRothgard   Origin
    
    // const url = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/KingRothgard?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
    
    // https.get(url, function (response) {

    //     let chunks = [];
    //     let  name = "";
    //     let lifeTimeKills = "";
    //     let lifeTimeDamage = "";
    //     let level = "";
    //     let rank = "";
    //     let legends=[];
    //     let main = "";
    //     let mainName;
    //     let mainUrl;

    //     response.on("data", function (data) {
    //         chunks.push(data);
    //     }).on('end', function () {

    //         let data = Buffer.concat(chunks);
    //         let kingRothgard = JSON.parse(data);


    //         // putting into varible
    //         name = kingRothgard.data.platformInfo.platformUserId;
           

    //         lifeTimeKills = kingRothgard.data.segments[0].stats.kills.value;
          

    //         lifeTimeDamage = kingRothgard.data.segments[0].stats.damage.value;
           

    //         level =kingRothgard.data.segments[0].stats.level.value;
           

    //         rank = kingRothgard.data.segments[0].stats.rankScore.metadata.iconUrl;
          



    //         var i;

    //         for (i = 1; i <13; i++) {

    //         const kills = kingRothgard.data.segments[i].stats.kills.value;
    //         const name = kingRothgard.data.segments[i].metadata.name;
    //         const imgUrl = kingRothgard.data.segments[i].metadata.bgImageUrl;
    //         const legend = {kills, name, imgUrl};
    //         legends.push(legend);

    //         }

    //         // compare all the values to find the highest 
            

    //         // find the max value in the array of objects
    //         var topKills = Math.max.apply(Math,legends.map(function(o){return o.kills;}))

    //         // uses topKills values and looks throught array of onjects and returns the onbject with that value
    //         main = legends.find(function(o){ return o.kills == topKills; })

         

    //         // display name and img as background
    //         mainName = main.name;
    //         mainUrl = main.imgUrl;
            
           
            
            
    //         res.render("landingpage", {
    //             nameKey: name,
    //             lifeTimeKillsKey: lifeTimeKills,
    //             lifeTimeDamageKey: lifeTimeDamage,
    //             levelKey: level,
    //             rankKey: rank,
    //             mainNameKey: mainName,
    //             mainUrlKey: mainUrl
                

    //             // end of res.render function 
    //          });
        
             

    //     // end of data processing ana back end
    //     });
      


    //     // end of get http request going to apex api
    // });











// end of  get "/" root request 
});
   





app.get("/:user", function(req, res){
  
    let requestedPlayer = req.params.user;
    let name = "hi";
    
    let player = "hi";
   console.log (requestedPlayer);
   
//  do https request with requestedPlayer
    let url = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/" + requestedPlayer + "?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";





  res.render("playerprofile" , {
    name: name  
  } )
});

















app.listen(2000, function () {
    console.log("SEVER IS LIVE");
});



// api format 
// TRN-Api-Key: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
// api key
// check postman fo