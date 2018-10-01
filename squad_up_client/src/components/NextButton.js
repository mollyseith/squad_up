import React from "react";
import { Button } from 'semantic-ui-react'

const NextButton = props => {
  return <Button circular icon='arrow right' size='big' onClick={() => props.next()}/>;
};

export default NextButton;
