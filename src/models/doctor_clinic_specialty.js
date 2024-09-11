module.exports = (sequelize, DataTypes) => {
    const Doctor_Clinic_Specialty = sequelize.define('Doctor_Clinic_Specialty', {
      doctorId : {
        type : DataTypes.INTEGER
      },
      clinicId : {
        type : DataTypes.INTEGER
      },
      specialtyId : {
        type : DataTypes.INTEGER
      }
    });
    return Doctor_Clinic_Specialty;
  };
  