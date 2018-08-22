import * as React from 'react'

import { Contact } from '@service'

import * as styleguide from '@styles'
import * as styles from './contact-tile.styles'

interface ContactTileProps {
  contact: Contact
  onDeleteContact: (contactId: string) => void
  onUpdateContact: (contactId: string, contactData: Partial<Contact>) => void
}

export class ContactTile extends React.PureComponent<ContactTileProps> {
  render() {
    const { contact } = this.props
    return (
      <div className={styles.contactTile}>
        <div className="details">
          <div>{`Name: ${contact.name}`}</div>
          <div>{`Email: ${contact.email}`}</div>
          <div>{`Phone: ${contact.phone}`}</div>
        </div>
        <div className="actions">
          <div className={styleguide.button}>Delete Contact</div>
          <div className={styleguide.button}>Edit Contact</div>
        </div>
      </div>
    )
  }
}
