import { UserRepository } from "../repository/UserRepository";
import { User } from "../entity/UserEntity";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {
  }

  async createUser(name: string, email: string, password: string): Promise<User> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email');
    }

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    return await this.userRepository.create({
      name,
      email,
      password,
    });
  }
}