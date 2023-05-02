import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Info></Info>
        <About></About>
        <Interest></Interest>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
