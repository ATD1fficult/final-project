import {Router, Route} from 'react-router-dom'
import {About} from './Pages/About'
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <>
      <Header/>
      
      <main className="container content"><Router>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contact}/>
      </Router></main>
      <Footer/>
    </>
  );
}

export default App;
