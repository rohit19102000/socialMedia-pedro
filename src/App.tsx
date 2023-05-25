
import './App.css'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import  Login from './Pages/Login'
import CreatePost from './Pages/CreatePost/CreatePost'
import   NavBar  from './Components/navBar'

function App() {

  return (
<div className='App'>
  
    <Router >
      <NavBar/>

<Routes>

<Route path='/' element={<Home />} />
<Route path='/login' element={<Login />} />
<Route path='/Createposts' element={<CreatePost />} />

</Routes>

    </Router>
</div>
  )
}

export default App
