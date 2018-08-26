import * as React from 'react'

import { Contact, ContactData } from '@src/types'
import { Input } from '@components/input'

import * as styleguide from '@styles'
import * as styles from './contact-details-readonly.styles'

interface ContactDetailsProps {
  contact: Contact
  openEditor(): void
}

export const ContactDetailsReadonly: React.SFC<ContactDetailsProps> = ({ contact, openEditor }) => {
  const fields: (keyof ContactData)[] = ['name', 'email', 'phone']
  return (
    <div className={styles.detailsReadonly}>
      <div className="details">
        {fields.map((field, index) =>
          <Input
            key={`${contact.id}__${field}`}
            fieldName={field}
            value={contact[field]}
            readonly
          />
        )}
      </div>
      <div className="buttonPanel">
        <span className={styleguide.link} onClick={openEditor}>
          Edit
        </span>
      </div>
    </div>
  )
}

