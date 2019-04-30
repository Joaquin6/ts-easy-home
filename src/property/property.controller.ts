import * as express from 'express';

import PropertyNotFoundException from '../exceptions/PropertyNotFoundException';
import Controller from '../interfaces/controller.interface';
import CreatePropertyDto from './property.dto';

import buildingModel from '../building/building.model';
import housingComplexModel from '../housing-complex/housing-complex.model';
import validationMiddleware from '../middleware/validation.middleware';
import unitModel from '../unit/unit.model';
import propertyModel from './property.model';

class PropertyController implements Controller {
  public path = '/properties';
  public router = express.Router();
  private unit = unitModel;
  private building = buildingModel;
  private property = propertyModel;
  private housingComplex = housingComplexModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(this.path)
        .get(this.getAllProperties)
        .post(validationMiddleware(CreatePropertyDto), this.createProperty);

    this.router.get(`${this.path}/:id`, this.getPropertyById);
  }

  private getAllProperties = async (request: express.Request, response: express.Response) => {
    const buildings = await this.building.findAll();
    const housingComplex = await this.housingComplex.findAll();

    const properties = this.property.groupByCity(buildings, housingComplex);

    response.send(properties);
  }

  private getPropertyById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;

    let property = await this.building.findByPk(id);

    if (!property) {
      property = await this.housingComplex.findByPk(id);
    }

    if (property) {
      response.send(property);
    } else {
      next(new PropertyNotFoundException(id));
    }
  }

  private createProperty = async (request: express.Request, response: express.Response) => {
    const propertyData: CreatePropertyDto = request.body;
    let createdProperty;

    if (propertyData.type === 'building') {
      createdProperty = await this.building.create(propertyData);
    } else {
      createdProperty = await this.housingComplex.create(propertyData);
    }

    response.send(createdProperty);
  }
}

export default PropertyController;
