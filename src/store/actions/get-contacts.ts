import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { Contact } from '@src/types'
import { ContactsJson, getContacts as getContactsService } from '@service'
import { State, Action, ActionType } from '../store.types'

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
