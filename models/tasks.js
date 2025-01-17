"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.progresses, {
        foreignKey: "progress_id",
        //! aesop 추가
        onDelete: "CASCADE",
      });
    }
  }
  tasks.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      progress_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tasks",
    }
  );
  return tasks;
};
