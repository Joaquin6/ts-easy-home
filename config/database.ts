interface DBConfig {
  dialect: string;
  storage: string;
}

const env: string = process.env.NODE_ENV || 'development';
const config: DBConfig = require(`${__dirname}/database.json`)[env]; // tslint:disable-line

export default config;
