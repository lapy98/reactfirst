export const Planets = (props) => {
    return (
      <div>
        {props.name} {props.gasPlanet}
        {props.isGasPlanet}       
      </div>
    );
  };