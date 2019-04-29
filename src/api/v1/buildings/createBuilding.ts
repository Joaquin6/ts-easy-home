import HttpError from 'standard-http-error';

const { message } = new HttpError(500);

module.exports = async function createBuilding(req: any, res: any, next: any) {
  const db = req.app.get('db');

  try {
    const locatedBuilding = await db.Model.Building.create({ name: 'Building' });
    return res.json(locatedBuilding);
  } catch (error) {
    req.log.error(error);
    return res.status(500).json({ message });
  }
};
