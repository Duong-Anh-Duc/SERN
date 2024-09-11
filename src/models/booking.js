module.exports = (sequelize, DataTypes) => {
    const Bookings = sequelize.define('Bookings', {
      statusId : {
        type : DataTypes.STRING
      },
      doctorId : {
        type : DataTypes.STRING
      },
      patientId : {
        type : DataTypes.INTEGER
      },
      date : {
        type : DataTypes.DATE
      },
      timeType : DataTypes.STRING
    });
    return Bookings;
  };
  