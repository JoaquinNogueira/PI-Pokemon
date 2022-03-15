const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id : {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {timestamps: false}); // no quiero que se generen los campos de fecha de creacion y actualizacion;);
};
