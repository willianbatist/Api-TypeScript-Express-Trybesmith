import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.userService.create(user);
    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UsersController;