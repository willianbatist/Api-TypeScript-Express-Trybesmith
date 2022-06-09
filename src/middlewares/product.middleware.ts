import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/product';

function validationProductName(req: Request, res: Response, next: NextFunction) {
  const product: Product = req.body;
  if (!product.name) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (typeof product.name !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" must be a string' });
  }
  if (product.name.length > 2) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
}

export = { validationProductName };