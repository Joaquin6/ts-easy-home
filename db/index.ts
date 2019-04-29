import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';
import config from '../config/database';

let sequelize: SequelizeInstance;

export const connect = () => {
  if (sequelize) {
    return sequelize;
  }

  sequelize = new Sequelize(`${ config.dialect }://${ config.storage }`);

  return sequelize;
};

export default sequelize;
