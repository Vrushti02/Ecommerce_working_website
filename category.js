"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define("category", {
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
      },
    categoryName: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    status:DataTypes.BOOLEAN,
    isSubcategory:DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    image:DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    tableName: "categories"
  }
  );

  return category;
};