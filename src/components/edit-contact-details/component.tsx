import * as React from 'react'

import { Contact, ContactData } from '@src/types'
import { Input } from '@components/input'

import * as styleguide from '@styles'
import * as styles from './styles'

interface OwnProps {
  closeEditor(): void
  onSubmitUpdate(contactData: ContactData): void
}
interface PropsFromFormStateManager {
  contact: Contact
  handleInputChange(e: React.SyntheticEvent<HTMLInputElement>): void
}
type Props = OwnProps & PropsFromFormStateManager

export class EditContactDetails extends React.PureComponent<Props> {
  handleSubmit = () => {
    const { name, email, phone } = this.props.contact

    this.props.onSubmitUpdate({ name, email, phone })
    this.props.closeEditor()
  }

  render() {
    const { contact, closeEditor, handleInputChange } = this.props

    const fields: (keyof ContactData)[] = ['name', 'email', 'phone']

    return (
      <div className={styles.editDetails}>
        <div className="details">
          {fields.map((field, index) =>
            <Input
              key={`${contact.id}__${field}`}
              fieldName={field}
              value={contact[field]}
              onChange={handleInputChange}
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
