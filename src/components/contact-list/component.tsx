import * as React from 'react'

import { Contact } from '@src/types'
import { ContactTile } from '@components/contact-tile'

import * as styleguide from '@styles'
import * as styles from './styles'

interface Props {
  contacts: (Contact | undefined)[]
}

export class ContactList extends React.PureComponent<Props> {
  render() {
    const { contacts } = this.props
    return (
      <div className={styles.contactList}>
        <div className={styleguide.h1}>Contacts</div>
        {contacts.map(c =>
          c && <ContactTile key={c.id} contact={c} />
        )}
      </div>
    )
  }
}
