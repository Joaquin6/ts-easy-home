import HttpException from './HttpException';

class PropertyNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `Property with id ${id} not found`);
  }
}

export default PropertyNotFoundException;
