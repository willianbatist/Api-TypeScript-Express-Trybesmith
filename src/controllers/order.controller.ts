import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  getAll = async (_req:Request, res:Response) => {
    const orders = await this.orderService.getAll();
    res.status(StatusCodes.OK).json(orders);
  };
}