import "./App.css";
import "./styles.css";
import Search from "./Search";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />

          <Main />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
