import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <section>
      <p>Number of results: {props.count}</p>
      <ul>
        {props.count > 0 ? (
          props.starships.map((starship) => (
            <li key={starship.name}>
              <StarshipCard starship={starship} />
            </li>
          ))
        ) : (
          <p>No ships available</p>
        )}
      </ul>
    </section>
  );
};

export default StarshipList;
