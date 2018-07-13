import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text, ScrollView } from "react-native"
import { connect } from "react-redux"
import { fetchData } from "../actions"

const styles = {
  viewContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  view: { flex: 1 }
}

class Main extends Component {
  static defaultProps = {
    isFetching: false,
    message: ""
  }
  static propTypes = {
    dispatch: PropTypes.func,
    message: PropTypes.string,
    isFetching: PropTypes.bool
  }
  componentDidMount() {
    this.props.dispatch(fetchData())
  }
  render() {
    return (
      <ScrollView
        style={styles.view}
        contentContainerStyle={styles.viewContainer}
      >
        <Text>{this.props.isFetching ? "Loading" : this.props.message}</Text>
      </ScrollView>
    )
  }
}

export default connect(state => ({
  isFetching: state.data.isFetching,
  message: state.data.message
}))(Main)
