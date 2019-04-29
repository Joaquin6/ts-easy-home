import Sequelize from "sequelize";

import config from "../config/database";

const sequelize = new Sequelize(`${ config.dialect }://${ config.storage }`);

export default sequelize;