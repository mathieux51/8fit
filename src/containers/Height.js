import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Height from "screens/Height"
import Header from "molecules/Header"
import { setField } from "src/actions"

class HeightContainer extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />
  })
  static propTypes = {
    navigation: PropTypes.object
  }
  render() {
    return <Height {...this.props} />
  }
}

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => ({
  setField: (...args) => dispatch(setField(...args))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeightContainer)
