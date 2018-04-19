export default function observeResizes(nodeList) {
  const resizeObserver = new ResizeObserver((entries) => {
    const defaultBreakpoints = {
      width_SM: 0,
      width_MD: 512,
      width_LG: 768,
      width_XL: 960,
    }

    entries.forEach((entry) => {
      // Use breakpoints defined on the entry if they exist
      const breakpoints = entry.target.dataset.breakpoints
        ? JSON.parse(entry.target.dataset.breakpoints)
        : defaultBreakpoints

      Object.keys(breakpoints).forEach((breakpoint) => {
        const heights = [...entry.target.classList].filter((className) =>
          className.includes("height_")
        )
        const widths = [...entry.target.classList].filter((className) =>
          className.includes("width_")
        )
        // Update the matching breakpoints
        if (breakpoint.includes("height_")) {
          const minHeight = breakpoints[breakpoint]

          if (entry.contentRect.height >= minHeight) {
            entry.target.classList.remove(...heights)
            entry.target.classList.add(breakpoint)
          }
        }

        if (breakpoint.includes("width_")) {
          const minWidth = breakpoints[breakpoint]

          if (entry.contentRect.width >= minWidth) {
            entry.target.classList.remove(...widths)
            entry.target.classList.add(breakpoint)
          }
        }
      })
    })
  })

  const resizeableElements = [...nodeList]

  if (resizeableElements.length) {
    resizeableElements.forEach((element) => resizeObserver.observe(element))
  }

  // Iterates through the subtree
  const eachObserveableElement = (nodes, fn) => {
    if (nodes) {
      ;[].slice.call(nodes).forEach((node) => {
        if (node.nodeType === 1) {
          var containers = [].slice.call(
            node.querySelectorAll("[data-observe-resizes]")
          )
          if (node.hasAttribute("data-observe-resizes")) {
            containers.push(node)
          }
          for (var container, i = 0; (container = containers[i]); i++) {
            fn(container)
          }
        }
      })
    }
  }
  // Monitor the DOM for changes
  const mo = new MutationObserver(function(entries) {
    entries.forEach(function(entry) {
      eachObserveableElement(
        entry.addedNodes,
        resizeObserver.observe.bind(resizeObserver)
      )
    })
  })
  mo.observe(document.body, { childList: true, subtree: true })
}
