import { Provider } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import { Error } from './components/Error/Error';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Spending from './components/Spending/Spending';
import Transaction from './components/Transaction/Transaction';
import store from './redux/store';

function App() {
  const { pathname } = useLocation();
  return (
    <Provider store={store}>
        <div className="App">
          {pathname === '/' ? null : <Navbar />}
          <div className='container'>
          <Routes>
            <Route exact path='/' element={ <Login /> } />
            <Route path='spending' element={ <Spending /> } />
            <Route path='transaction' element={ <Transaction /> } />
            <Route path='category' element={ <Category /> } />
            <Route path='*' element={ <Error /> } />
          </Routes>
          </div>
        </div>
    </Provider>
  );
}

export default App;
