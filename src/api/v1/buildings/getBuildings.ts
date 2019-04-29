import * as express from 'express';
import HttpError from 'standard-http-error';

const { message } = new HttpError(500);

export default async function getBuildings(req: express.Request, res: express.Response) {
  const db = req.app.get('db');
  let buildings;

  try {
    buildings = await db.Model.Building.findAll();
  } catch (error) {
    return res.status(500).json({ message });
  }

  return res.json(buildings);
}
