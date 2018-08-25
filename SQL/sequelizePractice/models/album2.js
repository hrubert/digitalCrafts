'use strict';
module.exports = (sequelize, DataTypes) => {
  const album2 = sequelize.define('album2', {
    albumName: DataTypes.STRING,
    year: DataTypes.INTEGER,
    ArtistID: DataTypes.INTEGER
  }, {});
  album2.associate = function(models) {
    // associations can be defined here
  };
  return album2;
};