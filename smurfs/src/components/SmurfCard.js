import React from "react";

export default props => {
  console.log(props);
  return (
    <section>
      <h3>{props.smurf.name}</h3>
      <p>Age: {props.smurf.age} years old</p>
      <p>Height: {props.smurf.height}</p>
    </section>
  );
};
