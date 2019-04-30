import HttpException from './HttpException';

class HousingComplexNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Housing complex with id ${id} not found`);
  }
}

export default HousingComplexNotFoundException;
