import { useState } from 'react'
import './App.css'
import Homescreen from './components/Screens/Homescreen'
import EnterpriseEcommerce from './components/Screens/EnterpriseScreen/enterpriseEcommerce'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: (<Homescreen menuOpen={menuOpen} setMenuOpen={setMenuOpen} />)
    },
    {
      path:"enterprise",
      element: (<EnterpriseEcommerce menuOpen={menuOpen} setMenuOpen={setMenuOpen} />)
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
