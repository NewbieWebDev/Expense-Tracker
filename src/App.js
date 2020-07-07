import React from 'react';
import Header from './components/header/header'
import Balance from './components/balance/balance'
import './App.css';
import IncomeExpenses from './components/incomeExpenses/incomeExpenses';
import TransactionList from './components/transactionList/transactionList';
import Addtransaction from './components/addtransaction/addtransaction';


import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <Addtransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
