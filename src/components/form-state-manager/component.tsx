import * as React from 'react'

import { Contact, ContactData } from '@src/types'

export interface ChildArgs {
  state: ContactData,
  handleInputChange: (e: React.SyntheticEvent<HTMLInputElement>) => void,
  resetForm: () => void,
  contactId: string | undefined,
}

interface Props {
  contact?: Contact
  render: (args: ChildArgs) => JSX.Element
}

type State = ContactData

export class FormStateManager extends React.PureComponent<Props, State> {
  state = this.props.contact
    ? this.props.contact
    : { name: '', email: '', phone: '' }

  handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const fieldName = e.currentTarget.name as keyof ContactData
    const updated = { [fieldName]: e.currentTarget.value } as Pick<State, keyof State>
    this.setState(updated)
  }

  render() {
    const args = {
      state: this.state,
      handleInputChange: this.handleInputChange,
      contactId: this.props.contact ? this.props.contact.id : undefined,
      resetForm: () => this.setState({ name: '', email: '', phone: '' }),
    }

    return <div>{this.props.render(args)}</div>
  }
}
