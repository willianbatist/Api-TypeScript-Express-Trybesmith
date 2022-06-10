import express from 'express';
import ProductsController from './controllers/product.controller';
import UsersController from './controllers/user.controller';
import OrderController from './controllers/order.controller';
import { validationProductName, validationProductAmount } from './middlewares/product.middleware';
import {
  validationUsername,
  validationClasse,
  validationLevel,
  validationPassword,
} from './middlewares/user.middleware';

const app = express();
const productsController = new ProductsController();
const usersController = new UsersController();
const orderController = new OrderController();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post(
  '/products',
  validationProductName,
  validationProductAmount,
  productsController.create,
);

app.post(
  '/users',
  validationUsername,
  validationClasse,
  validationLevel,
  validationPassword,
  usersController.create,
);

app.get('/orders', orderController.getAll);

export default app;
