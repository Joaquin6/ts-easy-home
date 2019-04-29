interface DBConfig {
  dialect: any;
  storage: any;
}

const env: string = process.env.NODE_ENV || "development";
const config: DBConfig = require(`${__dirname}/database.json`)[env];

export default config;
