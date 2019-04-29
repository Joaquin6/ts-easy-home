import Sequelize from "sequelize";
import sequelize from "..";

export interface IBuildingAttrs {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IBuilding extends Sequelize.Instance<IBuildingAttrs>, IBuildingAttrs {}

export interface IBuildingModel extends Sequelize.Model<IBuilding, IBuildingAttrs> { }

export default sequelize.define<IBuilding, IBuildingAttrs>("buildings", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});
