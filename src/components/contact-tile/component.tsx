import * as React from 'react'

import { Contact, ContactData } from '@src/types'
import { DeleteContactAction, UpdateContactAction } from '@store'
import { FormStateManager, ChildArgs } from '@components/form-state-manager'
import { EditContactDetails } from '@components/edit-contact-details'
import { ContactDetailsReadonly } from '@components/contact-details-readonly'

import * as styleguide from '@styles'
import * as styles from './styles'

interface OwnProps {
  contact: Contact
}
interface PropsFromStore {
  updateContact(contactId: string, contactData: ContactData): UpdateContactAction
  deleteContact(contactId: string): DeleteContactAction
}
type Props = OwnProps & PropsFromStore

interface State {
  isEditing: boolean
}

export class ContactTile extends React.PureComponent<Props, State> {
  state = {
    isEditing: false,
  }

  handleDeleteClick = () => this.props.deleteContact(this.props.contact.id)
  handleSubmitUpdate = (contactData: ContactData) =>
    this.props.updateContact(this.props.contact.id, contactData)

  enterEditMode = () => this.setState({ isEditing: true })
  exitEditMode = () => this.setState({ isEditing: false })

  renderEditor = (args: ChildArgs) => {
    if (!args.contactId) return <div>Something Went Wrong!</div>

    const contact = {
      id: args.contactId,
      ...args.state,
    }

    return (
      <EditContactDetails
        contact={contact}
        handleInputChange={args.handleInputChange}
        onSubmitUpdate={this.handleSubmitUpdate}
        closeEditor={this.exitEditMode}
      />
    )
  }

  render() {
    const { contact } = this.props
    const { isEditing } = this.state

    return (
      <div className={styles.contactTile}>
        <div className="left">
          {isEditing
            ? <FormStateManager contact={contact} render={this.renderEditor} />
            : <ContactDetailsReadonly contact={contact} openEditor={this.enterEditMode} />
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
