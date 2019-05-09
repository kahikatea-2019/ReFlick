import React from 'react'
import Colours from '../../../client/components/Colours'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Provider from 'react-redux'

test('<Colours/>', () => {
  const wrapper = shallow(<Colours />)
  expect(wrapper.find('h2').text()).toBe('  Colours  ')
})