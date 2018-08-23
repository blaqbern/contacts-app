import * as React from 'react'

import { Contact } from '@service'

import * as styleguide from '@styles'
import * as styles from './contact-tile.styles'

interface ContactTileOwnProps {
  contact: Contact
}
interface ContactTilePropsFromStore {
  updateContact(contactId: string, contactData: Partial<Contact>): void
  deleteContact(contactId: string): void
}
type ContactTileProps = ContactTileOwnProps & ContactTilePropsFromStore

interface ContactTileState {
  isEditing: boolean
}

interface ContactDetailsProps {
  contact: Contact
  openEditor(): void
}
const ContactDetailsReadonly: React.SFC<ContactDetailsProps> = ({ contact, openEditor }) => {
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
interface EditContactDetailsProps {
  contact: Contact
  closeEditor(): void
  onSubmitUpdate(contactData: Partial<Contact>): void
}
interface EditContactDetailsState {
  name: string
  email: string
  phone: string
}
type CoercedState = Pick<EditContactDetailsState, keyof EditContactDetailsState>
class EditContactDetails extends React.PureComponent<
  EditContactDetailsProps,
  EditContactDetailsState
> {
  state = {
    name: this.props.contact.name,
    email: this.props.contact.email,
    phone: this.props.contact.phone,
  }

  handleNameChange = (e: React.SyntheticEvent<HTMLInputElement>) => this.setState({ name: e.currentTarget.value })
  handleEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => this.setState({ email: e.currentTarget.value })
  handlePhoneChange = (e: React.SyntheticEvent<HTMLInputElement>) => this.setState({ phone: e.currentTarget.value })

  handleSubmit = () => {
    this.props.onSubmitUpdate(this.state)
    this.props.closeEditor()
  }

  render() {
    const { contact, closeEditor } = this.props
    return (
      <>
        <div className="details">
          <input value={this.state.name} onChange={this.handleNameChange} />
          <input value={this.state.email} onChange={this.handleEmailChange} />
          <input value={this.state.phone} onChange={this.handlePhoneChange} />
        </div>
        <div className="editButton">
          <span className={styleguide.link} onClick={closeEditor}>
            close
          </span>
        </div>
        <div className="editButton">
          <span className={styleguide.button} onClick={this.handleSubmit}>
            Save
          </span>
        </div>
      </>
    )
  }
}

export class ContactTile extends React.PureComponent<ContactTileProps, ContactTileState> {
  state = {
    isEditing: false,
  }

  handleDeleteClick = () => this.props.deleteContact(this.props.contact.id)
  handleSubmitUpdate = (contactData: Partial<Contact>) =>
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
