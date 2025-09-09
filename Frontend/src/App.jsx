import { CreateCard } from "./components/CreateCard";
import { Card } from "./components/Card";
import { useState } from "react";

function App() {
  const [cards, setCard] = useState([]);

    fetch("http://localhost:3000/mycards")
    .then(async function(res){
      const json = await res.json();
      setCard(json.mycards);
    })

  return (
    <div>
      <CreateCard />
      <Card cards={cards}/>
    </div>
  );
}

export default App;


/*
Create Card se backend me de rhe hai
Card se screen par render kar rhe
App.jsx se saare cards fetch karke Card component ko de rhe
*/