import * as React from 'react'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { State, Action } from '../../redux'
import { Contact, ContactsJson } from '../../contacts-service'

import '../../assets/shared-styles'

interface PropsFromStore {
  contacts: (Contact | undefined)[]
  getContacts: () => ThunkAction<State, any, Action, any>
}

export default class App extends React.PureComponent<PropsFromStore> {
  componentDidMount() {
    this.props.getContacts()
  }

  render() {
    const { contacts } = this.props
    debugger;
    return (
      <ul>
        <h3>Contacts</h3>
        {contacts.map(c => c &&
          <div key={c.id}>
            <div>{`Name: ${c.name}`}</div>
            <div>{`Email: ${c.email}`}</div>
            <div>{`Phone: ${c.phone}`}</div>
          </div>
        )}
      </ul>
    )
  }
}
