module.exports = (sequelize, DataTypes) => {
    const Specialties = sequelize.define('Specialties', {
      name : {
        type : DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.STRING
      },
    });
    return Specialties;
  };
  