
import React, {useState} from 'react'
import {Menu, Input, Container} from 'semantic-ui-react';

function Apps() {
  return (
    <Container>
      <Menu secondary ui menu>
      <Menu.Item color='red' item
        name='home'
      />
      <Menu.Item
        name='messages'
      />
      <Menu.Item
        name='friends'
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
        />
      </Menu.Menu>
    </Menu>
    </Container>
  )
}

export default Apps;
