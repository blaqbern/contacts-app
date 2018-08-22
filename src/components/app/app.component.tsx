import * as React from 'react'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { State, Action } from '@store'
import { Contact, ContactsJson } from '@service'
import { ContactList } from '@components/contact-list'
// import { ActionPanel } from '@components/action-panel'

import * as styles from './app.styles'

interface PropsFromStore {
  contacts: (Contact | undefined)[]
  getContacts: () => ThunkAction<State, any, Action, any>
}

export default class App extends React.PureComponent<PropsFromStore> {
  componentDidMount() {
    this.props.getContacts()
  }

  render() {
    return (
      <div className={styles.app}>
        <div className="oneThird">
          <ContactList contacts={this.props.contacts} />
        </div>
        <div className="twoThirds">
          {/*<ActionPanel />*/}
        </div>
      </div>
    )
  }
}
