const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//const db = require("./config/database");
const routerApiV1 = require("./server/routes/index");
const { PORT } = require("./config/config");
const port = 5000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

/* Ruta de ejemplo */
app.get("/", (req, res) => {
  return res.status(200).send("Hola desde express :D!");
});

/* Ruta principal */
app.use("/api/v1", routerApiV1);

/* Servidor escuchando */
app.listen(PORT, () => {
  console.log("Server listening at port: " + PORT);
});

/*
// Autenticación de la base de datos
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error DB => ", err));

// Servidor escuchando con la base de datos
//Sincroniza los esquemas (creados en la carpeta models) para crearse
db.sync({ force: false }).then(async () => {
  app.listen(PORT, () => {
    console.log("Server listening at port: " + PORT);
  });
});
*/
module.exports = app;
