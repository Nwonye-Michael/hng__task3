import { BrowserRouter } from "react-router-dom"
import "./App.css"

import { useEffect, useState } from "react"
import Router from "./routes/Router"

function App() {
  const [user, setUser] = useState([])

  return (
    <div className="App ">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App

// import React from "react"

// const DraggableList = ({ data }) => {
//   return (
//     <div className="grid grid-cols-4">
//       {data.map((item) => (
//         <div
//           className="m-4"
//           key={item.id}
//           id={item.id}
//           draggable={true}
//           onDragStart={(e) => {
//             // Set the data to be transferred during drag
//             e.dataTransfer.setData("text/plain", item.id)
//           }}
//           style={{
//             width: "100px",
//             height: "100px",
//             backgroundColor: "lightblue",
//             cursor: "pointer",
//           }}
//         >
//           {item.id}
//         </div>
//       ))}
//     </div>
//   )
// }

// const App = () => {
//   let data = [
//     {
//       id: 1008042,
//       src: "https://image.tmdb.org/t/p/w500/3tzPSJiCPqacAgRsMkMPof2ZinL.jpg",
//     },
//     {
//       id: 385687,
//       src: "https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
//     },
//     {
//       id: 346698,
//       src: "https://image.tmdb.org/t/p/w500/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
//     },
//     {
//       id: 615656,
//       src: "https://image.tmdb.org/t/p/w500/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
//     },
//     {
//       id: 968051,
//       src: "https://image.tmdb.org/t/p/w500/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
//     },
//     {
//       id: 717930,
//       src: "https://image.tmdb.org/t/p/w500/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
//     },
//     {
//       id: 976573,
//       src: "https://image.tmdb.org/t/p/w500/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
//     },
//     {
//       id: 335977,
//       src: "https://image.tmdb.org/t/p/w500/9m161GawbY3cWxe6txd1NOHTjd0.jpg",
//     },
//     {
//       id: 614930,
//       src: "https://image.tmdb.org/t/p/w500/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
//     },
//     {
//       id: 667538,
//       src: "https://image.tmdb.org/t/p/w500/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
//     },
//     {
//       id: 678512,
//       src: "https://image.tmdb.org/t/p/w500/waBWlJlMpyFb7STkFHfFvJKgwww.jpg",
//     },
//     {
//       id: 912908,
//       src: "https://image.tmdb.org/t/p/w500/1HzL603WOer58xtnrRYdSIL5K04.jpg",
//     },
//     {
//       id: 298618,
//       src: "https://image.tmdb.org/t/p/w500/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
//     },
//     {
//       id: 569094,
//       src: "https://image.tmdb.org/t/p/w500/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
//     },
//     {
//       id: 820525,
//       src: "https://image.tmdb.org/t/p/w500/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
//     },
//     {
//       id: 990140,
//       src: "https://image.tmdb.org/t/p/w500/rV56FkcHkzHJcBOOqoCeSDnoBff.jpg",
//     },
//     {
//       id: 439079,
//       src: "https://image.tmdb.org/t/p/w500/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg",
//     },
//     {
//       id: 734253,
//       src: "https://image.tmdb.org/t/p/w500/2QL5j6mB4ZpyBcVr0WO9H9MQGBu.jpg",
//     },
//     {
//       id: 1093485,
//       src: "https://image.tmdb.org/t/p/w500/2a9DvjXQQezV0sWqJbIN2mDLgZZ.jpg",
//     },
//     {
//       id: 635910,
//       src: "https://image.tmdb.org/t/p/w500/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg",
//     },
//   ]

//   return (
//     <div>
//       <DraggableList data={data} />
//     </div>
//   )
// }

// export default App
