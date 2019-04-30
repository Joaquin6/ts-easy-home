import * as express from 'express';
import * as sequelize from 'sequelize';
import * as request from 'supertest';
import App from '../../app';
import StatusController from '../status.controller';
import statusModel from '../status.model';

jest.mock('sequelize');
jest.mock('../status.model');

describe('The StatusController', () => {
  let app: App;
  let server: any;
  let config: {
    database: {
      dialect: string,
      storage: string,
    },
  };
  let statusController: StatusController;

  beforeEach(() => {
    config = {
      database: {
        dialect: 'sqlite',
        storage: 'easyhome.sqlite',
      },
    };

    statusModel.getStatus = jest.fn((req, res) => res.status(200).json({}).end());
    statusModel.headStatus = jest.fn((req, res) => res.end());

    statusController = new StatusController();

    app = new App(config);
    app.initialize([statusController]);
    server = app.getServer();
  });

  describe('GET /', () => {
    it('response with JSON payload', async () => {
      const res = await request(server).get('/status');

      expect(res.header['content-type']).toContain('application/json');
      expect(res.status).toEqual(200);
      expect(res.body).toBeInstanceOf(Object);
    });
  });

  describe('HEAD /', () => {
    it('immidiately ends the response', async () => {
      const res = await request(server).head('/status');

      expect(res.status).toEqual(200);
    });
  });
});
