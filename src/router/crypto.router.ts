import express from "express";

export const cryptorouter = express.Router();
import * as controller from "../controllers/main-controller"
import * as middleware from "../middlewares"

//Get crypto CurrencyList 
cryptorouter.get('/crypto/',
    controller.crypto.getCryptoCurrencies
)

// Convert crypto price in different currencies
cryptorouter.get('/crypto/conversion',
    middleware.data.rules.currencyValidation,
    controller.crypto.convertCurrencyPrice
)
