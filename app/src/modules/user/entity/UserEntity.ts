export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;

  constructor(id: string, name: string, email: string, password: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
  }
}