import { BASE_URL } from '../constants'
import { Contact } from '@src/types'

export interface ContactsJson {
  contacts: Contact[]
}

export async function getContacts(): Promise<ContactsJson> {
  const response = await fetch(`${BASE_URL}/contacts`)
  return response.json()
}
