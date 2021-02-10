"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class progresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.boards,{
      //   foreignKey : 'board_id'
      // })
      this.belongsTo(models.boards, {
        foreignKey: "board_id",
      });
      this.hasMany(models.tasks);
    }
  }
  progresses.init(
    {
      title: DataTypes.STRING,
      task_priority: DataTypes.STRING,
      board_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "progresses",
    }
  );
  return progresses;
};
