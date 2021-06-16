import Animated from './components/search/Animated'
import Round from './components/htmlElements/checkbox/Round'
import RateContainer from './components/htmlElements/checkbox/RateContainer'
import {Route, Link} from 'react-router-dom'
import Div from './components/atoms/Div'

import './App.css'

function App() {
  function search(text) {
    if(text !== "")
      alert(text)
  }

  const questions = ['Css', 'Html', 'React']
  return (
    <div className="App">
      <main>
        <Route path="/">
          <section>
            <nav>
	      <ul>
		<li><Link to="/search/animated"> Animated search</Link></li>
		<li><Link to="/htmlelements/checkbox/round">Checkbox Round</Link></li>
		<li><Link to="/htmlelements/checkbox/rate">Rate </Link></li>
	      </ul>
            </nav>
          </section>
        </Route>
	
	<Div className='contenedor'>
        <Route exact path="/search/animated">
	  <section><Animated search={search}/></section>
        </Route>
	<Route exact path="/htmlelements/checkbox/round">
	  <section><Round /></section>
	</Route>
	<Route exact path="/htmlelements/checkbox/rate">
	  <section><RateContainer globalName='Example of rate' optionsRate={questions}/></section>
	</Route>
	</Div>
      </main>
    </div>
  );
}

export default App;
