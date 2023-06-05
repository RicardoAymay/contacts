// import { CreateUsersContactDto } from '../../dto/create-users-contact.dto';
// import { UpdateUsersContactDto } from '../../dto/update-users-contact.dto';
// import { UsersContact } from '../../entities/users-contact.entity';
// import { UsersContactsRepository } from '../user-contacts.repository';

// export class UsersContactInMemoryRepository implements UsersContactsRepository{
//     private usersContacts: UsersContact[] = [];

//     create(data: CreateUsersContactDto): Promise<UsersContact> {
//         const userContact = new UsersContact();
        
//         userContact.userId = data.userId;
//         userContact.contactId = data.contactId;

//         this.usersContacts.push(userContact);

//         return Promise.resolve(userContact);
//     }

//     findAll(): Promise<UsersContact[]> {
//         return Promise.resolve(this.usersContacts);
//     }

//     findOne(userId: string, contactId: string): Promise<UsersContact> {
//         const userContact = this.usersContacts.find(uc => uc.userId === userId && uc.contactId === contactId);
//         return Promise.resolve(userContact);
//     }

//     update(userId: string, contactId: string, data: UpdateUsersContactDto): Promise<UsersContact> {
//         // As mentioned before, this function may not be needed.
//         // If you want to update some properties of UsersContact, implement it.
//         throw new Error('Method not implemented.');
//     }

//     delete(userId: string, contactId: string): Promise<void> {
//         this.usersContacts = this.usersContacts.filter(uc => !(uc.userId === userId && uc.contactId === contactId));
//         return Promise.resolve();
//     }
// }
