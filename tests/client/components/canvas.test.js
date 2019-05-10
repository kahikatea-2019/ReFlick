import React from 'react'
import Canvas from '../../../client/components/canvas/Canvas'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

Canvas.prototype.componentDidMount = () => {}
test('Test runner is working', () => {
  expect(true).toBeTruthy()
})
