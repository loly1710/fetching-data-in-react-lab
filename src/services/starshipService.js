const BASE_URL = `https://swapi.dev/api/starships/`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const search = async (name) => {
  try {
    const res = await fetch(`${BASE_URL}?search=${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { index , search};
