import Footer from '../../../client/components/Footer'
import { shallow } from 'enzyme'
import React from 'react'

test('Test ', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper.find('footer').text()).toBe('About us')
})
