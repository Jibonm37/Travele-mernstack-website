import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Tours/Login/Login';
import Tours from './components/Tours/Tours';
import NotFound from './components/Notfound/NotFound';
import AuthProvider from './components/contexts/Authprovider';

function App() {
  return (
    <div className="App">
 <AuthProvider>
 <BrowserRouter>
    <Header></Header>
  <Switch>
    <Route exact path='/'>
        <Home></Home>
    </Route>
    <Route  path='/home'>
        <Home></Home>
    </Route>

    <Route path='/Tours'>
        <Tours></Tours>
    </Route>
    <Route path='/myOrder'>
       
    </Route>
    <Route path='/login'>
        <Login></Login>
    </Route>
    <Route path='*'>
        <NotFound></NotFound>
    </Route>
  </Switch>
  <Footer></Footer>
  </BrowserRouter>
 </AuthProvider>
    </div>
  );
}

export default App;
