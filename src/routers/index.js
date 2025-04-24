const exampleRoute = require('./example');
const produtosRoute = require('./produtos');
const authRoute = require('./auth');

module.exports = (app) => {
  exampleRoute(app);
  produtosRoute(app);
  authRoute(app);
}