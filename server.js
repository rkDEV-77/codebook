const jsonServer = require('json-server');
const jsonServerAuth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Setup json-server-auth as middleware
server.db = router.db; // Use the same db as json-server
server.use(jsonServerAuth);
server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
