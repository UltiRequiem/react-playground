/* eslint-disable no-undef */

import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Label, Input, GrettingLayout, H1, P } from './styles'

test('Label Test', () => {
  const tree = renderer.create(<Label />).toJSON()
  expect(tree).toHaveStyleRule('display', 'block')
})

test('Input Test', () => {
  const tree = renderer.create(<Input />).toJSON()
  expect(tree).toHaveStyleRule('margin', '0.4rem 0')
})

test('GrettingLayout Test', () => {
  const tree = renderer.create(<GrettingLayout />).toJSON()
  expect(tree).toHaveStyleRule('display', 'block')
})

test('H1 Test', () => {
  const tree = renderer.create(<H1 />).toJSON()
  expect(tree).toHaveStyleRule('text-transform', 'capitalize')
})
