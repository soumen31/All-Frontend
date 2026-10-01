import Greeting from './components/single-component/Greeting'
import Header from './components/multiple-component/Header/Header'
import Footer from './components/multiple-component/Footer/Footer'
import JSXExample from './components/JSXExample/JSXExample'

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <h1>React Fundamentals</h1>
      <p>Welcome to Module 13</p>
      <main className="main-content">
        <Greeting />
        <JSXExample />
      </main>
      <Footer />
    </div>
  )
}
export default App
