import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';
import config from '../config/database';

let db: SequelizeInstance;

export const connect = (settings = config) => {
  if (db) {
    return db;
  }

  const connectionString = settings && settings.dialect && settings.storage
    ? `${settings.dialect}://${settings.storage}`
    : 'sqlite://easyhome.sqlite';

  db = new Sequelize(connectionString);

  return db;
};

export default db;
