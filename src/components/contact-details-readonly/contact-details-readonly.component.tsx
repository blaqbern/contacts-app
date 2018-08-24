import * as React from 'react'

import { Contact } from '@src/types'

import * as styleguide from '@styles'

interface ContactDetailsProps {
  contact: Contact
  openEditor(): void
}

export const ContactDetailsReadonly: React.SFC<ContactDetailsProps> = ({ contact, openEditor }) => {
  return (
    <>
      <div className="details">
        <div>{`Name: ${contact.name}`}</div>
        <div>{`Email: ${contact.email}`}</div>
        <div>{`Phone: ${contact.phone}`}</div>
      </div>
      <div className="editButton">
        <span className={styleguide.link} onClick={openEditor}>
          Edit
        </span>
      </div>
    </>
  )
}

