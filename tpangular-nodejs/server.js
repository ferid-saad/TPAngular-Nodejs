const routeAppareil = require('./backend/routes/appareil.route')
const path = require("path")
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "backend/public")));
app.use("/api/appareils", routeAppareil);

app.listen(3001, () => {
console.log(`Server listening on port 3001...`);
});
