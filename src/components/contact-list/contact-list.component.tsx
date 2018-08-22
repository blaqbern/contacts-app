import * as React from 'react'

import { Contact } from '@service'
import { ContactTile } from '@components/contact-tile'

import * as styles from './contact-list.styles'
import * as styleguide from '@styles'

interface ContactListProps {
  contacts: (Contact | undefined)[]
}

export class ContactList extends React.PureComponent<ContactListProps> {
  render() {
    const { contacts } = this.props
    return (
      <div className={styles.contactList}>
        <div className={styleguide.h1}>Contacts</div>
        {contacts.map(c =>
          c && (
            <ContactTile
              key={c.id}
              contact={c}
              onDeleteContact={() => {}}
              onUpdateContact={() => {}}
            />
          )
        )}
      </div>
    )
  }
}
