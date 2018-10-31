const DT = require('sequelize').Sequelize;

var sequelize = require("./database_config.js");
var User = sequelize.define("user", { 
  // the routeName gets saved as a string
    //valuation_id     : {type:DT.UUID, defaultValue:DT.UUIDV4},
    username        : DT.STRING,
    password        : DT.STRING,
    github_id       : DT.STRING,
    email_address   : DT.STRING(320), 

}, 
{
  paranoid:true,
}
);



User.prototype.validPassword = function(password) {
  
  console.log("Password from the DB:" , this.password)
  console.log("Password from the Client :" , password)
  return (this.password === password)
}

// Syncs with DB
User.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = User;