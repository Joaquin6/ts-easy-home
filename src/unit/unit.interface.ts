import Sequelize from 'sequelize';

export interface UnitAttrs {
  id?: number;
  name?: string;
}

export interface Unit extends Sequelize.Instance<UnitAttrs>, UnitAttrs {}

export interface UnitModel extends Sequelize.Model<Unit, UnitAttrs> {}

export type UnitModelStatic = typeof Sequelize.Model & (
  new (values?: object, options?: Sequelize.BuildOptions) => UnitModel
);
