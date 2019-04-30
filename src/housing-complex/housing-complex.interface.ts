import Sequelize from 'sequelize';

export interface HousingComplexAttrs {
  id?: number;
  name?: string;
  city?: string;
  createdAt?: Date;
  updatedAt?: Date;
  constructionDate?: Date;
}

export default interface HousingComplex extends Sequelize.Instance<HousingComplexAttrs>, HousingComplexAttrs {}

export interface HousingComplexModel extends Sequelize.Model<HousingComplex, HousingComplexAttrs> { }

export type HousingComplexModelStatic = typeof Sequelize.Model & (
  new (values?: object, options?: Sequelize.BuildOptions) => HousingComplexModel
);
