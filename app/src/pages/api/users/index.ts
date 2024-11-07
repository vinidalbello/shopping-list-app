import 'reflect-metadata';
import { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import { UserController } from '../../../modules/user/controller/UserController';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const userController = container.resolve(UserController);

  if (request.method === 'POST') {
    await userController.create(request, response);
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}