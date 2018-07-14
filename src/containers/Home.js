import React, { PureComponent } from "react"
import { connect } from "react-redux"
import Home from "screens/Home"
import { setField } from "src/actions"

class HomeContainer extends PureComponent {
  static navigationOptions = {
    header: null
  }
  render() {
    return <Home {...this.props} />
  }
}

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => ({
  setField: (...args) => dispatch(setField(...args))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
