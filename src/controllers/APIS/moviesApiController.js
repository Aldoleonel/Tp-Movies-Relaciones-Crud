const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
//const { title } = require("process");
const moment = require('moment');
const Actor_Movie = require("../../database/models/Actor_Movie");

//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController2 = {
  list2: (req, res) => {
    Movies.findAll({
        include : ['genre']
    }).then((movies) => {
     return res.status(200).json( {
        total: movies.length,
        data: movies,
        status: 200
     } );
    });
  },
  show: (req, res) => {
    Movies.findByPk(req.params.id)
    .then(movies => {
     return res.status(200).json( {
        data: movies,
        status: 200
     } );
    });
  },
  store: (req, res) => {
    console.log(req.body, "aaaaaaaaaaaaaaaaaaaaaaa");
    Movies.create(req.body)
    .then(movies => {
     return res.status(200).json( {
        data: movies,
        status: 200,
        created: 'ok'
     } );
    });
  },
  delete: (req, res) => {
    
    Movies.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(response => {
     return res.json(response);
    });
  },
  search: (req, res) => {
    
    Movies.findAll({
        where: {
            title: { [Op.like]: '%' + req.query.keyword.toLowerCase() + '%'}
        }
    })
    .then(movies => {
        if(movies.length > 0){
            return res.status(200).json(movies);
        }
     return res.status(200).json("No encontramos ninguna pelicula con " +req.query.keyword);
    });
}



}
module.exports = moviesController2;