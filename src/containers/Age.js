import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Age from "screens/Age"
import Header from "molecules/Header"
import { setField } from "src/actions"

class AgeContainer extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} />
  })
  static propTypes = {
    navigation: PropTypes.object
  }
  render() {
    return <Age {...this.props} />
  }
}

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => ({
  setField: (...args) => dispatch(setField(...args))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeContainer)
