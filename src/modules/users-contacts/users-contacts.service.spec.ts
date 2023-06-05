import { Test, TestingModule } from '@nestjs/testing';
import { UsersContactsService } from './users-contacts.service';

describe('UsersContactsService', () => {
  let service: UsersContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersContactsService],
    }).compile();

    service = module.get<UsersContactsService>(UsersContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
