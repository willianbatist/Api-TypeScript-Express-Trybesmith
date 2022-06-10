import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import { OrderResponse } from '../interfaces/order';

export default class OrderService {
  model: OrderModel;

  productModel : ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  async getAll():Promise<OrderResponse[]> {
    const orders = await this.model.getAll();
    const getId = await Promise.all(
      orders.map(async (order) => {
        const arrayIds = await this.productModel.getProductId(order.id);
        const ids = arrayIds[0].productsIds.split(',');
        const numberIds = ids.map((id) => +id);
        return { ...order, productsIds: numberIds };
      }),
    );
    return getId;
  }
}