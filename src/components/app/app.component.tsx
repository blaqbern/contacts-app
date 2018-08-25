import * as React from 'react'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { State, Action } from '@store'
import { Contact } from '@src/types'
import { ContactList } from '@components/contact-list'

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
      <div className={styles.container}>
        <div className={styles.app}>
          <div className="left">
            <ContactList contacts={this.props.contacts} />
          </div>
          <div className="right">
            {/* TODO */}
          </div>
        </div>
      </div>
    )
  }
}
