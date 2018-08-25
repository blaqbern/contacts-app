import * as React from 'react'

import { Contact, ContactData } from '@src/types'
import { Input } from '@components/input'

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

  handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.name as keyof ContactData
    const updated = {
      [fieldName]: e.currentTarget.value
    } as Pick<EditContactDetailsState, keyof EditContactDetailsState>
    this.setState(updated)
  }

  handleSubmit = () => {
    this.props.onSubmitUpdate(this.state)
    this.props.closeEditor()
  }

  render() {
    const { contact, closeEditor } = this.props

    const fields: (keyof ContactData)[] = ['name', 'email', 'phone']

    return (
      <>
        <div className="details">
          {fields.map(field =>
            <Input
              fieldName={field}
              value={this.state[field]}
              onChange={this.handleInputChange}
            />
          )}
        </div>
        <div className="editButton">
          <span
            className={styleguide.link}
            style={{ marginRight: 10 }}
            onClick={this.handleSubmit}
          >
            Save
          </span>
          <span className={styleguide.linkAlt} onClick={closeEditor}>
            Close
          </span>
        </div>
      </>
    )
  }
}
