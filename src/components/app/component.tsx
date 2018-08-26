import * as React from 'react'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { Contact, ContactData } from '@src/types'
import { State, Action, CreateContactAction } from '@store'
import { ContactList } from '@components/contact-list'
import { CreateContact } from '@components/create-contact'
import { FormStateManager, ChildArgs } from '@components/form-state-manager'

import * as styles from './styles'

interface PropsFromStore {
  contacts: (Contact | undefined)[]
  getContacts: () => ThunkAction<State, any, Action, any>
  createContact(contactData: ContactData): CreateContactAction
}

export default class App extends React.PureComponent<PropsFromStore> {
  componentDidMount() {
    this.props.getContacts()
  }

  renderCreateContact = (args: ChildArgs) => (
    <CreateContact
      contactData={args.state}
      handleInputChange={args.handleInputChange}
      resetForm={args.resetForm}
      createContact={this.props.createContact}
    />
  )

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.app}>
          <div className="left">
            <ContactList contacts={this.props.contacts} />
          </div>
          <div className="right">
            <FormStateManager render={this.renderCreateContact} />
          </div>
        </div>
      </div>
    )
  }
}
