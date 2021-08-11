import React from 'react'
import PropTypes from 'prop-types'

class ClassHelloWorld extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

const ArrowHelloWorld = (props) => <h1>Hello, {props.name}</h1>

ClassHelloWorld.propTypes = {
  name: PropTypes.string,
}

ArrowHelloWorld.propTypes = {
  name: PropTypes.string,
}

export { ArrowHelloWorld, ClassHelloWorld }
