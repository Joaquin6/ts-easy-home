import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';

let sequelize: SequelizeInstance;

interface DBConfig {
  dialect: string;
  storage: string;
}

export const connect = (settings?: DBConfig) => {
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
