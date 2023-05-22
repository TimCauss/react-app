import ListGroup from "./components/listGroup";

function App() {
  let items = ["New York", "Sans Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
