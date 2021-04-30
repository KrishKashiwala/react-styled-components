import React from 'react'
import './App.css';
import styled from 'styled-components'
const Button = styled.button`
       cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => props.primary ? 'red' : 'palevioletred'} ;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`
const Upbutton  = styled(Button)`
      border : 5px dashed red;
`

const App = () =>{
      return (
            <>
                        
                        <Button primary> Click Me and see changes!</Button>
            </>
      )
      };

export default App;
 