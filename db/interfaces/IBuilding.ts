import Sequelize from 'sequelize';

export interface IBuildingAttrs {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default interface IBuilding extends Sequelize.Instance<IBuildingAttrs>, IBuildingAttrs {}

export interface IBuildingModel extends Sequelize.Model<IBuilding, IBuildingAttrs> { }
