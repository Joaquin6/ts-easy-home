import HttpError from 'standard-http-error';

const { message } = new HttpError(500);

export default async function getBuilding(req: any, res: any, next: any) {
  const db = req.app.get('db');
  const { id } = req.params;

  try {
    const [locatedBuilding] = await db.Model.Building.findOne({ where: { id } });
    if (!locatedBuilding) {
      return next(new HttpError(404, `No existing job with id "${id}"`));
    }
    return res.json(locatedBuilding);
  } catch (error) {
    req.log.error(error);
    return res.status(500).json({ message });
  }
}
