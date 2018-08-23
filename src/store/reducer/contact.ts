import { Contact } from '@service'
import { Action, ActionType } from '../store.types'

const emptyContact = { id: '', name: '', email: '', phone: '' }

export function contact(state: Contact = emptyContact, action: Action): Contact {
  switch (action.type) {
    case ActionType.UPDATE: return { ...state, ...action.payload.contactData }
    default: return state
  }
}
