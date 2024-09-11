module.exports = (sequelize, DataTypes) => {
    const Clinics = sequelize.define('Clinics', {
      name : {
        type : DataTypes.STRING
      },
      address : {
        type : DataTypes.STRING
      },
      description : {
        type : DataTypes.STRING
      },
      image : {
        type : DataTypes.STRING
      }

    });
    return Clinics;
  };
  