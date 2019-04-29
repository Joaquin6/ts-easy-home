import * as express from 'express';
import BuildingNotFoundException from '../exceptions/BuildingNotFoundException';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateBuildingDto from './building.dto';
import buildingModel from './building.model';

class BuildingController implements Controller {
  public path = '/buildings';
  public router = express.Router();
  private building = buildingModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get(this.path, this.getAllBuildings)
      .post(this.path, validationMiddleware(CreateBuildingDto), this.createBuilding);

    this.router.get(`${this.path}/:id`, this.getBuildingById);
  }

  private getAllBuildings = async (request: express.Request, response: express.Response) => {
    const buildings = await this.building.findAll();

    response.send(buildings);
  }

  private getBuildingById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const building = await this.building.findByPk(id);

    if (building) {
      response.send(building);
    } else {
      next(new BuildingNotFoundException(id));
    }
  }

  private createBuilding = async (request: express.Request, response: express.Response) => {
    const buildingData: CreateBuildingDto = request.body;
    const createdBuilding = await this.building.create(buildingData);

    response.send(createdBuilding);
  }
}

export default BuildingController;
