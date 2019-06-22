import React from 'react'
import MainScreen from './App/MainScreen'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainScreen/>
      </div>
    </BrowserRouter>
  )
}

export default App
