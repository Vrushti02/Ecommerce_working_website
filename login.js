"use strict";

const { DATE } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define("login",
   {
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
      },
    email: DataTypes.STRING,
    password: DataTypes.STRING,

    createdAt:{
        type: DataTypes.DATE,
        defaultValue:new Date(),
        allowNull: false
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: true
    },
    deletedAt:{
        type: DataTypes.DATE,
        allowNull: true
    }
},
  {
    tableName: "logins"
  }
  );

  return login;
};