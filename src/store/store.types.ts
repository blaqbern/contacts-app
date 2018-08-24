import { Contact } from '@src/types'
import {
  CreateContactAction,
  UpdateContactAction,
  DeleteContactAction,
  GetContactsSuccessAction,
} from './actions'

export interface State {
  contacts: (Contact | undefined)[]
}

export type Action =
  CreateContactAction |
  UpdateContactAction |
  DeleteContactAction |
  GetContactsSuccessAction

export const enum ActionType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  GET_CONTACTS_SUCCESS = 'get-contacts-success',
}
