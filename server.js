"use strict";

const Hapi = require("hapi");
const mongoose = require("./db/mongoose");
const routes = require("./routes");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});
server.route(routes);

server.route({
  method: "GET",
  path: "/api",
  handler: (request, h) => {
    return "Hello api!";
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
