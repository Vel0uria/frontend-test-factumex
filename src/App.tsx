import React from 'react';
import useInitialState from './hooks/useInitialState';
import ContextProvider from './context/ContextProvider';
import Router from './Router';
import './App.css';

function App() {
  const InitialState = useInitialState()
  return (
    <ContextProvider.Provider value={InitialState}>
    <Router/>
    </ContextProvider.Provider>
  );
}

export default App;
