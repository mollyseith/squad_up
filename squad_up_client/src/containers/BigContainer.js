import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import PersonContainer from "./PersonContainer";
import NavContainer from "./NavContainer";

const BigContainer = props => {

  return (
    <div className="BigContainer">
    <PersonContainer
      current_user_arr={props.current_user_arr}
      squad={props.squad}
      current_user={props.current_user}
      selected_color={props.selected_color}
      next={props.next}
    />
    <NavContainer
      current_user={props.current_user}
      next={props.next}
      current_user_arr={props.current_user_arr}
    />
    </div>
  )
}

export default BigContainer;
