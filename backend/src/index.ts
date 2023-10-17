import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";

const app : Application = express();

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8888",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

import db from "./models";

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Node.js Server Running." });
});

import routes from "./routes/routes";

app.use("/api", routes);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});