import * as React from 'react'

import { Contact, ContactData } from '@src/types'
import { EditContactDetails } from '@components/edit-contact-details'
import { ContactDetailsReadonly } from '@components/contact-details-readonly'

import * as styleguide from '@styles'
import * as styles from './contact-tile.styles'

interface ContactTileOwnProps {
  contact: Contact
}
interface ContactTilePropsFromStore {
  updateContact(contactId: string, contactData: ContactData): void
  deleteContact(contactId: string): void
}
type ContactTileProps = ContactTileOwnProps & ContactTilePropsFromStore

interface ContactTileState {
  isEditing: boolean
}

export class ContactTile extends React.PureComponent<ContactTileProps, ContactTileState> {
  state = {
    isEditing: false,
  }

  handleDeleteClick = () => this.props.deleteContact(this.props.contact.id)
  handleSubmitUpdate = (contactData: ContactData) =>
    this.props.updateContact(this.props.contact.id, contactData)

  enterEditMode = () => this.setState({ isEditing: true })
  exitEditMode = () => this.setState({ isEditing: false })

  render() {
    const { contact } = this.props
    const { isEditing } = this.state

    return (
      <div className={styles.contactTile}>
        <div className="left">
          {isEditing
            ? <EditContactDetails
                contact={contact}
                onSubmitUpdate={this.handleSubmitUpdate}
                closeEditor={this.exitEditMode}
              />
            : <ContactDetailsReadonly
                contact={contact}
                openEditor={this.enterEditMode}
              />
          }
        </div>

        <div className="right">
          <div className={styleguide.button} onClick={this.handleDeleteClick}>
            Delete
          </div>
        </div>
      </div>
    )
  }
}
