const express = require("express");
const MetasController = require("./Controllers/MetasController");

const routes = express.Router();

routes.get('/metas', MetasController.index);
routes.post('/metas', MetasController.create);
routes.delete("/metas/:id", MetasController.delete);
routes.put("/metas/:id", MetasController.update);


module.exports = routes;