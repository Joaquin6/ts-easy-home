import app from './src/app';
import db from './db';

(async () => {
  try {
    await db.authenticate();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed connection test', err);
    process.exit(1); // eslint-disable-line no-process-exit
  }

  app.set('db', db);

  const { port, timeout } = app.locals.config;
  // eslint-disable-next-line no-console
  const server = app.listen(port, () => console.log(`Application listening on port ${port}`));
  server.timeout = timeout;
})();
