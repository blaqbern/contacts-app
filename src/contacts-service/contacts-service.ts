import { BASE_URL } from '../constants'
import { ContactsJson } from './contacts-service.types'

export async function getContacts(): Promise<ContactsJson> {
  debugger;
  const response = await fetch(`${BASE_URL}/contacts`)
  return response.json()
}
