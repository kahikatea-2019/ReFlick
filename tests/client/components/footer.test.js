import Footer from '../../../client/components/Footer'
import { shallow } from 'enzyme'
import React from 'react'

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

let wrapper

beforeEach(() => {
  wrapper = shallow(<Footer />)
})
describe('<Footer /> is running', () => {
  it('Renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Renders coorect text', () => {
    expect(wrapper.find('footer').text()).toBe('About us')
  })
})

