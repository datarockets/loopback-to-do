import React from 'react'
import './styles.css'
import Header from 'src/components/Header'
import CreateCardFormContainer from 'src/containers/CreateCardFormContainer'

function App() {
  return (
    <div className="app">
      <Header />
      <CreateCardFormContainer />
    </div>
  )
}

export default App
