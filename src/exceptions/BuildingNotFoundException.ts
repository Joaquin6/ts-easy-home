import HttpException from './HttpException';

class BuildingNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Building with id ${id} not found`);
  }
}

export default BuildingNotFoundException;
