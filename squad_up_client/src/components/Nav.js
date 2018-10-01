import React, { Fragment } from "react";
import { Button } from 'semantic-ui-react'
import BackButton from "./BackButton"
import NextButton from "./NextButton"
import AddButton from "./AddButton"
import SaveButton from "./SaveButton"


const Nav = props => {

  return(
    <center>
      <br></br>
      <BackButton last={props.last} />
      <NextButton next={props.next} />
    <br></br>
    <br></br>
      <AddButton add={props.add} />
      <SaveButton />
    </center>
  )
}

export default Nav;
