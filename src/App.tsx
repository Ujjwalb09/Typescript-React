import { Person } from "./Person";
import "./App.css";
import { Countries } from "./Person";

function App() {
  return (
    <Person
      name={"Ujjwal"}
      age={22}
      isMarried={false}
      country={Countries.India}
    />
  );
}

export default App;
