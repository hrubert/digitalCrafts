'use strict';
module.exports = (sequelize, DataTypes) => {
  const song2 = sequelize.define('song2', {
    name: DataTypes.STRING,
    duration: DataTypes.TIME,
    albumID: DataTypes.INTEGER
  }, {});
  song2.associate = function(models) {
    // associations can be defined here
  };
  return song2;
};