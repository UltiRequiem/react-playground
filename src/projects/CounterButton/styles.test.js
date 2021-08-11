/* eslint-disable no-undef */

import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from './styles'

test('Label Test', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toHaveStyleRule('color', 'green')
  expect(tree).toHaveStyleRule('margin', '5px')
})
