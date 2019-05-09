import React from 'react'
import { shallow, render, mount } from 'enzyme'

import App from '../../../client/components/App'

// Prevent <App> from calling the API
App.prototype.componentDidMount = () => {}

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

// test('<App> root has className of app', () => {
//   const wrapper = shallow(<App />)
//   const root = wrapper.find('.app')
//   expect(root.length).toBe(1)
// })
