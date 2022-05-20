


const objet = require("./information.js")
let cowsay = require("cowsay");





console.log(
    cowsay.say({
      text: `Je suis ${objet.name}, du campus ${objet.campus}`,
      e: "oO",
      T: "U ",
    })
  );