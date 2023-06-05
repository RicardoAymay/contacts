import { ContactsRepository } from "../contacts.repository"
import { Contact } from '../../entities/contact.entity';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';



export class ContactsInMemoryRepository implements ContactsRepository{
    private database: Contact[] = []
    create(data: CreateContactDto): Contact | Promise<Contact> {
        const newContact = new Contact()
        Object.assign(newContact, {
            ...data
        })

        this.database.push(newContact)

        return newContact
    }

    findall(): Contact[] | Promise<Contact[]> {
        return this.database
    }
    findOne(id: string): Contact | Promise<Contact> {
        const contact = this.database.find((contact) => contact.id === id)
        return contact
    }
    update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
        const contactIndex = this.database.findIndex((contact)=> contact.id === id)
        this.database[contactIndex] = {
            ...this.database[contactIndex],
            ...data,
        };
        return this.database[contactIndex]
    }
    Delete(id: string): void | Promise<void> {
        const contactIndex = this.database.findIndex((contact) => contact.id === id);
        if (contactIndex !== -1) {
          this.database.splice(contactIndex, 1);
        } else {
          throw new Error(`User with id ${id} not found`);
        }
     }
}