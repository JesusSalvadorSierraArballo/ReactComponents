import Animated from './components/search/Animated'
import './App.css';

function App() {
  function search(text) {
    if(text !== "")
      alert(text)
  }
  return (
    <div className="App">
      <header className="App-header">
	
      </header>
    <main>
      <section>
	<nav>
	  <a href='http://www.google.com'> Animated seach</a>
	</nav>
      </section>
    <section><Animated search={search}/></section>
    </main>
    </div>
  );
}

export default App;
