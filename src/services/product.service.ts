import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const books = await this.model.getAll();
    return books;
  }
}

export default ProductService;