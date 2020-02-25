'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskReturn = sequelize.define('TaskReturn', {
    name: DataTypes.STRING,
    command: DataTypes.STRING,
    stdout: DataTypes.TEXT
  }, {});
  TaskReturn.associate = function (models) {
    // associations can be defined here
  };
  return TaskReturn;
};