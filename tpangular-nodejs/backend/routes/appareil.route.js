const express = require("express");
const route = express.Router();
appareilList = [
{ name: "Machine à laver", statut: "Eteint" },
{ name: "Tv", statut: "Allumé" },
{ name: "Climatiseur", statut: "Eteint" },
{ name: "PC", statut: "Allumé" },
{ name: "Aspirateur", statut: "Eteint" },
];
route.get("/", (req, res) => {
res.status(200).json(appareilList);
});
module.exports = route;