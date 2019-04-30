import * as request from 'supertest';
import App from '../../app';
import BuildingController from '../building.controller';

describe('The BuildingController', () => {
  let app: App;
  let server: any;
  let config: {
    database: {
      dialect: string,
      storage: string,
    },
  };
  let controller: BuildingController;

  beforeEach(() => {
    config = {
      database: {
        dialect: 'sqlite',
        storage: 'easyhome.sqlite',
      },
    };

    controller = new BuildingController();

    app = new App(config);
    app.initialize([controller]);
    server = app.getServer();
  });

  describe('GET /buildings', () => {
    it('response with JSON payload', async () => {
      const res = await request(server).get('/buildings');

      expect(res.header['content-type']).toContain('application/json');
      expect(res.status).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
    });
  });
});
