import Sequelize from 'sequelize';

export interface BuildingAttrs {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  city?: string;
}

export default interface Building extends Sequelize.Instance<BuildingAttrs>, BuildingAttrs {}

export interface BuildingModel extends Sequelize.Model<Building, BuildingAttrs> { }
