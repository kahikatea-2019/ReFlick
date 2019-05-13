import React from 'react'
import { shallow } from 'enzyme'

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

App.prototype.componentDidMount = () => {}
test('test runner is working', () => {
  expect(true).toBeTruthy()
})

describe('App', () => {
  it('App should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />)
    expect(component).toMatchSnapshot()
  })
})
