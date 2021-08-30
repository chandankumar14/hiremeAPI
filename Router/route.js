const express = require("express");

const CategoriesController = require("../Controller/Categories");
const TechnicianController = require("../Controller/Technicians")
const LocationController = require("../Controller/Location")
const Customercontroller = require("../Controller/Customer")

const Router = express.Router();

Router.get("/category", CategoriesController.GetCategory);
Router.post("/filter", TechnicianController.GetTechnician);
Router.get("/location", LocationController.getlocation);
Router.post("/cityByid", LocationController.getCityByid);
Router.post("/customer", Customercontroller.RegCustomer);
Router.post("/employee", TechnicianController.RegTechnician);
Router.get("/getAlltechnicina", TechnicianController.GetAllTechnician);

module.exports = Router;
