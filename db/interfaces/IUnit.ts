import Sequelize from 'sequelize';

export interface UnitAttrs {
  id?: number;
  name?: string;
  type?: string;
}

export default interface Unit extends Sequelize.Instance<UnitAttrs>, UnitAttrs {}

export interface UnitModel extends Sequelize.Model<Unit, UnitAttrs> { }
