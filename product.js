"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
      },
    productName: DataTypes.STRING,
    mrp: DataTypes.INTEGER,
    price:DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER,
    productSKU: DataTypes.STRING,
    image:DataTypes.STRING,
    brandId:DataTypes.INTEGER,
    EANnumber:DataTypes.INTEGER,
    description:DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    tableName: "products"
  }
  );

  return product;
};