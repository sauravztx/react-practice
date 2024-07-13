
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className="text-orange-700 text-3xl outline-double p-3">
        Context-API-Discussion
      </h1>
      <Profile/>
      <Login/>
      
    </UserContextProvider>
  )
}

export default App
