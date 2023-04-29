import './App.css';
import Hero1 from './hero';
import Nav from './navbar';
import Foot from './foot';
//import About from './About';
//import Recommend from './recommend';

function App(){
    return(
      <div className='App'>
        <header>
          <Nav />
        </header>
        <body>
          <div class="herohold">
            <Hero1/>
          </div>
        </body>
        <footer>
          <Foot />
        </footer>
      </div>
    );
}

export default App;

