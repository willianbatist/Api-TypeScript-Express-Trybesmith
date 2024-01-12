import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, ProductId } from '../interfaces/product';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;

    return { id: insertId, ...product };
  }

  async getProductId(id:number):Promise<ProductId[]> {
    const query = 'SELECT group_concat(id) as productsIds FROM Trybesmith.Products where orderId=?';
    const [result] = await this.connection.execute(query, [id]);
    return result as [ProductId];
  }
}
