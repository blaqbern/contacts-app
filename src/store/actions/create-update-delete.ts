import { ActionType } from '../store.types'
import { ContactData } from '@src/types'

export interface CreateContactAction {
  type: ActionType.CREATE
  payload: { contactData: ContactData }
}
export function createContact(contactData: ContactData): CreateContactAction {
  return {
    type: ActionType.CREATE,
    payload: { contactData },
  }
}

export interface UpdateContactAction {
  type: ActionType.UPDATE
  payload: {
    contactId: string
    contactData: ContactData
  }
}
export function updateContact(contactId: string, contactData: ContactData): UpdateContactAction {
  return {
    type: ActionType.UPDATE,
    payload: { contactId, contactData },
  }
}

export interface DeleteContactAction {
  type: ActionType.DELETE
  payload: { contactId: string }
}
export function deleteContact(contactId: string): DeleteContactAction {
  return {
    type: ActionType.DELETE,
    payload: { contactId },
  }
}
