import React from "react"
import { Route, Routes } from "react-router"
import Gallery from "../pages/Gallery"
import Login from "../pages/Login"

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default Router

// import { BrowserRouter } from "react-router-dom"
// import "./App.css"

// import { useEffect, useState } from "react"
// import Router from "./routes/Router"

// function App() {
//   const [user, setUser] = useState([])

//   return (
//     <BrowserRouter>
//       <Router />
//     </BrowserRouter>
//   )
// }

// export default App
