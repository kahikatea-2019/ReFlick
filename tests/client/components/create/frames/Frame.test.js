import Frame from '../../../client/components/frames/Frame'
import { shallow } from 'enzyme'
import React from 'react'

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

let wrapper

beforeEach(() => {
  wrapper = shallow(<Frame/>)
})
describe('<Frame is running', () => {
  it('Renders correct', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Renders one <p>', () => {
    expect(wrapper.find('p')).toHaveLength(1)
  })
})
