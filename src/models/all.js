module.exports = (sequelize, DataTypes) => {
    const Alls = sequelize.define('Alls', {
      key: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      valueEn: {
        type: DataTypes.STRING
      },
      valueVi: {
        type: DataTypes.STRING
      }
    });
    return Alls;
  };
  