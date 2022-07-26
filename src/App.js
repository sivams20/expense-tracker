import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Transaction from './components/Transaction/Transaction';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={ <Login /> } />
            <Route path='transaction' element={ <Transaction /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
