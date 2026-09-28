require("dotenv").config();

const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const config = require("./pkg/config");
require("./pkg/db");

const {
  login,
  register,
  refreshToken,
  resetPassword,
} = require("./handlers/auth");

const {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("./handlers/accounts");

const {
  getAllOrders,
  getOrderById,
  getMyOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("./handlers/orders");

const {
  getCharacters,
  getCharacter,
  getLocations,
  getEpisodes,
} = require("./handlers/rickandmorty");

const api = express();

api.use(express.json());

api.use(
  jwt({
    secret: config.getSection("development").jwt,
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/v1/auth/login", "/api/v1/auth/register"],
  }),
);

api.post("/api/v1/auth/login", login);

api.post("/api/v1/auth/register", register);

api.post("/api/v1/auth/refreshToken", refreshToken);

api.post("/api/v1/auth/resetPassword", resetPassword);

api.get("/api/v1/accounts", getAllAccounts);

api.get("/api/v1/accounts/:id", getAccountById);

api.post("/api/v1/accounts", createAccount);

api.patch("/api/v1/accounts/:id", updateAccount);

api.delete("/api/v1/accounts/:id", deleteAccount);

api.get("/api/v1/orders", getAllOrders);

api.get("/api/v1/orders/:id", getOrderById);

api.get("/api/v1/my-orders", getMyOrders);

api.post("/api/v1/orders", createOrder);

api.patch("/api/v1/orders/:id", updateOrder);

api.delete("/api/v1/orders/:id", deleteOrder);

api.get("/api/v1/rickandmorty/characters", getCharacters);

api.get("/api/v1/rickandmorty/characters/:id", getCharacter);

api.get("/api/v1/rickandmorty/locations", getLocations);

api.get("/api/v1/rickandmorty/episodes", getEpisodes);

api.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.status(401).send("Invalid token!");
  }

  next(err);
});

api.listen(config.getSection("development").port, (err) => {
  err
    ? console.error(err)
    : console.log(
        `Server started on port ${config.getSection("development").port}`,
      );
});
