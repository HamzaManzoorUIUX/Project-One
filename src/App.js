import React from 'react';
import './App.css';
import { GlobalProvider } from './context/globalContext';
import TransectionHistory from "./components/TransectionHistory";
import Title from "./components/Title";
import Total from "./components/Total";
import Balance from "./components/Balance";
import AddTransection from "./components/AddTransection";
function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Title />
            <Total />
            <Balance />
            <TransectionHistory />
            <AddTransection />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
