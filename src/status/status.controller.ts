import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import statusModel from './status.model';

class StatusController implements Controller {
  public path = '/status';
  public router = express.Router();
  private status = statusModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.status.getStatus);
    this.router.head(this.path, this.status.headStatus);
  }
}

export default StatusController;
