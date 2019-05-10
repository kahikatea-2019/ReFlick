import React from 'react'
import { shallow } from 'enzyme'
import Colour from '../../../client/components/Colour'

Colour.prototype.componentDidMount = () => {}
test('test runner is working', () => {
  expect(true).toBeTruthy()
})

// describe('Colour', () => {
//   it('Colour should render correctly in "debug" mode', () => {
//     const component = shallow(<Colour debug />)
//     expect(component).toMatchSnapshot()
//   })
// })
