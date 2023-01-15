import "./App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navber from "./Components/Navber";
import Plan from "./Components/Plan";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Navber />
      <Header />
      <Card />
      <Plan />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
