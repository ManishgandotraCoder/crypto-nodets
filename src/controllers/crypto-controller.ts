import { Response, Request, NextFunction } from "express";
import { helper } from '../helpers/response-helper';
import * as express from "express";
import { msg } from "../helpers/messages"


export class CryptoController {
  async getCryptoCurrencies(req: Request, res: Response, next: NextFunction) {
    try {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en', {
        method: 'GET'
      }).then(response => response.json())
        .then((data: any) => {
          
          if (data?.status?.error_code) {
            helper.error(res, msg.SERVER_ERROR, data)
          } else {

            helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, data)
          }
        })
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, null)
    }
  }
  async convertCurrencyPrice(req: Request, res: Response, next: NextFunction) {
    try {
      const { currency, coin, amount } = req.query;

      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=${coin}`, {
        method: 'GET'
      }).then(response => response.json())
        .then((data: any) => {
          if (data?.status?.error_code) {
            helper.error(res, msg.SERVER_ERROR, data)
          } else {
            let _curr: any = currency
            let _coin: any = coin
            helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, (data[_curr][_coin]) * (Number(amount)))
          }
        })
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, null)
    }
  }
}

