import HttpError from 'standard-http-error';

const { message } = new HttpError(500);

export default async function getBuildings(req: any, res: any) {
    const db = req.app.get('db');
    let buildings;

    try {
        buildings = await db.Model.Building.findAll();
    } catch (error) {
        req.log.error(error);
        return res.status(500).json({ message });
    }

    return res.json(buildings);
}
