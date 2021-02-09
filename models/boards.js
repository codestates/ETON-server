'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class boards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.users);
      this.hasMany(models.progresses);
    }
  };
  boards.init({
    title: DataTypes.STRING,
    prg_priority: DataTypes.STRING,
    admin_userid: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'boards',
  });
  return boards;
};