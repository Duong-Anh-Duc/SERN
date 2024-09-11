module.exports = (sequelize, DataTypes) => {
    const Schedules = sequelize.define('Schedules', {
      currentNumber : {
        type : DataTypes.INTEGER
      },
      maxNumber : {
        type : DataTypes.INTEGER
      },
      date : {
        type : DataTypes.DATE
      },
      timeType : {
        type : DataTypes.STRING
      },
      doctorID : {
        type : DataTypes.INTEGER
      }
    });
    return Schedules;
  };
  