const controller = require('../controllers/produtos');

module.exports = (app) => {
  app.get('/produtos', controller.getProdutos);
  app.post('/produtos', controller.postProduto);
}
