import React from 'react'
import Colour from '../../../client/components/Colour'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

Colour.prototype.componentDidMount = () => {}
test('Test runner is working', () => {
  expect(true).toBeTruthy()
})
