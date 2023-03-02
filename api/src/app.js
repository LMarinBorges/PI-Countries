const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const { notFound } = require("./helpers/response.js");

require("./db.js");

const server = express();

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Rutas de la API.
server.use("/", routes);

// Handler para errores 404.
server.use("*", (_req, res) => notFound(res, "Page not found."));

// Handler generico para errores del servidor.
server.use((err, _req, res, next) => {
  if (res.headersSent) return next(err);
  console.error(`Unhandled server error: ${err}`);
  res.status(500).send({
    code: "internal_server",
    status: 500,
    message: err?.message || err.toString(),
  });
});

module.exports = server;
