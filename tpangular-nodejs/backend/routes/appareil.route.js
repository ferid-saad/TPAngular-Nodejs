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
route.get("/", (req, res) => {
Appareil.find()
.then((appareils) => res.status(200).json(appareils))
.catch((error) => res.status(400).json({ error }));
});
route.get("/:id", (req, res) => {
Appareil.findOne({ _id: req.params.id })
.then((appareil) => res.status(200).json(appareil))
.catch((error) => res.status(404).json({ error }));
});
route.post("/", (req, res) => {
const appareil = new Appareil({
...req.body,
});
appareil
.save()
.then(() => res.status(201).json({ message: "Appareil enregistré !" }))
.catch((error) => res.status(400).json({ error }));
});
route.delete("/:id", (req, res) => {
Appareil.deleteOne({ _id: req.params.id })
.then(() => res.status(200).json({ message: "Appareil supprimé !" }))
.catch((error) => res.status(400).json({ error }));
});
route.put("/:id", (req, res) => {
Appareil.updateOne(
{ _id: req.params.id },
{ ...req.body, _id: req.params.id }
)
.then(() => res.status(200).json({ message: "Appareil modifié !" }))
.catch((error) => res.status(400).json({ error }));
});

module.exports = route;