import React from 'react'
import App from '../../../client/components/App'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

App.prototype.componentDidMount = () => {}
test('Test runner is working', () => {
  expect(true).toBeTruthy()
})

test('<App />', () => {
  const wrapper = enzyme.shallow(<App />)
  expect(wrapper.find('h1').length).toBe(1)
})
