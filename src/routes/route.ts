import express from "express";
export const routes = express();
// Router lists
import {cryptorouter}  from "../router/crypto.router";
routes.use('/', cryptorouter);
