import "./App.css";
import "./styles.css";
import "./Weather.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="London" />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
