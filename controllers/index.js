var knex = require('../db/knex.js');

module.exports = {

  main: function(req, res, next) {
    res.redirect('/pokemon');
  },

//View pokemon on home page
  viewAllPoke: function(req, res, next) {
    knex('pokemon').then((data) => {
        res.render('index', {pokemon: data});
      })
      .catch((err) => {
        console.error(err)
      });
    },

//Create new pokemon and add to table
  addPoke: function(req, res, next) {
        knex('pokemon')
          .insert(req.body, '*')
          .then((result) => {
            res.redirect('/pokemon');
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(400);
          });
      },

//Delete pokemon
deletePoke: function(req, res, next) {
  knex('pokemon')
  .where("id", req.params.id)
  .del()
  .then(()=>{
    res.redirect('/pokemon');
  })
  .catch((err) => {
    console.error(err)
  });
},

//Get to edit pokemon page
edit: function(req, res, next) {
  knex('pokemon')
    .where('id', req.params.id)
    .then((data)=>{

      knex('trainers')
      .then((data2)=>{

        res.render('edit', {pokemon: data[0], trainers: data2})
      })
    })
        .catch((err) => {
          console.error(err)
        });
    },

//Edit the pokemon
editPoke: function(req, res, next){
  knex('pokemon')
    .update(req.body)
    .where('id', req.params.id)
    .then(()=>{
      res.redirect('/show/'+req.params.id)
    })
    .catch((err) => {
      console.error(err)
    });
},

//Get to show page.
show: function(req, res, next) {
  knex('pokemon')
    .join ('trainers', 'trainers.id', "=", 'pokemon.trainer_id')
    .select ('pokemon.name', 'pokemon.cp', 'pokemon.in_gym', 'pokemon.trainer_id', 'trainers.name as trainersname')
    .where('pokemon.id', req.params.id)
    .then((data)=>{
      res.render('show', {pokemon: data[0]})
    })
    .catch((err) => {
      console.error(err)
    });
},

//View trainers on home trainers
  viewAllTrainers: function(req, res, next) {
    knex('trainers').then((data) => {
        res.render('trainers', {trainers: data});
      })
      .catch((err) => {
        console.error(err)
      });
    },

    //Get to show trainerspage.
    showTrainer: function(req, res, next) {
      knex('trainers')
        .where('trainers.id', req.params.id)
        .then((data2)=>{
          res.render('showTrainer', {trainers: data2[0]})
        })
        .catch((err) => {
          console.error(err)
        });
    },

//Get to the gym.
goToGym: function(req, res, next) {
  knex('pokemon').then((data) => {
      res.render('gym', {pokemon: data});
    })
    .catch((err) => {
      console.error(err)
    });
  }


}
