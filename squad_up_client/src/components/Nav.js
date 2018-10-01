import React, { Fragment } from "react";
import { Button } from 'semantic-ui-react'

const Nav = props => {

  return(
    <center>
      <br></br>
    <Button circular icon='arrow left' size='big' />
    <Button circular icon='arrow right' size='big' />
    <br></br>
    <br></br>
    <Button icon='plus' content='Add'/>
    <Button icon='save outline' content='Save'/>
    </center>
  )
}

export default Nav;
