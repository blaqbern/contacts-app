import * as React from 'react'

import { Contact, ContactData } from '@src/types'

import * as styleguide from '@styles'

interface EditContactDetailsProps {
  contact: Contact
  closeEditor(): void
  onSubmitUpdate(contactData: ContactData): void
}
interface EditContactDetailsState {
  name: string
  email: string
  phone: string
}

export class EditContactDetails extends React.PureComponent<
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
