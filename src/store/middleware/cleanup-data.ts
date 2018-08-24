import { Middleware, MiddlewareAPI, Dispatch } from 'redux'

import { Contact, ContactData } from '@src/types'
import { ActionType } from '@store'

export const cleanupMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (next: Dispatch) => action => {
  if (!action.meta || !action.meta.dataFromApi) return next(action)

  const contacts = action.payload.contacts.map((c: Contact) => cleanupContactData(c))

  return next({
    type: action.type,
    payload: { contacts }
  })
}

function cleanupContactData(contact: Contact): Contact {
  const { id, email } = contact
  const name = contact.name.replace(/([A-Z][a-z]*).*([A-Z][a-z]*)/, '$1 $2')
  const phone = formatPhoneNumber(contact.phone.replace(/[^\d]/g, ''))

  return { id, name, email, phone }
}

function formatPhoneNumber(phoneNo: string): string {
  const pattern = /(\d{3})(\d{3})(\d{4})/
  const format = '$1.$2.$3'
  return phoneNo.replace(pattern, format)
}
