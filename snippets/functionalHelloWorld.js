import React from 'react'
import PropTypes from 'prop-types'

const App = ({ myName }) => <h1>Hello World, {myName}!</h1>

App.propTypes = {
  name: PropTypes.string,
}

export default App

// ReactDOM.render(<App myName="Zero" />, document.getElementById('root'))
