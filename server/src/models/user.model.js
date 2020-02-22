'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    permissionLevel: DataTypes.INTEGER
  }, {})
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
