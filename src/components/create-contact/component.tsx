import * as React from 'react'

import { ContactData } from '@src/types'
import { CreateContactAction } from '@store'
import { Input } from '@components/input'

import * as styleguide from '@styles'

interface OwnProps {
  createContact(contactData: ContactData): CreateContactAction
}
interface PropsFromFormStateManager {
  contactData: ContactData
  handleInputChange(e: React.SyntheticEvent<HTMLInputElement>): void
  resetForm(): void
}
type Props = OwnProps & PropsFromFormStateManager

export class CreateContact extends React.PureComponent<Props> {
  handleSubmit = () => {
    const { createContact, contactData, resetForm } = this.props
    createContact(contactData)
    resetForm()
  }

  render() {
    const { contactData, handleInputChange, createContact } = this.props
    const fields: (keyof ContactData)[] = ['name', 'email', 'phone']

    return (
      <div>
        {fields.map(field =>
          <Input
            key={field}
            fieldName={field}
            value={contactData[field]}
            onChange={handleInputChange}
          />
        )}

        <span className={styleguide.link} onClick={this.handleSubmit}>
          Save
        </span>
      </div>
    )
  }
}
