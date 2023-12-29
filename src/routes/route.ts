import express from "express";
export const routes = express();

import {cryptorouter}  from "../router/crypto.router";
routes.use('/', cryptorouter);
