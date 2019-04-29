import Sequelize from "sequelize";
import sequelize from "..";

export interface BuildingAttrs {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Building extends Sequelize.Instance<BuildingAttrs>, BuildingAttrs {}

export interface BuildingModel extends Sequelize.Model<Building, BuildingAttrs> { }

export const Building: BuildingModel = sequelize.define<Building, BuildingAttrs>("buildings", {
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
