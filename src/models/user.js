module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING
    },
    password : {
      type : DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    address : {
      type : DataTypes.STRING
    },
    phonenumber : {
      type : DataTypes.STRING
    },
    gender : {
      type : DataTypes.BOOLEAN
    },
    image : {
      type : DataTypes.STRING
    },
    roleId : {
      type : DataTypes.STRING
    },
    positionID : {
      type : DataTypes.STRING
    }
  });
  return User;
};
