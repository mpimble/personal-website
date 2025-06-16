import './App.css'
import { Link } from 'react-router'

const App = () => {
  return (
    <div>
      <p>Here, you can <Link to="/about">learn more about Michael Pimble</Link>, <Link to="/projects">look at his projects</Link>, or go directly to Regression Helper.</p>
    </div>
  )
}

export default App
