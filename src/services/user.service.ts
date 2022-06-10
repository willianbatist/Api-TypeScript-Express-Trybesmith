import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user';
import generateJWT from '../utils/generateJWT';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: Omit<User, 'id'>) {
    const result = await this.model.create(user);
    return generateJWT(result);
  }
}