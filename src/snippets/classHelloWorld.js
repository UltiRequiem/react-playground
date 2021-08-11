/* eslint-disable class-methods-use-this */

import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    return <p>Hello World using Classes!</p>
  }
}

App.propTypes = {
  myName: PropTypes.string,
}

export default App
