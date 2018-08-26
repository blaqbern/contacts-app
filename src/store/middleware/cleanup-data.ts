import { Middleware, MiddlewareAPI, Dispatch } from 'redux'

import { Contact, ContactData } from '@src/types'
import { ActionType } from '@store'

export const cleanupData: Middleware = ({ getState }: MiddlewareAPI) => (next: Dispatch) => action => {
  switch (action.type) {
    case ActionType.GET_CONTACTS_SUCCESS:
      const contacts = action.payload.contacts.map((c: Contact) => {
        return {
          id: c.id,
          ...cleanupContactData(c),
        }
      })

      return next({
        type: action.type,
        payload: { contacts },
      })
    case ActionType.CREATE:
    case ActionType.UPDATE:
      const contactData = cleanupContactData(action.payload.contactData)

      return next({
        type: action.type,
        payload: {
          ...action.payload,
          contactData,
        },
      })
    default:
      return next(action)
  }
}

function cleanupContactData(contactData: ContactData & { id?: string }): ContactData {
  const { email } = contactData
  const name = formatName(contactData.name.replace(/[^a-zA-Z]/g, ''))
  const phone = formatPhoneNumber(contactData.phone.replace(/[^\d]/g, ''))

  return { name, email, phone }
}

function formatName(name: string): string {
  const pattern = /([A-Z][a-z]*).*([A-Z][a-z]*)/
  const format = '$1 $2'
  return name.replace(pattern, format)
}

function formatPhoneNumber(phoneNo: string): string {
  const pattern = /(\d{3})(\d{3})(\d{4})/
  const format = '$1.$2.$3'
  return phoneNo.replace(pattern, format)
}
