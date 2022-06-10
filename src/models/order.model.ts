import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/order';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = 'SELECT * FROM Trybesmith.Orders';
    const [result] = await this.connection.execute(query);
    return result as Order[];
  }
}