const express = require("express");

const CategoriesController = require("../Controller/Categories");
const TechnicianController = require("../Controller/Technicians")

const Router = express.Router();

Router.get("/category", CategoriesController.GetCategory);
Router.post("/filter", TechnicianController.GetTechnician);

module.exports = Router;
