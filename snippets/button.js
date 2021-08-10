import React from 'react'
import PropTypes from 'prop-types'

class CustomButton extends React.Component {
  render() {
    return (
      <button style={{ color: this.props.color }}>{this.props.text}</button>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <CustomButton />
        <CustomButton color={this.props.color} text={this.props.text} />
      </div>
    )
  }
}

CustomButton.defaultProps = {
  color: 'blue',
  text: 'Hello World!',
}

CustomButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}

App.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}
export default App
