import logo from './logo.svg';
import './App.css';
import store from './Project/redux/store';
import { Provider } from 'react-redux';
import CarriageDepartment from './Project/CarriageDepartment';
import CartDetails from './Project/CartDetails';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import GoToPayment from './Project/GoToPayment';
import About from './Project/About';
import HomePage from './Project/HomePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Provider store={store}>
          
          <BrowserRouter>
          <HomePage></HomePage>
            <Routes>
              <Route exact path="/CartDetails" element={<CartDetails />} />
              <Route exact path="/GoToPayment" element={<GoToPayment />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/" element={<CarriageDepartment />} />
              {/* <Route exact path="/" element={<HomePage />} /> */}
            </Routes>
          </BrowserRouter>

        </Provider>
      </header>
    </div>
  );
}

export default App;
