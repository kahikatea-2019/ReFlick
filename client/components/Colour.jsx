import React from 'react'
import {Dropdown} from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import CustomMenu from './CustomMenu'

export default class Colour extends React.Component {
  returnDropdowns (colour, frames) {
    return frames.map(frame => {
      return <Dropdown.Item onClick={() => console.log('Colour:', colour + '\n' + 'Frame:', frame.id)} key={frame.id + colour}>{frame.name}</Dropdown.Item>
    })
  }

  render () {
    const colour = this.props.colour
    const frames = this.props.frames

    return (
      <React.Fragment>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <div className='colour' style={{width: 30, height: 30, backgroundColor: colour}}/>
          </Dropdown.Toggle>
          <Dropdown.Menu >
            {this.returnDropdowns(colour, frames)}
          </Dropdown.Menu>
        </Dropdown>
        <br/>
      </React.Fragment>
    )
  }
}

// TODO: Need to be able to set an active frame ->
// 1. Refactor component into a class to be able to store via state
// 2. Check whether a frame is set as active
// 2a. Default value should be no frame (null)

// export default function Colour (props) {
//   return (
//     <React.Fragment>
//       <Dropdown>
//         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//           <div className='colour' style={{width: 30, height: 30, backgroundColor: props.colour}}>
//             <Dropdown.Menu as={CustomMenu}>
//               <ul>
//                 {console.log(returnDropdowns(props.colour, props.frames))}
//               </ul>
//             </Dropdown.Menu>
//           </div>
//         </Dropdown.Toggle>
//       </Dropdown>
//       <br/>
//     </React.Fragment>
//   )
// }
