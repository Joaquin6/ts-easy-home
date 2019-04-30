import HttpException from './HttpException';

class UnitNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Unit with id ${id} not found`);
  }
}

export default UnitNotFoundException;
