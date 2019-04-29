import * as express from 'express';
import HttpError from 'standard-http-error';

const { message } = new HttpError(500);

export default async function getBuilding(req: express.Request, res: express.Response, next: express.NextFunction) {
  const db = req.app.get('db');
  const { id } = req.params;

  try {
    const [locatedBuilding] = await db.Model.Building.findOne({ where: { id } });
    if (!locatedBuilding) {
      return next(new HttpError(404, `No existing job with id "${id}"`));
    }
    return res.json(locatedBuilding);
  } catch (error) {
    return res.status(500).json({ message });
  }
}
