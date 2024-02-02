import "./App.css";
import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";

function App() {
  return (
    <div className="App">
      <Header title="welcome to india" />
      <Person name="Varun" age="18" />
      <Button text="click" onClick={() => console.log("clicked")} />
      <List items={["car", "bike", "apple", "jet", "cycle"]} />
    </div>
  );
}

export default App;
