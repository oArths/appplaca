import './App.css';
import Header from "./components/header/Header.js"
import PlacaInfo from './components/pages';
import Footer from "./components/footer/index"

function App() {
  return (
    <div className="App">
      <Header/>
      <PlacaInfo/>
      <Footer/>
      
    </div>
  );
}
export default App;
