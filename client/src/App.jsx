import { Layout } from "lucide-react"
import AuthLayout from "./components/ui/auth/Layout"

function App() {
 

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header</h1>

      <Routes>
        <Route path='auth' element={AuthLayout}>

        </Route>
      </Routes>
    </div>
     
  )
}

export default App
