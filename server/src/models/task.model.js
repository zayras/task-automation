'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    remote: DataTypes.STRING,
    port: DataTypes.STRING,
    criteria: DataTypes.STRING,
    commands: DataTypes.STRING,
    delay: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {})
  Task.associate = function (models) {
    // associations can be defined here
    // @TODO add commands later
  }
  return Task
}