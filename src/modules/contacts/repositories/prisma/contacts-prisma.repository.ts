import { ContactsRepository } from '../contacts.repository';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from '../../../../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { plainToInstance } from 'class-transformer';
import { UpdateContactDto } from '../../dto/update-contact.dto';


@Injectable()
export class ContactsPrismaRepository implements ContactsRepository{
    constructor(private prisma: PrismaService){}
    async create(data: CreateContactDto): Promise<Contact> {
        const contact = new Contact()
        Object.assign(contact, {...data})

        const newContact = await this.prisma.contact.create({
            data: {...contact}
        })
        return plainToInstance(Contact, newContact)
    }
    async findall(): Promise<Contact[]> {
       const contacts = await this.prisma.contact.findMany()
       return plainToInstance (Contact, contacts)
    }
    async findOne(id: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
            where: {id}
        });
        return plainToInstance(Contact, contact)
    }
    async update(id: string, data: UpdateContactDto): Promise<Contact> {
        const contact = await this.prisma.contact.update({where: {id}, data: {...data}})

        return plainToInstance(Contact, contact)
    }
    async Delete(id: string): Promise<void> {
       await this.prisma.contact.delete({
            where: {id}
        })
    }
}
