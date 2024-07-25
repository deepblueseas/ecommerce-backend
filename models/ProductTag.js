const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class ProductTag extends Model {}
// This is a through model which joins tables
// because it facilitates a Many-to-Many relationship

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    // Products belong to many Tags
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product', 
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },

    // And Tags can belong to many Products
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', 
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;