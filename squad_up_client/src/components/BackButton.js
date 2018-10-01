import React from "react";
import { Button } from 'semantic-ui-react'

const BackButton = props => {
  return <Button circular icon='arrow left' size='big' onClick={() => props.last()}/>;
};

export default BackButton;
