import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { State, getContacts } from '../../redux'
import App from './app.component'

function mapStateToProps(state: State) {
  return { contacts: state.contacts }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ getContacts }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
