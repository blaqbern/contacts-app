import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { updateContact, deleteContact } from '@store'
import { ContactTile } from './component'

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ updateContact, deleteContact }, dispatch)
}

export default connect(undefined, mapDispatchToProps)(ContactTile)
