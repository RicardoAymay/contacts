import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';
import { UpdateUserDto } from '../../dto/update-user.dto';


export class UsersInMemoryRepository implements UsersRepository{
    findByEmail(email: string): User | Promise<User> {
        const user = this.database.find((user) => user.email === email)
        return user
    }
    private database: User[] = []
    create(data: CreateUserDto): User | Promise<User> {
        const newUser = new User()
        Object.assign(newUser, {
            ...data
        })

        this.database.push(newUser)

        return plainToInstance(User, newUser)
    }
    findall(): User[] | Promise<User[]> {
        return plainToInstance(User, this.database)
    }
    findOne(id: string): User | Promise<User> {
        const user = this.database.find((user) => user.id === id)
        return user
    }
    update(id: string, data: UpdateUserDto): User | Promise<User> {
        const userIndex = this.database.findIndex((user)=> user.id === id)
        this.database[userIndex] = {
            ...this.database[userIndex],
            ...data,
        };
        return plainToInstance(User, this.database[userIndex])
    }
    Delete(id: string): void | Promise<void> {
        const userIndex = this.database.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          this.database.splice(userIndex, 1);
        } else {
          throw new Error(`User with id ${id} not found`);
        }
     }
}