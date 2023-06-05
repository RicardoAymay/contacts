import { Test, TestingModule } from '@nestjs/testing';
import { UsersContactsController } from './users-contacts.controller';
import { UsersContactsService } from './users-contacts.service';

describe('UsersContactsController', () => {
  let controller: UsersContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersContactsController],
      providers: [UsersContactsService],
    }).compile();

    controller = module.get<UsersContactsController>(UsersContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
