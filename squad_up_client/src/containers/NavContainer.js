import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import Nav from '../components/Nav.js'

const NavContainer = props => {

  return (
    <div className="NavContainer">
    <Nav
      current_user={props.current_user}
      current_user_arr={props.current_user_arr}
      next={props.next}
      last={props.last}
      add={props.add}
    />
    </div>
  )
}

export default NavContainer;
