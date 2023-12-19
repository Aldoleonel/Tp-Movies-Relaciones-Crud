const express = require("express");
const router = express.Router();


const {
    list2,
    show,
    delete: remove,
    store,
    search     
    
  } = require("../controllers/APIS/moviesApiController");
  router
  .get("/movies2",list2)
  .get('/movies2/:id',show)
  .post("/movies2",store)
  .delete("/movies2/:id",remove)
  .get("/search", search)

  
  
  
  module.exports = router;