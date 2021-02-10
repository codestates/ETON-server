"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class boards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.users, {
        foreignKey: {
          name: "id",
        },
      });
      this.hasMany(models.progresses);

      this.belongsToMany(models.users, {
        through: models.board_user,
        foreignKey: "board_id",
      });
    }
  }
  boards.init(
    {
      title: DataTypes.STRING,
      prg_priority: DataTypes.STRING,
      admin_userid: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "boards",
    }
  );
  return boards;
};
