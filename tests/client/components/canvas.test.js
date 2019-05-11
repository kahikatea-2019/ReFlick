import React from 'react'
import Canvas from '../../../client/components/canvas/Canvas'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

test('test harness is setup correctly', () => {
  expect(true).toBe(true)
})

Canvas.prototype.componentDidMount = () => {}
test('Test runner is working', () => {
  expect(true).toBeTruthy()
})
