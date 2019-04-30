import * as express from 'express';
import { freemem, hostname, loadavg, totalmem, uptime } from 'os';
import { v4 as uuid } from 'uuid';
import Status from './status.interface';

const runId = uuid();

function getStatus(req: express.Request, res: express.Response) {
  const { pid } = process;
  const { rss, heapUsed, heapTotal } = process.memoryUsage();

  const status: Status = {
    pid,
    rss,
    runId,
    heapTotal,
    load: loadavg(),
    uptime: uptime(),
    hostname: hostname(),
    name: 'hiring-scaffolding',
    heapUsage: ((heapUsed / heapTotal) * 100),
    memoryUsage: 100 - ((freemem() / totalmem()) * 100),
  };

  res.status(200).json(status).end();
}

function headStatus(req: express.Request, res: express.Response) {
  return res.end();
}

const statusModel = {
  getStatus,
  headStatus,
};

export default statusModel;
