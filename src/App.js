import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddProduct />
    </div>
  );
}

export default App;
