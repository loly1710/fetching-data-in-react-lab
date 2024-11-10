import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import * as StarshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await StarshipService.index();
      setStarships(data);
    };

    getData();
  }, []);

  const search = async (event) => {
    event.preventDefault();
    if (searchName) {
      const data = await StarshipService.search(searchName);
      setStarships(data);
    } else {
      const data = await StarshipService.index();
      setStarships(data);
    }
  };

  return (
    <main>
      <h1> Star Wars API </h1>
      <form onSubmit={search}>
        <p>Search Term: </p>
        <input
          type="text"
          value={searchName}
          onChange={(event) => setSearchName(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h3>Starships</h3>
      <StarshipList starships={starships.results} count={starships.count} />
    </main>
  );
};

export default App;
