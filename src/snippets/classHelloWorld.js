import React from 'react'
import PropTypes from 'prop-types'

class HelloWorld extends React.Component {
  render() {
    return <p>Hello {this.props.myName}</p>
  }
}

HelloWorld.propTypes = {
  myName: PropTypes.string,
}

export default HelloWorld
