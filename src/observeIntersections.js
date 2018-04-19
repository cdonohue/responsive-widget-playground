export default function observeIntersections(nodeList, callback) {
  console.log(nodeList)
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry)
        observer.unobserve(entry.target)
      }
    })
  })

  const intersectionElements = [...nodeList]

  if (intersectionElements.length) {
    intersectionElements.forEach((element) =>
      intersectionObserver.observe(element)
    )
  }
}
