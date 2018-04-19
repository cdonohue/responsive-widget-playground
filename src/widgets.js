import observeResizes from "./observeResizes"
import observeIntersections from "./observeIntersections"

// Get all placeholders on the screen
const placeholders = [
  ...document.querySelectorAll(`[data-widget]:not([data-active])`),
].map((element) => {
  // Mark element as active, so that multiple widgets don't cause duplicates
  element.setAttribute("data-active", "")

  return element
})

// Hook up resize events
observeResizes(document.querySelectorAll("[data-observe-resizes]"))

// Look for placeholders to scroll into the viewport
observeIntersections(document.querySelectorAll("[data-widget]"), (entry) => {
  // Do something when the element intersects with the viewport
  console.info("Element viewed...", entry)
  entry.target.classList.add("animated", "shake")
})
