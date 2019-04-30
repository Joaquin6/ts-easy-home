import Sequelize from 'sequelize';

export interface BuildingAttrs {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Building extends Sequelize.Instance<BuildingAttrs>, BuildingAttrs {}

export interface BuildingModel extends Sequelize.Model<Building, BuildingAttrs> {}

export type BuildingModelStatic = typeof Sequelize.Model & (
  new (values?: object, options?: Sequelize.BuildOptions) => BuildingModel
);
