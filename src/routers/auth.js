const controller = require('../controllers/auth');

module.exports = (app) => {
  app.post('/auth/register', controller.registrar)
  app.post('/auth/login', controller.login)
}