import { Route, Routes } from "react-router-dom"
import Users from "./pages/Users"
import { Provider } from "react-redux"
import { store } from "./redux/store"


function App() {


  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
