// Event handler for the dragstart event
function handleDragStart(event) {
  // Access the dataTransfer object
  const dataTransfer = event.dataTransfer

  // Set data to be transferred
  dataTransfer.setData("text/plain", "This is some text data.")

  // Specify the allowed effect (e.g., 'move', 'copy', 'link')
  dataTransfer.effectAllowed = "move"

  // You can set additional data types and values if needed
  dataTransfer.setData("application/json", JSON.stringify({ key: "value" }))
}

// Event handler for the dragover event
function handleDragOver(event) {
  // Prevent the default behavior to allow a drop
  event.preventDefault()
}

// Event handler for the drop event
function handleDrop(event) {
  // Access the dataTransfer object
  const dataTransfer = event.dataTransfer

  // Retrieve the transferred data
  const textData = dataTransfer.getData("text/plain")
  const jsonData = dataTransfer.getData("application/json")

  console.log("Text Data:", textData)
  console.log("JSON Data:", JSON.parse(jsonData))

  // Prevent the default behavior
  event.preventDefault()
}

// Add event listeners to the draggable element
const draggableElement = document.getElementById("draggable")
draggableElement.addEventListener("dragstart", handleDragStart)

// Add event listeners to the drop target element
const dropTargetElement = document.getElementById("dropTarget")
dropTargetElement.addEventListener("dragover", handleDragOver)
dropTargetElement.addEventListener("drop", handleDrop)
