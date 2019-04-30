import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';
import config from '../config/database';

let sequelize: SequelizeInstance;

export const connect = (settings = config) => {
  if (sequelize) {
    return sequelize;
  }

  const connectionString = settings && settings.dialect && settings.storage
    ? `${settings.dialect}://${settings.storage}`
    : 'sqlite://easyhome.sqlite';

  sequelize = new Sequelize(connectionString);

  return sequelize;
};

export default sequelize;
