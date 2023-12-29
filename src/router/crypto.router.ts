import express from "express";

export const cryptorouter = express.Router();
import * as controller from "../controllers/main-controller"
import * as middleware from "../middlewares"

cryptorouter.get('/crypto/',
    controller.crypto.getCryptoCurrencies
)
cryptorouter.get('/crypto/conversion',
    middleware.data.rules.currencyValidation,
    controller.crypto.convertCurrencyPrice
)
