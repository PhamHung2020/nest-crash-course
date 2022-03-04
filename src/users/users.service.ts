import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Hung' },
    { id: 1, name: 'Peter' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name.includes(name));
    }
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
