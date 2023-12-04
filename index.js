const Me = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({text :`Hello I'm ${Me.name} from ${Me.campus}`}));
