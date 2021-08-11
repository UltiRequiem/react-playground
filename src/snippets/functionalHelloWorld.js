import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ myName = 'UltiRequiem' }) => <h1>Hello World, {myName}!</h1>

HelloWorld.propTypes = {
  myName: PropTypes.string,
}

export default HelloWorld
