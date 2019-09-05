import test from 'ava';

import { startServer } from '../src';

test('starting the server works', (t) => {
  const server = startServer();
  server.close();
  t.pass();
});
