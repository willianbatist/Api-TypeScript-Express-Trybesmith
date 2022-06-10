import express from 'express';
import ProductsController from './controllers/product.controller';
import UsersController from './controllers/user.controller';
import { validationProductName, validationProductAmount } from './middlewares/product.middleware';

const app = express();
const productsController = new ProductsController();
const usersController = new UsersController();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post(
  '/products',
  validationProductName,
  validationProductAmount,
  productsController.create,
);

app.post('/users', usersController.create);

export default app;
