import CardController from "./component/cardController/CardController";
import UserCard from "./component/userCard/UserCard";




function App() {
  return (
    <div className="App min-h-screen flex-col lg:flex-row bg-dark w-screen flex justify-between overflow-x-hidden">
      <CardController />
      <UserCard />
    </div>
  );
}

export default App;
