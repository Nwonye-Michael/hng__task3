import React, { useState } from "react"

const MyDragAndDropComponent = () => {
  const data = []
  const [currentlyDraggedElement, setCurrentlyDraggedElement] = useState(null)

  const handleDragStart = (event, id) => {
    setCurrentlyDraggedElement(id)
    // You can also set other data related to the dragged element, if needed
    event.dataTransfer.setData("text/plain", id.toString())
  }

  const handleDragEnter = (event, id) => {
    event.preventDefault()
    if (currentlyDraggedElement !== id) {
      // Handle the dragged-over element as needed
      // For example, add a CSS class to highlight the drop target
      event.target.classList.add("highlighted-drop-target")
    }
  }

  const handleDragLeave = (event) => {
    // Remove the highlight from the previous drop target
    event.target.classList.remove("highlighted-drop-target")
  }

  const handleDrop = (event, id) => {
    event.preventDefault()
    // Handle the drop action here, e.g., reorder elements in a list
    // You can use the currentlyDraggedElement and id to determine the source and target elements
    // Clear any highlight from the drop target
    event.target.classList.remove("highlighted-drop-target")
    setCurrentlyDraggedElement(null)
  }

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          onDragStart={(e) => handleDragStart(e, item.id)}
          onDragEnter={(e) => handleDragEnter(e, item.id)}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, item.id)}
          draggable
        >
          <img src={item.src} alt={`Image ${item.id}`} />
        </div>
      ))}
    </div>
  )
}

export default MyDragAndDropComponent
