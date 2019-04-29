import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    HOST: str(),
    PORT: port(),
  });
}

export default validateEnv;
