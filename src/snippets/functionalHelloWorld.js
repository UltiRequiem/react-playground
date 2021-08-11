import React from 'react'
import PropTypes from 'prop-types'

const Props = ({ myName = 'UltiRequiem' }) => (
  <h1>Hello World, {myName}! Using Functions!</h1>
)

Props.propTypes = {
  myName: PropTypes.string,
}

export default Props
