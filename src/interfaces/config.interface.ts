export interface DBConfig {
  dialect: string;
  storage: string;
}

interface Config {
  database: DBConfig;
}

export default Config;
