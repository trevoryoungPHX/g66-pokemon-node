var knex = require('knex');

module.exports = {

  main: function(req, res, next) {
    res.render('index', { title: 'Express' });
  },


};
