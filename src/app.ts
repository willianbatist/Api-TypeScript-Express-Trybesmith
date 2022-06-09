import express from 'express';
import ProductsController from './controllers/product.controller';
import { validationProductName, validationProductAmount } from './middlewares/product.middleware';

const app = express();
const productsController = new ProductsController();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post(
  '/products',
  validationProductName,
  validationProductAmount,
  productsController.create,
);

export default app;
