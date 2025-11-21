const mongoose = require("mongoose");
const routeAppareil = require('./backend/routes/appareil.route')
const path = require("path")
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "backend/public")));
app.use("/api/appareils", routeAppareil);

mongoose
.connect(
"mongodb+srv://fersd2018_db_user:Twv9GXoR4GGivZ9H@appareilsdb.tkqork3.mongodb.net/"
)
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));

app.listen(3001, () => {
console.log(`Server listening on port 3001...`);
});
