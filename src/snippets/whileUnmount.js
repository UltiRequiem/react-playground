/* eslint-disable class-methods-use-this */

import React from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  // The componentDidMount() method runs after the component output has been rendered to the DOM.
  componentDidMount() {
    console.log('I am mounted')
  }

  // Is used for component tear-down
  componentWillUnmount() {
    console.log('component is being removed')
  }

  // Invoked immediately after updating occurs. This method is not called for the initial render.
  componentDidUpdate() {
    console.log('props or state updated')
  }

  render() {
    return (
      <>
        <h1>Hello, {this.props.name}!</h1>
      </>
    )
  }
}

HelloWorld.propTypes = {
  name: PropTypes.string,
}

export default HelloWorld
