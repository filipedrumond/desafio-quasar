const dbServer = (port) => {
  const path = require('path');

  const jsonServer = require('json-server');
  const server = jsonServer.create();
  const router = jsonServer.router(path.join(__dirname, '/db/db.json'));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  // url é tipo http://localhost:27019/produtos
  return server.listen(port, () => {
      console.log('JSON Server API disfarçada na porta 🔹', ':' + port, '🔹');
  });
};
dbServer(27019);