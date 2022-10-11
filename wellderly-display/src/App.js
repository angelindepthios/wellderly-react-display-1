import FetchAPI from "./components/FetchAPI";

function App() {

  const wellderlyAPI = "https://backend-deco.herokuapp.com/api/v1/user-analysis/";

  return (
    <FetchAPI url={wellderlyAPI} dummy="false"></FetchAPI>
  );
}

export default App;
