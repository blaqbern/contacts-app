import * as React from 'react'

import { Contact, ContactData } from '@src/types'
import { Input } from '@components/input'

import * as styleguide from '@styles'
import * as styles from './styles'

interface Props {
  contact: Contact
  closeEditor(): void
  onSubmitUpdate(contactData: ContactData): void
}
interface State {
  name: string
  email: string
  phone: string
}

export class EditContactDetails extends React.PureComponent<
  Props,
  State
> {
  state = {
    name: this.props.contact.name,
    email: this.props.contact.email,
    phone: this.props.contact.phone,
  }

  handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.name as keyof ContactData
    const updated = { [fieldName]: e.currentTarget.value } as Pick<State, keyof State>
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
      <div className={styles.editDetails}>
        <div className="details">
          {fields.map((field, index) =>
            <Input
              key={`${contact.id}__${field}`}
              fieldName={field}
              value={this.state[field]}
              onChange={this.handleInputChange}
            />
          )}
        </div>

        <div className="buttonPanel">
          <span className={styleguide.link} onClick={this.handleSubmit}>
            Save
          </span>
          <span className={styleguide.linkAlt} onClick={closeEditor}>
            Close
          </span>
        </div>
      </div>
    )
  }
}
