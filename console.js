const fetch = require('node-fetch');


let url = "https://public-api.tracker.gg/v2/apex/standard/profile/origin/KingRothgard?" + process.env.API + "&Accept=json&Accept-Encoding=gzip";

fetch(url).then(gotData).catch(gotErr);
  
  function gotData(data) {
    console.log(data);
  }
  
  function gotErr(err) {
    console.log(err);
  }
  