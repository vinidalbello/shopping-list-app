import { PrismaClient } from '@prisma/client';
import { User } from '../entity/UserEntity';
import { injectable } from 'tsyringe';

@injectable()
export class UserRepository {
  private prisma = new PrismaClient();

  async create(data: { name: string; email: string; password: string }): Promise<User> {
    const user = await this.prisma.user.create({ data });
    return new User(user.id, user.name, user.email, user.password, user.createdAt);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? new User(user.id, user.name, user.email, user.password, user.createdAt) : null;
  }
}