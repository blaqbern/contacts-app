import { Omit } from '@root/type-utils'

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

export type ContactData = Omit<Contact, 'id'>
