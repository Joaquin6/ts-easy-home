import * as express from 'express';
import HousingComplexNotFoundException from '../exceptions/HousingComplexNotFoundException';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateHousingComplexDto from './housing-complex.dto';
import housingComplexModel from './housing-complex.model';

class HousingComplexController implements Controller {
  public path = '/housing';
  public router = express.Router();
  private housingComplex = housingComplexModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get(this.path, this.getAllHousingComplex)
      .post(this.path, validationMiddleware(CreateHousingComplexDto), this.createHousingComplex);

    this.router.get(`${this.path}/:id`, this.getHousingComplexById);
  }

  private getAllHousingComplex = async (request: express.Request, response: express.Response) => {
    const housingComplex = await this.housingComplex.findAll();

    response.send(housingComplex);
  }

  private getHousingComplexById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const housingComplex = await this.housingComplex.findByPk(id);

    if (housingComplex) {
      response.send(housingComplex);
    } else {
      next(new HousingComplexNotFoundException(id));
    }
  }

  private createHousingComplex = async (request: express.Request, response: express.Response) => {
    const housingComplexData: CreateHousingComplexDto = request.body;
    const createdHousingComplex = await this.housingComplex.create(housingComplexData);

    response.send(createdHousingComplex);
  }
}

export default HousingComplexController;
