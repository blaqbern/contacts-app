import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { Contact, ContactsJson, getContacts as getContactsService } from '@service'
import { State, Action, ActionType } from './store.types'

export interface CreateContactAction {
  type: ActionType.CREATE
  payload: {
    contact: Contact
  }
}
export function createContact(contact: Contact): CreateContactAction {
  return {
    type: ActionType.CREATE,
    payload: { contact },
  }
}

export interface UpdateContactAction {
  type: ActionType.UPDATE
  payload: {
    contactId: string
    contactData: Partial<Contact>
  }
}
export function updateContact(contactId: string, contactData: Partial<Contact>): UpdateContactAction {
  return {
    type: ActionType.UPDATE,
    payload: { contactId, contactData },
  }
}

export interface DeleteContactAction {
  type: ActionType.DELETE
  payload: {
    contactId: string
  }
}
export function deleteContact(contactId: string): DeleteContactAction {
  return {
    type: ActionType.DELETE,
    payload: { contactId }
  }
}

export interface GetContactsSuccessAction {
  type: ActionType.GET_CONTACTS_SUCCESS
  payload: {
    contacts: Contact[]
  }
  meta: {
    dataFromApi: true
  }
}
export function getContactsSuccess(contacts: Contact[]) {
  return {
    type: ActionType.GET_CONTACTS_SUCCESS,
    payload: { contacts },
    meta: { dataFromApi: true },
  }
}

export const getContacts = (): ThunkAction<any, State, any, Action> =>
  (dispatch: Dispatch, getState: () => State) =>
    getContactsService().then(response => dispatch(getContactsSuccess(response.contacts)))
