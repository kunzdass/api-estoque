const exampleRoute = require('./example');
const produtosRoute = require('./produtos');

module.exports = (app) => {
  exampleRoute(app);
  produtosRoute(app);
}