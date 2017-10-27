//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");


module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', index.viewAllPoke);

  app.post('/pokemon', index.addPoke);

  app.get('/delete/:id', index.deletePoke);

  app.get('/edit/:id', index.edit);

  app.post('/edit/:id', index.editPoke);

  app.get('/show/:id', index.show);

}
