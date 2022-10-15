
import './App.scss';
import {Header, About, Services,Footer, Footpage} from './container'
import {Navbar} from './components';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Services/>
      <About/>
      <Footer/>
      <Footpage/>
    </div>
  );
}

export default App;
