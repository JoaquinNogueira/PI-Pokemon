const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('type', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {timestamps: false}); // no quiero que se generen los campos de fecha de creacion y actualizacion;
}; 