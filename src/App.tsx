import { Route, Routes } from "react-router-dom"
import Users from "./pages/Users"



function App() {


  return (
    <div>
     
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
