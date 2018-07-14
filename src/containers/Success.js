import React, { PureComponent } from "react"
import { connect } from "react-redux"
import Success from "screens/Success"

class SuccessContainer extends PureComponent {
  static navigationOptions = {
    header: null
  }
  render() {
    return <Success {...this.props} />
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(SuccessContainer)
