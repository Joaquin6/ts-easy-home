import { Sequelize } from 'sequelize';
import config from '../config/database';

let sequelize: Sequelize;

export const connect = () => {
  if (sequelize) {
    return sequelize;
  }

  sequelize = new Sequelize(`${ config.dialect }://${ config.storage }`);

  return sequelize;
};

export default sequelize;
