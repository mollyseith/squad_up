import React, { Fragment } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

const Person = props => {

  return(
    <center>
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Image src={props.photo} />
        <Card.Meta>
        <span className='date'>{props.email}</span>
        </Card.Meta>
        <Card.Description>{props.position}</Card.Description>
      </Card.Content>

    </Card>
    </center>
  )
}

export default Person;
