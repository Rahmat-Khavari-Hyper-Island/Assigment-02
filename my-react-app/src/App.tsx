import Button from "./Components/Button";
import Alart from "./Components/Alart";
import ListGroup from "./Components/ListGroup";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris", "London"];
  let heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alartVisible, setAlartVisibility] = useState(false);
  return (
    <div>
      <div>
        <ListGroup
          items={items}
          heading={heading}
          onSelectItem={handleSelectItem}
        />
      </div>
      <hr />
      <div>
        {alartVisible && (
          <Alart
            onClose={() => {
              setAlartVisibility(false);
            }}
          >
            My Alart
          </Alart>
        )}
        <Button
          color="primary"
          onClick={() => {
            setAlartVisibility(true);
          }}
        >
          Confirm?
        </Button>
      </div>
    </div>
  );
}

export default App;
