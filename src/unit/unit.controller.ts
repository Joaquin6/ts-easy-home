import * as express from 'express';
import UnitNotFoundException from '../exceptions/UnitNotFoundException';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUnitDto from './unit.dto';
import unitModel from './unit.model';

class UnitController implements Controller {
  public path = '/units';
  public router = express.Router();
  private unit = unitModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get(this.path, this.getAllUnits)
      .post(this.path, validationMiddleware(CreateUnitDto), this.createUnit);

    this.router.get(`${this.path}/:id`, this.getUnitById);
  }

  private getAllUnits = async (request: express.Request, response: express.Response) => {
    const units = await this.unit.findAll();

    response.send(units);
  }

  private getUnitById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const unit = await this.unit.findByPk(id);

    if (unit) {
      response.send(unit);
    } else {
      next(new UnitNotFoundException(id));
    }
  }

  private createUnit = async (request: express.Request, response: express.Response) => {
    const unitData: CreateUnitDto = request.body;
    const createdUnit = await this.unit.create(unitData);

    response.send(createdUnit);
  }
}

export default UnitController;
