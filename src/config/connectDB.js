const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('anhduc', 'root', 'duckhiemcg', {
  host: 'localhost',
  dialect: 'mysql',
  logging : false
});
module.exports.connectDB = async() => {
  try{
    await sequelize.authenticate();
    console.log("Connection success!")
  }catch(error){
    console.error("Connection fail! :", error)
  }
}