import React from 'react'
import './styles.css'
import Header from 'src/components/Header'
import CreateCardFormContainer from 'src/containers/CreateCardFormContainer'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="pt-4">
        <div className="container-fluid">
          <section>
            <CreateCardFormContainer />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
