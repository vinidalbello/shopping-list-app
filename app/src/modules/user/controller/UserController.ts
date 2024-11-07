import { NextApiRequest, NextApiResponse } from 'next';
import { UserService } from '../services/UserService';
import { injectable, inject } from 'tsyringe';

@injectable()
export class UserController {

  constructor(@inject(UserService) private userService: UserService) {
  }

  async create(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password } = req.body;

    try {
      const user = await this.userService.createUser(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unknown error occurred' });
      }
    }
  }
}