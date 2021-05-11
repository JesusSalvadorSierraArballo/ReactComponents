import Animated from './components/search/Animated'
import Basic from './components/navbar/Basic'
import {Route, Link} from 'react-router-dom'
import './App.css'

function App() {
  function search(text) {
    if(text !== "")
      alert(text)
  }
  return (
    <div className="App">
      <Basic></Basic>
      <main>
        <Route path="/">
          <section>
            <nav>
	      <Link to="/search/animated"> Animated search</Link>             
            </nav>
          </section>
        </Route>
        <Route exact path="/search/animated">
	  <section><Animated search={search}/></section>
        </Route>
      </main>
    </div>
  );
}

export default App;
