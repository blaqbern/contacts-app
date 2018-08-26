import { generateUniqueId } from '@src/utils'
import { State, Action, ActionType } from '../store.types'
import { contact as contactReducer } from './contact'

export function contacts(state: State = { contacts: [] }, action: Action) {
  switch (action.type) {
    case ActionType.GET_CONTACTS_SUCCESS:
      return { contacts: action.payload.contacts }

    case ActionType.CREATE:
      const { name, email, phone } = action.payload.contactData
      return {
        contacts: [
          ...state.contacts,
          { id: generateUniqueId(), name, email, phone },
        ],
      }

    case ActionType.UPDATE:
      return {
        contacts: state.contacts.map(c =>
          c && c.id === action.payload.contactId
            ? contactReducer(c, action)
            : c
        ),
      }

    case ActionType.DELETE:
      return {
        contacts: state.contacts.filter(c =>
          c && c.id !== action.payload.contactId
        ),
      }

    default:
      return state
  }
}
