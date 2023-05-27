var _ = require("lodash");

function getMain(user) {

  console.log("hi1")

  let revenant = {
    legend: "Revenant",
    kills: _.get(user, "data.legends.all.Revenant.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/revenant.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/revenant.png"
  }

  //  legends.all.Revenant.data[0].value

  let crypto = {
    legend: "Crypto",
    kills: _.get(user, "data.legends.all.Crypto.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/crypto.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/crypto.png"
  }
  let horizon = {
    legend: "Horizon",
    kills: _.get(user, "data.legends.all.Horizon.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/horizon.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/horizon.png"
  }

  let gibraltar = {
    legend: "Girbraltar",
    kills: _.get(user, "data.legends.all.Gibraltar.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/gibraltar.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/gibraltar.png"
  }

  let wattson = {
    legend: "Watson",
    kills: _.get(user, "data.legends.all.Wattson.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/wattson.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/wattson.png"
  }

  let fuse = {
    legend: "Fuse",
    kills: _.get(user, "data.legends.all.Fuse.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/fuse.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/fuse.png"
  }

  let bangalore = {
    legend: "Bangalore",
    kills: _.get(user, "data.legends.all.Bangalore.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/bangalore.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/bangalore.png"

  }

  let wraith = {
    legend: "Wraith",
    kills: _.get(user, "data.legends.all.Wraith.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/wraith.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/wraith.png"
  }

  let octane = {
    legend: "Octane",
    kills: _.get(user, "data.legends.all.Octane.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/octane.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/octane.png"
  }

  let bloodhound = {
    legend: "Bloodhound",
    kills: _.get(user, "data.legends.all.Bloodhound.data[0].value ", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/bloodhound.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/bloodhound.png"
  }

  let caustic = {
    legend: "Caustic",
    kills: _.get(user, "data.legends.all.Caustic.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/caustic.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/caustic.png"
  }

  let lifeline = {
    legend: "Lifeline",
    kills: _.get(user, "data.legends.all.Lifeline.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/lifeline.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/lifeline.png"
  }

  let pathfinder = {
    legend: "Pathfinder",
    kills: _.get(user, "data.legends.all.Pathfinder.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/pathfinder.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/pathfinder.png"
  }

  let loba = {
    legend: "Loba",
    kills: _.get(user, "data.legends.all.Loba.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/loba.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/loba.png"
  }

  let mirage = {
    legend: "Mirage",
    kills: _.get(user, "data.legends.all.Mirage.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/mirage.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/mirage.png"
  }
  let rampart = {
    legend: "Rampart",

    kills: _.get(user, "data.legends.all.Rampart.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/rampart.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/rampart.png"
  }
  let valkyrie = {
    legend: "Valkyrie",

    kills: _.get(user, "data.legends.all.Valkyrie.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/valkyrie.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/valkrie.png"
  }
  let seer = {
    legend: "Seer",

    kills: _.get(user, "data.legends.all.Seer.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/seer.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/seer.png"
  }
  let ash = {
    legend: "Ash",

    kills: _.get(user, "data.legends.all.Ash.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/ash.jpg",
    urlIcon: "https://api.mozambiquehe.re/assets/icons/ash.png"
  }

  let madMaggie = {
    legend: "Mad Maggie",
    kills: _.get(user, "data.legends.all['Mad Maggie'].data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/mad%20maggie.jpg"
    ,
    urlIcon: "https://api.mozambiquehe.re/assets/icons/mad%20maggie.png"
  }

  let newcastle = {
    legend: "Newcastle",
    kills: _.get(user, "data.legends.all.Newcastle.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/newcastle.jpg",
    urlIcon: "https://static.wikia.nocookie.net/titanfall/images/7/7d/AL_Newcastle.png/revision/latest/scale-to-width-down/350?cb=20220518142135"
  }

  let vantage = {
    legend: "Vantage",
    kills: _.get(user, "data.legends.all.Vantage.data[0].value", "0"),
    url: "https://api.mozambiquehe.re/assets/banners/vantage.jpg",
    urlIcon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftitanfall.fandom.com%2Fwiki%2FVantage&psig=AOvVaw0ZAG6ftOcz5etPmsSmYbyF&ust=1665343436510000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIifqPCt0foCFQAAAAAdAAAAABAE"
  }

  let legends = [revenant, crypto, horizon, gibraltar, wattson, fuse, bangalore, wraith, octane, bloodhound, caustic, lifeline, pathfinder, loba, mirage, rampart, valkyrie, seer, ash, madMaggie, newcastle, vantage]



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
    console.log("hi2")
    return main;
  }
}


module.exports = getMain;
