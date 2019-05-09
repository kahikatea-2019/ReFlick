import React from 'react'
import Colours from '../../../client/components/Colours'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

Colours.prototype.componentDidMount = () => {}
test('Test runner is working', () => {
  expect(true).toBeTruthy()
})