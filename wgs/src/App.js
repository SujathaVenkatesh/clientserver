import React from 'react';
import Navbar from './components/Nav';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import contact from './components/contact';
import Signup from './components/pages/Signup';
// import Session from './components/session';
import AboutUs from './components/pages/About';
import Services from './components/pages/Services';
import DM from './components/DM';
import UI from './components/ui';
import Webs from './components/Web';
import Pro from './components/Pro';
import Content from './components/Content';
import Ecom from './components/Ecom';
import Portfolio from './components/portfolio';
import Register from './components/Register';
import Cube from './components/Cube';
import Welcome from './components/Welcome';// import Cardimg from './components/cardimg';
function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
           <Route path='/AboutUs' component={AboutUs} />
          <Route path='/contact' component={contact} />
           <Route path='/Services' component={Services} />
          <Route path='/Signup' component={Signup} />
          <Route path='/DM' component={DM}/>
          <Route path='/UI' component={UI}/>
          <Route path='/Webs' component={Webs}/>
          <Route path='/Pro' component={Pro}/>
          <Route path='/Content' component={Content}/>
          <Route path='/Ecom' component={Ecom}/>
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/Register' component={Register}/>
          <Route path='/Cube' component={Cube}/>
          <Route path='/Welcome' component={Welcome}/>

          

          
        </Switch>
      </Router>
  );
}

export default App;
   
