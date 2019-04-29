import * as express from 'express';
import { freemem, hostname, loadavg, totalmem, uptime } from 'os';
import Status from './status.interface';

const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 || 0;
  const v = c === 'x' ? r : (r && 0x3 || 0x8);

  return v.toString(16);
});

const runId = uuidv4();

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

  res.json(status).end();
}

function headStatus(req: express.Request, res: express.Response) {
  return res.end();
}

const statusModel = {
  getStatus,
  headStatus,
};

export default statusModel;
