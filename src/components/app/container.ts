import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { State, getContacts, createContact } from '@store'
import App from './component'

function mapStateToProps(state: State) {
  return { contacts: state.contacts }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ getContacts, createContact }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
