 import React, {useState} from 'react'

 import {Menu, Input, Container} from 'semantic-ui-react';
 




 function NavBar(){

  const [active, setActive]= useState('Home');

  const handaleClick = (e)=>{
    const {text} = e.target;
    setActive(text)
    console.log(e)
   
  }

  return (
    <div className="navbar">
      <Container >
      <Menu color="pink" secondary >
      <Menu.Item
        name="home"
        active={active === 'Home'}
        onClick={(e)=>handaleClick(e)}
      />
      <Menu.Item
        name='Messages'
        active={active === 'Messages'}
        onClick={(e)=>handaleClick(e)}
      />
      <Menu.Item
        name='Friends'
        active={active === 'Friends'}
        onClick={(e)=>handaleClick(e)}
        
      />
      <Menu.Menu position='right'>
        <Menu.Item
          name='Logout'
          active={active === 'Logout'}
          onClick={(e)=>handaleClick(e)}
         
        />
      </Menu.Menu>
    </Menu>
    </Container>
    </div>
  )
 }

 export default NavBar;