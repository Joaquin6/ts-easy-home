import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { Sequelize } from 'sequelize';
import * as sequelize from '../db/index';
import Config, { DBConfig } from './interfaces/config.interface';
import Controller from './interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

class App {
  public app: express.Application;
  public database: Sequelize;

  constructor(config: Config) {
    this.app = express();
    this.app.set('config', config);

    this.connectToTheDatabase(config.database);
  }

  public initialize(controllers: Controller[]) {
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private async connectToTheDatabase(config: DBConfig) {
    this.database = sequelize.connect(config);

    this.app.set('database', this.database);
  }
}

export default App;
