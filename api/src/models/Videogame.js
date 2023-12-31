const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      // allowNull: false,
      defaultValue: []
    },
  image: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  dateReleased: {
    type: DataTypes.DATEONLY,
    // allowNull: false,
  },
  rating: {
    type: DataTypes.DECIMAL,
    // allowNull: false,
  }
  },
  {
    timestamps: false
  });

  
};
