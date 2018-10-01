import React, { Fragment } from "react";
import Person from "../components/Person";

const PersonContainer = props => {

  return (
      <div className="belt">
        {props.current_user_arr
          .map(person => (
            <Person
              email={person.email}
              name={person.name}
              photo={person.photo}
              position={person.position}
              key={person.id}
              selected_color={props.selected_color}
            />
          ))}
      </div>

  );
};

export default PersonContainer;
