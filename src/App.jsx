import React from 'react'
import './App.css';
import styled from 'styled-components'


const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => props.danger? 'rgb(200,200,200)' : 'black'} ;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  display : flex;
  justify-content: flex-end;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`
const App = () =>{
      return (
            <>
                        <Button warning danger> Click Me and see changes!</Button>
            </>
      )
      };

export default App;
 