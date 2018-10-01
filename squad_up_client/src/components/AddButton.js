import React from "react";
import { Button } from 'semantic-ui-react'

const AddButton = props => {
  return <Button icon='plus' content='Add' onClick={() => props.add()}/>;
};

export default AddButton;
