import Frames from '../../../client/components/frames/Frames'
import { shallow } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({
  frames: [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 }
  ]
})

test('test runner is working', () => {
  expect(true).toBeTruthy()
})
let wrapper
beforeEach(() => {
  wrapper = shallow(<Provider store={store}><Frames /></Provider>)
})
describe('<Frames is running', () => {
  it('Renders correct', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it(('renders store'), () => {
    expect(wrapper).toEqual({})
  })
})
