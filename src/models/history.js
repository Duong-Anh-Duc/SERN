module.exports = (sequelize, DataTypes) => {
    const Histories= sequelize.define('Histories', {
      patientId : {
        type : DataTypes.INTEGER
      },
      doctorId : {
        type : DataTypes.INTEGER
      },
      description : {
        type : DataTypes.TEXT
      },
      files : {
        type : DataTypes.TEXT
      }
    });
    return Histories;
  };
  