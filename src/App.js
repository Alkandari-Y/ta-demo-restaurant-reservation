import "./App.css";
import Header from "./Components/Header";
import RestaurantList from "./Components/RestaurantList";
import ReservationForm from "./Components/ReservationForm";

function App() {
  let restaurant = {
    name: "Ashas",
    img: "",
  };

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <RestaurantList />
        <ReservationForm restaurant={restaurant} />
      </div>
    </div>
  );
}

export default App;
