import React, { Fragment } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import Comic from './Comic'

const Person = props => {

  return(
    <center>
    <Card photo={props.photo} name={props.name}>
      <Card.Content photo={props.photo} name={props.name}>
         <Comic photo={props.photo} name={props.name}/>
      </Card.Content>
    </Card>
    </center>
  )
}

export default Person;
