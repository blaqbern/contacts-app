import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { Contact, ContactData } from '@src/types'
import { ContactsJson, getContacts as getContactsService } from '@service'
import { State, Action, ActionType } from './store.types'

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

export interface GetContactsSuccessAction {
  type: ActionType.GET_CONTACTS_SUCCESS
  payload: { contacts: Contact[] }
}
export function getContactsSuccess(contacts: Contact[]) {
  return {
    type: ActionType.GET_CONTACTS_SUCCESS,
    payload: { contacts },
  }
}

export const getContacts = (): ThunkAction<any, State, any, Action> => {
  return (dispatch: Dispatch, getState: () => State) => {
    getContactsService()
      .then((response: ContactsJson) =>
        dispatch(getContactsSuccess(response.contacts))
      )
  }
}
