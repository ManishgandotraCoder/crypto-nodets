import { Validator } from 'node-input-validator';
import { Response, Request, NextFunction } from "express";
import { helper } from '../helpers/response-helper';
import { msg } from "../helpers/messages"

/** 
 * Middleware validation class
 */

export class validations  {

  async currencyValidation(req:Request, res:Response, next :NextFunction) {
    
    let ruleObj = {
          currency: 'required',
          coin: 'required',
          amount: 'required'
        }
    
    const v = new Validator(req.query, ruleObj);
    v.check().then((matched:any) => {
      var allErr = [];
      if (!matched) {
        for (let er in v.errors) {
          allErr.push(v.errors[er]["message"]);
        }
        // return res.status(400).send({ message: allErr });
        helper.success(res, msg.INVALID, allErr)
      } else {
        next();
      }
    });
  }
  

}
