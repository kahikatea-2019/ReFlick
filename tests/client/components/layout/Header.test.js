import Header from '../../../../client/components/layout/Header'
import { shallow } from 'enzyme'
import React from 'react'

test('test runner is working', () => {
  expect(true).toBeTruthy()
})
let wrapper
beforeEach(() => {
  wrapper = shallow(<Header />)
})

describe('<Header /> is running', () => {
  it('Renders correct', () => {
    expect(wrapper).toMatchSnapshot()
  })
  // it('Renders correct text', () => {
  //   expect(wrapper.find('div').text()).toBe('REFLICK')
  // })
})
