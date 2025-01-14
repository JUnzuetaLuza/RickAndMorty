const { DataTypes, ENUM } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: ENUM(
            "Alive",
            "Dead",
            "unknown",
         ),
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender: {
         type: ENUM(
            "Female",
            "Male",
            "Genderless",
            "unknown",
         ),
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   }, { timestamps: false });
};
