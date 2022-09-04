require('dotenv').config();
const https = require("https");
// const fetch = require('node-fetch');


let url = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/Naff?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";


// fetch(url).then(function (data) {
//   console.log(data);
// }).catch(function (err) {
//   console.log(err);
// });


// const url = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/Naff?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";
    
    https.get(url, function (response) {

        let chunks = [];
        let  name = "";
        let lifeTimeKills = "";
        let lifeTimeDamage = "";
        let level = "";
        let rank = "";
        let legends=[];
        let main = "";
        let mainName;
        let mainUrl;

        response.on("data", function (data) {
            chunks.push(data);
        }).on('end', function () {

            let data = Buffer.concat(chunks);
            let Naff = JSON.parse(data);

            console.log(Naff);
        }
        )
      });